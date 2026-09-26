import { getJson } from './http';
import { withCacheFallback } from './cache';
import { env } from '../config/env';
import type { ContentItem, ContentType } from '../types/content';
import type { Locale } from '../i18n/strings';
import { parseRichContent } from './richText';
import { getWolofContent } from '../i18n/contentWolof';

export type WordPressPost = {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  title_wo?: { rendered: string } | string;
  excerpt: { rendered: string };
  excerpt_wo?: { rendered: string } | string;
  content?: { rendered: string };
  content_wo?: { rendered: string } | string;
  tags?: number[];
  _embedded?: { 'wp:featuredmedia'?: WordPressFeaturedMedia[] };
};
export type WordPressFeaturedMedia = { source_url: string; media_details?: { sizes?: Record<string, { source_url: string }> } };

const NAMED_HTML_ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: String.fromCharCode(160), hellip: '…', mdash: '—', ndash: '–', minus: '−',
  lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', laquo: '«', raquo: '»', agrave: 'à', acirc: 'â', auml: 'ä', eacute: 'é', egrave: 'è',
  ecirc: 'ê', euml: 'ë', icirc: 'î', iuml: 'ï', ocirc: 'ô', ouml: 'ö', ugrave: 'ù', ucirc: 'û', uuml: 'ü', ccedil: 'ç', ntilde: 'ñ',
  Agrave: 'À', Acirc: 'Â', Auml: 'Ä', Eacute: 'É', Egrave: 'È', Ecirc: 'Ê', Euml: 'Ë', Icirc: 'Î', Iuml: 'Ï', Ocirc: 'Ô', Ouml: 'Ö',
  Ugrave: 'Ù', Ucirc: 'Û', Uuml: 'Ü', Ccedil: 'Ç', Ntilde: 'Ñ', oelig: 'œ', OElig: 'Œ', aelig: 'æ', AElig: 'Æ', copy: '©', reg: '®', trade: '™', bull: '•', middot: '·',
};

export const decodeHtmlEntities = (value: string, options: { trim?: boolean } = {}): string => {
  let result = value;
  for (let pass = 0; pass < 3; pass += 1) {
    const decoded = result.replace(/&(#x[0-9a-fA-F]+|#[0-9]+|[a-zA-Z][a-zA-Z0-9]*);?/g, (match, entity: string) => {
      if (entity[0] === '#') {
        const isHex = entity[1] === 'x' || entity[1] === 'X';
        const code = parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10);
        if (Number.isNaN(code) || code < 0 || code > 0x10ffff) return match;
        try { return String.fromCodePoint(code); } catch { return match; }
      }
      return NAMED_HTML_ENTITIES[entity] ?? match;
    });
    if (decoded === result) break;
    result = decoded;
  }
  if (options.trim) result = result.trim();
  return result;
};

export const stripHtml = (value: string): string =>
  decodeHtmlEntities(value)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function normalizeMediaUrl(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const raw = value.trim();
  if (raw.startsWith('//')) return `https:${raw}`;
  if (raw.startsWith('http://')) return `https://${raw.slice('http://'.length)}`;
  if (raw.startsWith('https://')) return raw;
  if (raw.startsWith('/')) return `https://vjr221.sn${raw}`;
  return raw;
}

function pickThumbnail(media: WordPressFeaturedMedia | undefined): string | undefined {
  if (!media) return undefined;
  const sizes = media.media_details?.sizes;
  return normalizeMediaUrl(sizes?.medium?.source_url ?? sizes?.medium_large?.source_url ?? media.source_url);
}

