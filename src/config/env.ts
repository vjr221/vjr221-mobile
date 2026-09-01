export type AppEnvironment = 'development' | 'staging' | 'production';
export const env = { name: (process.env.EXPO_PUBLIC_APP_ENV ?? 'development') as AppEnvironment, apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? 'https://vjr221.sn/wp-json/wp/v2', siteUrl: process.env.EXPO_PUBLIC_SITE_URL ?? 'https://vjr221.sn', requestTimeoutMs: 12_000 };
