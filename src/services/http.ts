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
  const response = await fetch(joinUrl(baseUrl, path), {
    headers: { Accept: 'application/json' },
    signal,
  });
  if (!response.ok) throw new HttpError('La ressource est indisponible.', response.status);
  return response.json() as Promise<T>;
}

/**
 * Requête GET avec timeout, propagation du signal appelant et un seul retry
 * automatique sur erreur réseau ou erreur 5xx. Les erreurs 4xx ne sont jamais
 * rejouées. Le comportement reste déterministe pour les écrans et les tests.
 */
export async function getJson<T>(path: string, signal?: AbortSignal, baseUrl: string = env.apiBaseUrl): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), env.requestTimeoutMs);
  const onAbort = () => controller.abort();

  if (signal) {
    if (signal.aborted) controller.abort();
    else signal.addEventListener('abort', onAbort, { once: true });
  }

  try {
    try {
      return await fetchOnce<T>(baseUrl, path, controller.signal);
    } catch (error) {
      if (controller.signal.aborted) throw error;
      if (error instanceof HttpError && !isRetryableStatus(error.status)) throw error;
      await wait(400, controller.signal);
      return await fetchOnce<T>(baseUrl, path, controller.signal);
    }
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', onAbort);
  }
}