/** Répare content_wo aplati côté CMS (ex. "### JëmmalnnTexte"). */
function normalizeWolofBody(value: string | undefined): string | undefined {
  if (!value) return undefined;
  let text = value.replace(/\\r\\n|\\r|\\n/g, '\n');
  text = text.replace(/(###[^\n]+)n{2,}(?=\S)/gu, '$1\n\n').trim();
  return text || undefined;
}

export const toContentItem = (post: WordPressPost): ContentItem => {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  const rawContent = post.content?.rendered;
  const contentBlocks = rawContent ? parseRichContent(rawContent) : undefined;
  const base: ContentItem = {
    id: post.id,
    title: stripHtml(post.title.rendered),
    titleWo: post.title_wo ? stripHtml(typeof post.title_wo === 'string' ? post.title_wo : post.title_wo.rendered) : undefined,
    excerpt: stripHtml(post.excerpt.rendered),
    excerptWo: post.excerpt_wo ? stripHtml(typeof post.excerpt_wo === 'string' ? post.excerpt_wo : post.excerpt_wo.rendered) : undefined,
    content: rawContent ? stripHtml(rawContent) : undefined,
    contentWo: post.content_wo ? normalizeWolofBody(stripHtml(typeof post.content_wo === 'string' ? post.content_wo : post.content_wo.rendered)) : undefined,
    contentBlocks: contentBlocks?.length ? contentBlocks : undefined,
    type: 'news',
    url: post.link,
    publishedAt: post.date,
    imageUrl: normalizeMediaUrl(media?.source_url),
    thumbnailUrl: pickThumbnail(media),
  };
  // Vague 8 : WordPress (title_wo / excerpt_wo / content_wo) prioritaire ;
  // couche locale contentWolof* = repli si le champ API est absent.
  const local = getWolofContent(base);
  return {
    ...base,
    titleWo: base.titleWo?.trim() || local?.titleWo,
    excerptWo: base.excerptWo?.trim() || local?.excerptWo,
    contentWo: normalizeWolofBody(base.contentWo?.trim() || local?.contentWo),
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

export function getHomeFeed(): Promise<CollectionResult> {
  return getPosts('per_page=12&orderby=date', 'content:home');
}

export function searchContent(term: string, page = 1): Promise<CollectionResult> {
  const q = encodeURIComponent(term.trim());
  return getPosts(`search=${q}&per_page=20&page=${page}`, `content:search:${term}:${page}`);
}

export function getContentByType(type: ContentType, page = 1): Promise<CollectionResult> {
  return getPosts(`per_page=20&page=${page}`, `content:type:${type}:${page}`);
}

type RawLieuContentItem = {
  id: number;
  title: string;
  excerpt?: string | null;
  permalink: string;
  image?: { url?: string; thumb?: string } | null;
  type?: string;
  category?: { id: number; slug: string; name: string } | null;
};

export async function getLieuContent(lieuId: number): Promise<CollectionResult> {
  const result = await withCacheFallback(`content:lieu:${lieuId}`, CACHE_TTL, async () => {
    const raw = await getJson<{ items: RawLieuContentItem[] }>(`/lieu/${lieuId}/contenus`, undefined, env.geoApiBaseUrl);
    return (raw.items ?? []).map((item) => ({
      id: item.id,
      title: decodeHtmlEntities(item.title),
      excerpt: item.excerpt ? decodeHtmlEntities(item.excerpt) : undefined,
      type: 'news' as ContentType,
      url: item.permalink,
      imageUrl: item.image?.url,
      thumbnailUrl: item.image?.thumb,
      tags: item.category ? [item.category.name] : undefined,
    }));
  });
  return { items: result.value, fromCache: result.fromCache, stale: result.stale };
}

export async function getContentDetail(id: number): Promise<ContentItem> {
  const posts = await getJson<WordPressPost[]>(`/posts?include=${id}&_embed`);
  if (!posts?.[0]) throw new Error('Contenu introuvable');
  return toContentItem(posts[0]);
}

export async function getContentBySlug(slug: string): Promise<ContentItem | null> {
  const posts = await getJson<WordPressPost[]>(`/posts?slug=${encodeURIComponent(slug)}&_embed`);
  if (!posts?.[0]) return null;
  return toContentItem(posts[0]);
}

export function localizeContentFields(item: ContentItem, locale: Locale): { title: string; excerpt?: string } {
  if (locale === 'wo') return { title: item.titleWo?.trim() || item.title, excerpt: item.excerptWo?.trim() || item.excerpt };
  return { title: item.title, excerpt: item.excerpt };
}


/** Compatibilité avec les écrans et deep-links de l'application. */
export const resolveContentBySlug = getContentBySlug;

/** Localise les champs éditoriaux selon la langue active. */
export function localizeContent(item: ContentItem, locale: Locale): { title: string; excerpt?: string } {
  return localizeContentFields(item, locale);
}

/** Contenu mis en avant de l'accueil. */
export function getFeaturedContent(): Promise<CollectionResult> {
  return getPosts('per_page=6&orderby=date', 'content:featured');
}

/**
 * Taxonomie WordPress vérifiée lors de l'intégration des univers éditoriaux.
 * Les IDs correspondent aux catégories réelles utilisées par VJR 221.
 */
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
export type CategoryPageResult = CollectionResult & { hasMore: boolean };

function toTypedContentItem(post: WordPressPost, type: ContentType): ContentItem {
  return { ...toContentItem(post), type };
}

export async function getCategoryContent(
  type: ContentType,
  opts: { page?: number; q?: string } = {},
): Promise<CategoryPageResult> {
  const categoryIds = CATEGORY_TAXONOMY[type];
  if (!categoryIds?.length) return { items: [], fromCache: false, stale: false, hasMore: false };
  const page = opts.page ?? 1;
  const search = opts.q?.trim();
  const query = `categories=${categoryIds.join(',')}&per_page=${CATEGORY_PAGE_SIZE}&page=${page}${search ? `&search=${encodeURIComponent(search)}` : ''}`;
  const cacheKey = `category:${type}:${page}:${search ?? ''}`;
  const result = await withCacheFallback(cacheKey, CACHE_TTL, async () => {
    const posts = await getJson<WordPressPost[]>(`/posts?${query}&_embed`);
    return posts.map((post) => toTypedContentItem(post, type));
  });
  return {
    items: result.value,
    fromCache: result.fromCache,
    stale: result.stale,
    hasMore: result.value.length === CATEGORY_PAGE_SIZE,
  };
}
