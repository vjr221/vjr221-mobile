export type AppEnvironment = 'development' | 'staging' | 'production';

const siteUrl = process.env.EXPO_PUBLIC_SITE_URL ?? 'https://vjr221.sn';

export const env = {
  name: (process.env.EXPO_PUBLIC_APP_ENV ?? 'development') as AppEnvironment,
  siteUrl,
  /** API REST WordPress standard (wp/v2) — publications, recherche globale. */
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? `${siteUrl}/wp-json/wp/v2`,
  /** API custom VJR 221 (vjr221/v1) — territoire (régions/départements/communes/villages) et annuaire. */
  geoApiBaseUrl: process.env.EXPO_PUBLIC_GEO_API_BASE_URL ?? `${siteUrl}/wp-json/vjr221/v1`,
  requestTimeoutMs: 12_000,
};
