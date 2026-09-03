import { getJson } from './http';
import { withCacheFallback } from './cache';
import { env } from '../config/env';
import type { ContentItem, ContentType } from '../types/content';
export type WordPressPost = {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  tags?: number[];
  _embedded?: { 'wp:featuredmedia'?: WordPressFeaturedMedia[] };
};

/** Média mis en avant tel qu'exposé par `_embed` sur `/wp/v2/posts`.
 * `media_details.sizes` est fourni par WordPress pour toute image mise en
 * avant classique ; absent uniquement pour un média externe/non standard —
 * on retombe alors sur `source_url` (voir `pickThumbnail`). */
export type WordPressFeaturedMedia = {
  source_url: string;
  media_details?: { sizes?: Record<string, { source_url: string }> };
};
// Table des entités HTML nommées les plus courantes dans le contenu WordPress
// (ponctuation typographique française + quelques lettres accentuées passées
// en entités par certains éditeurs). Les entités numériques (décimales et
// hexadécimales, y compris les emojis au-delà du plan de base) sont décodées
// dynamiquement plus bas, sans avoir besoin d'être listées ici.
const NAMED_HTML_ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  hellip: '…', mdash: '—', ndash: '–',
  lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”',
  laquo: '«', raquo: '»',
  agrave: 'à', acirc: 'â', auml: 'ä',
  eacute: 'é', egrave: 'è', ecirc: 'ê', euml: 'ë',
  icirc: 'î', iuml: 'ï',
  ocirc: 'ô', ouml: 'ö',
  ugrave: 'ù', ucirc: 'û', uuml: 'ü',
  ccedil: 'ç', ntilde: 'ñ',
  Agrave: 'À', Eacute: 'É', Egrave: 'È', Ccedil: 'Ç',
  oelig: 'œ', OElig: 'Œ', aelig: 'æ', AElig: 'Æ',
  copy: '©', reg: '®', trade: '™',
};

/** Décode les entités HTML (numériques décimales/hexadécimales et nommées),
 * y compris les emojis multi-code-points (ex. `&#9999;&#65039;` -> ✏️),
 * pour éviter d'afficher des codes bruts dans l'app quand WordPress renvoie
 * du contenu déjà « entity-encodé ». */
const decodeHtmlEntities = (value: string): string =>
  value.replace(/&(#x[0-9a-fA-F]+|#[0-9]+|[a-zA-Z][a-zA-Z0-9]*);/g, (match, entity: string) => {
    if (entity[0] === '#') {
      const isHex = entity[1] === 'x' || entity[1] === 'X';
      const code = parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      if (Number.isNaN(code) || code < 0 || code > 0x10ffff) return match;
      try {
        return String.fromCodePoint(code);
      } catch {
        return match;
      }
    }
    return NAMED_HTML_ENTITIES[entity] ?? match;
  });

const stripHtml = (value: string) => decodeHtmlEntities(value.replace(/<[^>]*>/g, '')).trim();

/** Choisit la meilleure miniature disponible pour une image mise en avant
 * WordPress (taille `medium`, sinon `medium_large`, sinon l'image d'origine)
 * — jamais la pleine résolution dans une liste/fiche compacte. */
function pickThumbnail(media: WordPressFeaturedMedia | undefined): string | undefined {
  if (!media) return undefined;
  const sizes = media.media_details?.sizes;
  return sizes?.medium?.source_url ?? sizes?.medium_large?.source_url ?? media.source_url;
}

export const toContentItem = (post: WordPressPost): ContentItem => {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  return {
    id: post.id,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(post.excerpt.rendered),
    content: post.content ? stripHtml(post.content.rendered) : undefined,
    type: 'news',
    url: post.link,
    publishedAt: post.date,
    imageUrl: media?.source_url,
    thumbnailUrl: pickThumbnail(media),
  };
};
export type CollectionResult = { items: ContentItem[]; fromCache: boolean; stale: boolean };
const CACHE_TTL = 15 * 60 * 1000;
async function getPosts(query: string, cacheKey: string): Promise<CollectionResult> {
  const result = await withCacheFallback(cacheKey, CACHE_TTL, async () => {
    const posts = await getJson<WordPressPost[]>(`/posts?${query}&_embed`);
    return posts.map(toContentItem);
  });
  return { items: result.value, fromCache: result.fromCache, stale: result.stale };
}
export async function getFeaturedContent(): Promise<CollectionResult> { return getPosts('per_page=6', 'home:featured'); }
export async function searchContent(term: string, page = 1): Promise<CollectionResult> { const clean = term.trim(); if (!clean) return { items: [], fromCache: false, stale: false }; return getPosts(`per_page=12&page=${page}&search=${encodeURIComponent(clean)}`, `search:${clean}:${page}`); }
export async function getContentDetail(id: number): Promise<ContentItem> { const result = await getPosts(`include=${id}&per_page=1`, `detail:${id}`); const item = result.items[0]; if (!item) throw new Error('Contenu introuvable.'); return item; }

// ---------------------------------------------------------------------------
// Contenus encyclopédiques associés à un lieu (région/département/commune)
// ---------------------------------------------------------------------------

interface RawLieuContentItem {
  id: number;
  title: string;
  excerpt: string | null;
  permalink: string;
  image: { url: string; thumb: string; alt: string | null } | null;
  type: string;
  category: { id: number; slug: string; name: string } | null;
}

const KNOWN_LIEU_TYPES: ContentType[] = ['tourism', 'heritage', 'gastronomy', 'people', 'news'];

