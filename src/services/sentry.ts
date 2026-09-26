/**
 * Observabilité — contrat stable pour 1.6.0.
 *
 * Historique : @sentry/react-native en import statique a contribué aux crashs
 * Android post-1.2.1 (module natif sans plugin Expo correctement prébuild).
 * En 1.5.0 le SDK est retiré : tout est no-op.
 *
 * Règle stricte pour une future réintroduction :
 * 1. Ne jamais importer le SDK au top-level de App.tsx / index.
 * 2. initMonitoring() uniquement APRÈS le premier rendu réussi (post-splash).
 * 3. Plugin Expo + test physique avant toute release CI.
 * 4. reportError ne doit jamais throw.
 */

export type MonitoringContext = Record<string, string | number | boolean | null | undefined>;

let monitoringReady = false;

/**
 * À appeler une fois le premier frame affiché (ex. useEffect dans AppShell).
 * Aujourd’hui : no-op. Demain : import() dynamique du SDK + Sentry.init.
 */
export function initMonitoring(): void {
  if (monitoringReady) return;
  monitoringReady = true;
  // 1.6+ : dynamic import('@sentry/react-native') ici uniquement.
}

/** @deprecated Prefer initMonitoring after first paint. */
export function initSentry(): void {
  initMonitoring();
}

export function reportError(error: unknown, context?: MonitoringContext): void {
  try {
    if (__DEV__) {
      console.warn('[monitoring]', error, context);
    }
    // 1.6+ : Sentry.captureException if monitoringReady && sdk loaded
  } catch {
    // never break the app
  }
}

export function reportMessage(message: string, context?: MonitoringContext): void {
  try {
    if (__DEV__) {
      console.info('[monitoring]', message, context);
    }
  } catch {
    // never break the app
  }
}
