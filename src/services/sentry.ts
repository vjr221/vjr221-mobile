/**
 * Compatibility layer kept for ErrorBoundary.
 *
 * Sentry's native SDK was removed from the production build in 1.4.1 while
 * diagnosing the Android startup crash. Keeping these functions dependency-
 * free lets the existing error boundary remain intact without introducing a
 * native module during application startup.
 */
export function initSentry() {
  // Intentionally disabled in 1.4.1.
}

/** Error relay used by ErrorBoundary -- must never throw. */
export function reportError(error: Error, extra?: Record<string, unknown>) {
  if (__DEV__) {
    console.warn('[VJR221] ErrorBoundary', error, extra);
  }
}
