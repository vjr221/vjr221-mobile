import { env } from '../config/env';

export class HttpError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'HttpError';
  }
}

function isRetryableStatus(status?: number): boolean {
  return status === undefined || status >= 500;
}

function joinUrl(baseUrl: string, path: string): string {
  return `${baseUrl.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}

function wait(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException('La requête a été interrompue.', 'AbortError'));
      return;
    }

    const timer = setTimeout(resolve, ms);
    const onAbort = () => {
      clearTimeout(timer);
      signal.removeEventListener('abort', onAbort);
      reject(new DOMException('La requête a été interrompue.', 'AbortError'));
    };
    signal.addEventListener('abort', onAbort, { once: true });
  });
}

async function fetchOnce<T>(baseUrl: string, path: string, signal: AbortSignal): Promise<T> {
  if (signal.aborted) {
    throw new DOMException('La requête a été interrompue.', 'AbortError');
  }

  const response = await fetch(joinUrl(baseUrl, path), {
    headers: { Accept: 'application/json' },
    signal,
  });
  if (!response.ok) throw new HttpError('La ressource est indisponible.', response.status);
  return response.json() as Promise<T>;
}

/** Délai de retry avec une petite marge aléatoire (jitter) pour éviter que de
 * nombreux clients ayant subi la même erreur transitoire ne retentent tous
 * exactement au même instant (effet « troupeau »). */
function retryDelayMs(): number {
  return 350 + Math.floor(Math.random() * 200);
}

// Requêtes GET identiques (même URL, aucun AbortSignal appelant fourni) en
// cours simultanées : on partage la même promesse plutôt que de laisser
// partir deux requêtes réseau redondantes (ex. deux écrans qui montent en
// même temps et appellent tous les deux getFeaturedContent()). Uniquement
// pour les appels sans `signal` propre, pour ne jamais mélanger la logique
// d'annulation de deux appelants distincts.
const inFlight = new Map<string, Promise<unknown>>();

async function requestWithRetry<T>(baseUrl: string, path: string, controller: AbortController): Promise<T> {
  try {
    return await fetchOnce<T>(baseUrl, path, controller.signal);
  } catch (error) {
    if (controller.signal.aborted) throw error;
    if (error instanceof HttpError && !isRetryableStatus(error.status)) throw error;
    await wait(retryDelayMs(), controller.signal);
    return await fetchOnce<T>(baseUrl, path, controller.signal);
  }
}

/**
 * Requête GET avec timeout, propagation du signal appelant, un seul retry
 * automatique (avec jitter) sur erreur réseau ou erreur 5xx, et déduplication
 * des appels identiques concurrents sans signal propre. Les erreurs 4xx ne
 * sont jamais rejouées. Le comportement reste déterministe pour les écrans et
 * les tests.
 */
export async function getJson<T>(path: string, signal?: AbortSignal, baseUrl: string = env.apiBaseUrl): Promise<T> {
  const dedupeKey = signal ? null : `${baseUrl}|${path}`;
  if (dedupeKey) {
    const existing = inFlight.get(dedupeKey);
    if (existing) return existing as Promise<T>;
  }

  const run = async (): Promise<T> => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), env.requestTimeoutMs);
    const onAbort = () => controller.abort();

    if (signal) {
      if (signal.aborted) controller.abort();
      else signal.addEventListener('abort', onAbort, { once: true });
    }

    try {
      return await requestWithRetry<T>(baseUrl, path, controller);
    } finally {
      clearTimeout(timer);
      signal?.removeEventListener('abort', onAbort);
    }
  };

  const promise = run();
  if (dedupeKey) {
    inFlight.set(dedupeKey, promise);
    promise.finally(() => {
      if (inFlight.get(dedupeKey) === promise) inFlight.delete(dedupeKey);
    });
  }
  return promise;
}
