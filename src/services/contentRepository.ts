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

export type WordPressFeaturedMedia = {
  source_url: string;
  media_details?: { sizes?: Record<string, { source_url: string }> };
};

const NAMED_HTML_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  hellip: '…',
  mdash: '—',
  ndash: '–',
  minus: '−',
  lsquo: '‘',
  rsquo: '’',
  ldquo: '“',
  rdquo: '”',
  laquo: '«',
  raquo: '»',
  agrave: 'à',
  acirc: 'â',
  auml: 'ä',
  eacute: 'é',
  egrave: 'è',
  ecirc: 'ê',
  euml: 'ë',
  icirc: 'î',
  iuml: 'ï',
  ocirc: 'ô',
  ouml: 'ö',
  ugrave: 'ù',
  ucirc: 'û',
  uuml: 'ü',
  ccedil: 'ç',
  ntilde: 'ñ',
  Agrave: 'À',
  Acirc: 'Â',
  Auml: 'Ä',
  Eacute: 'É',
  Egrave: 'È',
  Ecirc: 'Ê',
  Euml: 'Ë',
  IcirC: 'Î',
  Iuml: 'Ï',
  OcirC: 'Ô',
  Ouml: 'Ö',
  Ugrave: 'Ù',
  Ucirc: 'Û',
  Uuml: 'Ü',
  Ccedil: 'Ç',
  Ntilde: 'Ñ',
  oelig: 'œ',
  OElig: 'Œ',
  aelig: 'æ',
  AElig: 'Æ',
  copy: '©',
  reg: '®',
  trade: '™',
  bull: '•',
  middot: '·',
};

/** Décodage défensif : entités HTML, double encodage et quelques cas de
 * mojibake UTF-8→Latin-1 fréquemment produits par des imports historiques. */
export const decodeHtmlEntities = (value: string): string => {
  let result = value;
  for (let pass = 0; pass < 3; pass += 1) {
    const decoded = result.replace(/&(#x[0-9a-fA-F]+|#[0-9]+|[a-zA-Z][a-zA-Z0-9]*);?/g, (match, entity: string) => {
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
    if (decoded === result) break;
    result = decoded;
  }

  // UTF-8 bytes affichés comme caractères Latin-1 (Ã©, â€™, Â°, etc.).
  if (/[ÃÂâð][\x80-\xBF]/.test(result)) {
    try {
      const bytes = Array.from(result).map((char) => (char.charCodeAt(0) <= 255 ? `%${char.charCodeAt(0).toString(16).padStart(2, '0')}` : char));
      const repaired = decodeURIComponent(bytes.join(''));
      if (!repaired.includes('�')) result = repaired;
    } catch {
      // Conserver le texte original plutôt que risquer de perdre du contenu.
    }
  }

  return result
    .replace(/[​-‍﻿]/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .trim();
};

const stripHtml = (value: string) => decodeHtmlEntities(value.replace(/<[^>]*>/g, ''));

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
export async function getFeaturedContent(): Promise<CollectionResult> {
  return getPosts('per_page=6', 'home:featured');
}
export async function searchContent(term: string, page = 1): Promise<CollectionResult> {
  const clean = term.trim();
  if (!clean) return { items: [], fromCache: false, stale: false };
  return getPosts(`per_page=12&page=${page}&search=${encodeURIComponent(clean)}`, `search:${clean}:${page}`);
}
export async function getContentDetail(id: number): Promise<ContentItem> {
  const result = await getPosts(`include=${id}&per_page=1`, `detail:${id}`);
  const item = result.items[0];
  if (!item) throw new Error('Contenu introuvable.');
  return item;
}

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
  return {
    id: raw.id,
    title: decodeHtmlEntities(raw.title),
    excerpt: raw.excerpt ? decodeHtmlEntities(raw.excerpt) : undefined,
    imageUrl: raw.image?.url,
    thumbnailUrl: raw.image?.thumb,
    type,
    url: raw.permalink,
    tags: raw.category ? [decodeHtmlEntities(raw.category.name)] : undefined,
  };
}

export async function getLieuContent(lieuId: number): Promise<CollectionResult> {
  const result = await withCacheFallback(`lieu-content:${lieuId}`, CACHE_TTL, async () => {
    const raw = await getJson<{ items: RawLieuContentItem[] }>(`/lieu/${lieuId}/contenus`, undefined, env.geoApiBaseUrl);
    return raw.items.map(toLieuContentItem);
  });
  return { items: result.value, fromCache: result.fromCache, stale: result.stale };
}

export async function resolveContentBySlug(slug: string): Promise<ContentItem | null> {
  const posts = await getJson<WordPressPost[]>(`/posts?slug=${encodeURIComponent(slug)}&_embed`);
  const post = posts[0];
  return post ? toContentItem(post) : null;
}

export const CATEGORY_TAXONOMY: Partial<Record<ContentType, number[]>> = {
  tourism: [16, 108, 41, 106, 40, 17],
  heritage: [8, 103, 105, 102],
  gastronomy: [6, 97, 209, 99],
  history: [14],
  nature: [10, 5, 120],
  culture: [11, 130, 134],
  events: [4],
  people: [12, 34, 35, 33, 38, 39, 303, 302, 312, 360, 335],
  news: [25],
};

const CATEGORY_PAGE_SIZE = 12;
function toTypedContentItem(post: WordPressPost, type: ContentType): ContentItem {
  return { ...toContentItem(post), type };
}
export type CategoryPageResult = CollectionResult & { hasMore: boolean };
export async function getCategoryContent(type: ContentType, opts: { page?: number; q?: string } = {}): Promise<CategoryPageResult> {
  const categoryIds = CATEGORY_TAXONOMY[type];
  if (!categoryIds?.length) return { items: [], fromCache: false, stale: false, hasMore: false };
  const page = opts.page ?? 1;
  const search = opts.q?.trim();
  const query = `categories=${categoryIds.join(',')}&per_page=${CATEGORY_PAGE_SIZE}&page=${page}${search ? `&search=${encodeURIComponent(search)}` : ''}`;
  const fetchPage = async () => {
    const posts = await getJson<WordPressPost[]>(`/posts?${query}&_embed`);
    return posts.map((post) => toTypedContentItem(post, type));
  };
  if (page !== 1) {
    const items = await fetchPage();
    return { items, fromCache: false, stale: false, hasMore: items.length === CATEGORY_PAGE_SIZE };
  }
  const result = await withCacheFallback(`category:${type}:1:${search ?? ''}`, CACHE_TTL, fetchPage);
  return {
    items: result.value,
    fromCache: result.fromCache,
    stale: result.stale,
    hasMore: result.fromCache ? false : result.value.length === CATEGORY_PAGE_SIZE,
  };
}
