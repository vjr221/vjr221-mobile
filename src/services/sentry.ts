/**
 * Observabilité — contrat stable pour 1.6.0 Phase A.
 *
 * Historique : @sentry/react-native en import statique a contribué aux crashs
 * Android post-1.2.1 (module natif sans plugin Expo correctement prébuild).
 * En 1.5.0 / 1.6.0-A le SDK reste retiré : tout est no-op sûr.
 *
 * Règle stricte pour une future réintroduction (après matrice appareils) :
 * 1. Ne jamais importer le SDK au top-level de App.tsx / index.
 * 2. initMonitoring() uniquement APRÈS le premier rendu réussi (post-splash).
 * 3. Plugin Expo + test physique avant toute release CI.
 * 4. reportError / reportMessage ne doivent jamais throw.
 */

export type MonitoringContext = Record<string, string | number | boolean | null | undefined>;

let monitoringReady = false;

function toError(error: unknown): Error {
  if (error instanceof Error) return error;
  if (typeof error === 'string') return new Error(error);
  try {
    return new Error(JSON.stringify(error));
  } catch {
    return new Error(String(error));
  }
}

/**
 * À appeler une fois le premier frame affiché (ex. useEffect dans AppShell).
 * Aujourd’hui : no-op. Demain : import() dynamique du SDK + Sentry.init.
 */
export function initMonitoring(): void {
  if (monitoringReady) return;
  monitoringReady = true;
  // 1.6+ (après matrice) : dynamic import('@sentry/react-native') ici uniquement.
}

/** @deprecated Prefer initMonitoring after first paint. */
export function initSentry(): void {
  initMonitoring();
}

/** True after initMonitoring() has been called (post first paint). */
export function isMonitoringReady(): boolean {
  return monitoringReady;
}

export function reportError(error: unknown, context?: MonitoringContext): void {
  try {
    const err = toError(error);
    if (__DEV__) {
      console.warn('[monitoring]', err.message, context ?? {}, err);
    }
    // 1.6+ : if (monitoringReady && sdk) Sentry.captureException(err, { extra: context })
  } catch {
    // never break the app
  }
}

export function reportMessage(message: string, context?: MonitoringContext): void {
  try {
    if (__DEV__) {
      console.info('[monitoring]', message, context ?? {});
    }
    // 1.6+ : if (monitoringReady && sdk) Sentry.captureMessage(message, { extra: context })
  } catch {
    // never break the app
  }
}
