import { env } from '../config/env';

/**
 * Parseur centralisé des liens VJR 221.
 *
 * Reconnaît deux familles d'URL :
 * - le schéma custom de l'app : `vjr221://...`
 * - les liens universels du site : `https://vjr221.sn/...`
 *
 * Aucun écran n'analyse une URL lui-même : tout passe par `parseDeepLink`.
 * Si l'URL n'est pas reconnue, la destination est `unknown` — l'appelant
 * doit alors proposer un fallback propre vers le site web (jamais un écran
 * cassé ni une donnée inventée).
 */

export type DeepLinkDestination =
  | { kind: 'content'; id: number }
  | { kind: 'category'; slug: string }
  | { kind: 'region'; id: number }
  | { kind: 'department'; id: number }
  | { kind: 'commune'; id: number }
  | { kind: 'village'; id: number }
  | { kind: 'directory'; id: number }
  | { kind: 'directory-category'; slug: string }
  | { kind: 'home' }
  | { kind: 'permalink'; slug: string; url: string }
  | { kind: 'unknown'; url: string };

const GEO_SEGMENT_TO_KIND: Record<string, 'region' | 'department' | 'commune' | 'village'> = {
  regions: 'region',
  departements: 'department',
  communes: 'commune',
  'quartiers-villages': 'village',
};

function stripQueryAndHash(path: string): string {
  return path.split('?')[0].split('#')[0];
}

function splitSegments(path: string): string[] {
  return stripQueryAndHash(path).split('/').filter(Boolean);
}

function firstNumericSegment(segments: string[]): number | null {
  const candidate = segments.find((segment) => /^\d+$/.test(segment));
  return candidate ? Number(candidate) : null;
}

/**
 * Interprète une URL VJR 221 (site ou app) en destination interne typée.
 * Robuste aux paramètres additionnels (`?utm_source=...`, `#ancre`, slash final...).
 */
export function parseDeepLink(rawUrl: string): DeepLinkDestination {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return { kind: 'unknown', url: rawUrl };
  }

  const isAppScheme = url.protocol === 'vjr221:';
  const isSiteUrl = /^https?:$/.test(url.protocol) && stripWww(url.hostname) === stripWww(new URL(env.siteUrl).hostname);
  if (!isAppScheme && !isSiteUrl) {
    return { kind: 'unknown', url: rawUrl };
  }

  // vjr221://open/content/42  -> host="open", pathname="/content/42"
  const segments = isAppScheme ? [url.hostname, ...splitSegments(url.pathname)].filter(Boolean) : splitSegments(url.pathname);
  if (isAppScheme && segments[0] === 'open') segments.shift();

  if (segments.length === 0) {
    return { kind: 'home' };
  }

  const [first, second] = segments;

  if (first === 'annuaire' || first === 'directory') {
    if (second && /^\d+$/.test(second)) return { kind: 'directory', id: Number(second) };
    if (second) return { kind: 'directory-category', slug: second };
    return { kind: 'directory-category', slug: '' };
  }

  if (GEO_SEGMENT_TO_KIND[first]) {
    const id = second && /^\d+$/.test(second) ? Number(second) : firstNumericSegment(segments);
    if (id !== null) return { kind: GEO_SEGMENT_TO_KIND[first], id };
    return { kind: 'unknown', url: rawUrl };
  }

  if (first === 'content' || first === 'article') {
    const id = second && /^\d+$/.test(second) ? Number(second) : firstNumericSegment(segments);
    if (id !== null) return { kind: 'content', id };
  }

  if (first === 'category' || first === 'categorie') {
    if (second) return { kind: 'category', slug: second };
  }

  // Permalien WordPress classique : /mon-article-slug/ (pas d'ID visible dans l'URL,
  // c'est la forme de la GRANDE majorité des liens réellement partagés depuis le site).
  // On ne fabrique pas de correspondance ici : on renvoie le slug pour qu'un appel
  // réseau explicite (resolveContentBySlug, côté appelant) le résolve. Uniquement
  // pour un chemin à un seul segment sur le domaine du site -- pas pour /wp-admin/,
  // /feed/, etc. Si aucune correspondance n'est trouvée par l'appelant, il doit
  // retomber sur le fallback web, jamais inventer une fiche.
  if (segments.length === 1 && /^[a-z0-9-]+$/i.test(first)) {
    return { kind: 'permalink', slug: first, url: rawUrl };
  }

  return { kind: 'unknown', url: rawUrl };
}

function stripWww(hostname: string): string {
  return hostname.replace(/^www\./, '').toLowerCase();
}

/** URL de secours à ouvrir dans le navigateur quand la destination n'est pas reconnue. */
export function fallbackWebUrl(destination: DeepLinkDestination): string {
  if (destination.kind === 'unknown' || destination.kind === 'permalink') return destination.url;
  return env.siteUrl;
}
