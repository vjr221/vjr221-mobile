/**
 * Relais d'erreurs pour ErrorBoundary — sans SDK natif.
 *
 * Le SDK Sentry React Native a été retiré du build de production après 1.2.1
 * (crash démarrage Android). Ces fonctions restent sans dépendance native
 * pour ne jamais faire échouer le démarrage ; en __DEV__ les erreurs
 * remontent dans la console.
 */
export function initSentry() {
  // No-op : pas de SDK natif embarqué en 1.5.0.
}

/** Relais ErrorBoundary — ne doit jamais lever d'exception. */
export function reportError(error: Error, extra?: Record<string, unknown>) {
  if (__DEV__) {
    console.warn('[VJR221] ErrorBoundary', error, extra);
  }
}
