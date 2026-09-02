import { env } from '../config/env';

export class HttpError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
  }
}

function isRetryableStatus(status?: number): boolean {
  // Erreurs transitoires uniquement (indisponibilité serveur) : jamais 4xx
  // (ressource inexistante, mauvaise requête) — réessayer n'y changerait rien.
  return status === undefined || status >= 500;
}

async function fetchOnce<T>(baseUrl: string, path: string, signal: AbortSignal): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, { headers: { Accept: 'application/json' }, signal });
  if (!response.ok) throw new HttpError('La ressource est indisponible.', response.status);
  return response.json() as Promise<T>;
}

/**
 * Un seul retry automatique (courte pause) sur échec réseau ou erreur 5xx.
 * Ne retente jamais sur une erreur 4xx (ressource absente) ni sur un abort
 * volontaire (timeout applicatif, démontage de l'écran).
 */
export async function getJson<T>(path: string, signal?: AbortSignal, baseUrl: string = env.apiBaseUrl): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), env.requestTimeoutMs);
  const effectiveSignal = signal ?? controller.signal;
  try {
    try {
      return await fetchOnce<T>(baseUrl, path, effectiveSignal);
    } catch (error) {
      if (effectiveSignal.aborted) throw error;
      if (error instanceof HttpError && !isRetryableStatus(error.status)) throw error;
      await new Promise((resolve) => setTimeout(resolve, 400));
      if (effectiveSignal.aborted) throw error;
      return await fetchOnce<T>(baseUrl, path, effectiveSignal);
    }
  } finally {
    clearTimeout(timer);
  }
}