function toLieuContentItem(raw: RawLieuContentItem): ContentItem {
  const type = (KNOWN_LIEU_TYPES as string[]).includes(raw.type) ? (raw.type as ContentType) : 'news';
  return { id: raw.id, title: raw.title, excerpt: raw.excerpt ?? undefined, imageUrl: raw.image?.url, thumbnailUrl: raw.image?.thumb, type, url: raw.permalink, tags: raw.category ? [raw.category.name] : undefined };
}

/**
 * Contenus encyclopédiques (personnalités, tourisme, patrimoine, gastronomie)
 * réellement rattachés à une région/un département/une commune via le champ
 * ACF "Lieu associé" (vjr221/v1/lieu/{id}/contenus). Vide si rien n'est
 * rattaché — jamais de contenu associé inventé.
 */
export async function getLieuContent(lieuId: number): Promise<CollectionResult> {
  const result = await withCacheFallback(`lieu-content:${lieuId}`, CACHE_TTL, async () => {
    const raw = await getJson<{ items: RawLieuContentItem[] }>(`/lieu/${lieuId}/contenus`, undefined, env.geoApiBaseUrl);
    return raw.items.map(toLieuContentItem);
  });
  return { items: result.value, fromCache: result.fromCache, stale: result.stale };
}

/**
 * Résout un contenu par son slug WordPress (permalien réel du site, ex.
 * "region-de-dakar") plutôt que par ID. Utilisé pour les deep links
 * provenant de vrais liens partagés (voir deepLinks.ts, destination
 * 'permalink') puisque l'immense majorité des URLs vjr221.sn n'exposent
 * pas d'ID. Renvoie `null` sans rien fabriquer si rien ne correspond.
 */
export async function resolveContentBySlug(slug: string): Promise<ContentItem | null> {
  const posts = await getJson<WordPressPost[]>(`/posts?slug=${encodeURIComponent(slug)}&_embed`);
  const post = posts[0];
  return post ? toContentItem(post) : null;
}

// ---------------------------------------------------------------------------
// Univers éditoriaux (Tourisme, Patrimoine, Gastronomie, Histoire, Nature,
// Culture, Événements, Personnalités) — vraie liste nationale par catégorie
// WordPress, pas seulement le contenu rattaché à un lieu (voir getLieuContent
// ci-dessus, qui reste utilisé pour la section "Contenus associés" d'une
// région/commune).
// ---------------------------------------------------------------------------

/**
 * ID de chaque catégorie WordPress (wp-json/wp/v2/categories) qui alimente un
 * univers éditorial de l'app, chapeau + sous-catégories directes réellement
 * publiées sur vjr221.sn au moment de cette intégration. Aucun ID inventé :
 * chacun correspond à une catégorie existante avec du contenu réel. `nature`
 * réunit volontairement deux rubriques du site ("Parcs & Nature" et "Faune &
 * Flore") qui ne forment qu'un seul univers côté app.
 */
export const CATEGORY_TAXONOMY: Partial<Record<ContentType, number[]>> = {
  tourism: [16, 108, 41, 106, 40, 17], // Sites touristiques + paysages, parcs/réserves, îles, plages (site + rubrique Plages dédiée)
  heritage: [8, 103, 105, 102], // Musées & patrimoine + sites religieux, architecture, sites UNESCO
  gastronomy: [6, 97, 209, 99], // Gastronomie sénégalaise + plats, recettes, boissons
  history: [14], // Sites historiques
  nature: [10, 5, 120], // Parcs & nature + faune & flore, fleuves
  culture: [11, 130, 134], // Patrimoine culturel immatériel + langues, artisanat
  events: [4], // Fêtes & événements
  people: [12, 34, 35, 33, 38, 39, 303, 302, 312, 360, 335], // Personnalités + artistes/musiciens, sportifs, État, entrepreneurs, diaspora, arts plastiques, cinéma, historiens, théâtre, ministres
  news: [25], // Actualités (rubrique dédiée, pas l'ensemble du site)
};

const CATEGORY_PAGE_SIZE = 12;

function toTypedContentItem(post: WordPressPost, type: ContentType): ContentItem {
  return { ...toContentItem(post), type };
}

export type CategoryPageResult = CollectionResult & { hasMore: boolean };

/**
 * Contenus d'un univers éditorial au niveau national (pas limité à un lieu),
 * filtrés par les vraies catégories WordPress de `CATEGORY_TAXONOMY` —
 * jamais une liste fabriquée. Pagine par 12 ; `hasMore` indique s'il reste
 * potentiellement une page suivante (heuristique standard : page pleine).
 */
export async function getCategoryContent(type: ContentType, opts: { page?: number; q?: string } = {}): Promise<CategoryPageResult> {
  const categoryIds = CATEGORY_TAXONOMY[type];
  if (!categoryIds || !categoryIds.length) return { items: [], fromCache: false, stale: false, hasMore: false };

  const page = opts.page ?? 1;
  const search = opts.q?.trim();
  const query = `categories=${categoryIds.join(',')}&per_page=${CATEGORY_PAGE_SIZE}&page=${page}${search ? `&search=${encodeURIComponent(search)}` : ''}`;

  const fetchPage = async () => {
    const posts = await getJson<WordPressPost[]>(`/posts?${query}&_embed`);
    return posts.map((post) => toTypedContentItem(post, type));
  };

  // Seule la première page est mise en cache (comportement inchangé) : une
  // page suivante est un "charger plus" explicite, jamais servie périmée.
  if (page !== 1) {
    const items = await fetchPage();
    return { items, fromCache: false, stale: false, hasMore: items.length === CATEGORY_PAGE_SIZE };
  }

  const result = await withCacheFallback(`category:${type}:1:${search ?? ''}`, CACHE_TTL, fetchPage);
  return { items: result.value, fromCache: result.fromCache, stale: result.stale, hasMore: result.fromCache ? false : result.value.length === CATEGORY_PAGE_SIZE };
}
