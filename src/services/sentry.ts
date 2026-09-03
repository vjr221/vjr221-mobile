import * as Sentry from '@sentry/react-native';

/**
 * DSN d'un projet Sentry ("VJR221 Mobile", org vjr-221) : c'est un identifiant
 * public destiné à être embarqué dans le client (comme une clé API publique),
 * pas un secret -- voir la doc Sentry sur le sujet. Surchargeable via
 * EXPO_PUBLIC_SENTRY_DSN pour un environnement de dev/CI qui voudrait pointer
 * vers un autre projet, mais fonctionne "out of the box" sans configuration
 * supplémentaire ni secret CI à poser.
 */
const DEFAULT_DSN = 'https://b938c96f4632d1c8d1210915b1788287@o4512024329191424.ingest.de.sentry.io/4512024400166992';

let initialized = false;

/**
 * Initialise Sentry le plus tôt possible (avant le premier rendu). Ne capture
 * que le JS (exceptions non interceptées, rejets de promesse, et tout ce que
 * `ErrorBoundary` relaie via `captureException`) -- pas de plugin natif
 * Expo/Gradle branché ici : l'upload de source maps nécessite un
 * SENTRY_AUTH_TOKEN (secret CI) qui n'est pas encore posé sur le dépôt, et un
 * plugin natif mal configuré aurait pu faire échouer le build Android en CI.
 * Peut être ajouté plus tard sans changement de code applicatif.
 */
export function initSentry() {
  if (initialized) return;
  initialized = true;
  try {
    Sentry.init({
      dsn: process.env.EXPO_PUBLIC_SENTRY_DSN || DEFAULT_DSN,
      environment: process.env.EXPO_PUBLIC_APP_ENV || 'production',
      // Échantillonnage prudent : app de contenu à faible complexité de
      // transactions, pas besoin de tracer 100% du trafic pour être utile.
      tracesSampleRate: 0.2,
      enableAutoSessionTracking: true,
      // Ne doit jamais empêcher l'app de démarrer si Sentry est injoignable.
      attachStacktrace: true,
    });
  } catch {
    // Sentry indisponible (réseau, etc.) : l'app doit continuer à fonctionner.
  }
}

/** Relais unique utilisé par `ErrorBoundary` -- ne lève jamais. */
export function reportError(error: Error, extra?: Record<string, unknown>) {
  try {
    Sentry.captureException(error, extra ? { extra } : undefined);
  } catch {
    // Idem : ne jamais faire échouer le filet de sécurité lui-même.
  }
}
