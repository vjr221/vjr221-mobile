import { getJson } from './http';
import { readCache, writeCache } from './cache';
import { env } from '../config/env';
import type { ContentItem, ContentType } from '../types/content';
export type WordPressPost = { id: number; date: string; link: string; title: { rendered: string }; excerpt: { rendered: string }; content?: { rendered: string }; tags?: number[]; _embedded?: { 'wp:featuredmedia'?: { source_url: string }[] } };

const decodeHtmlEntities = (value: string) => value
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const normalizeText = (value: string) => decodeHtmlEntities(value).replace(/\s+/g, ' ').trim();

const stripUnsafeHtml = (value: string) => value
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<iframe[\s\S]*?<\/iframe>/gi, '');

/**
 * Convert WordPress HTML into readable text while preserving real HTTP(S)
 * links as compact link tokens. The UI can render these tokens as tappable
 * links without executing arbitrary HTML.
 */
const toSafeRichText = (value: string) => {
  const safe = stripUnsafeHtml(value);
  const withLinks = safe.replace(/<a\b[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, ' [[LINK:$1|$2]] ');
  return normalizeText(withLinks.replace(/<[^>]*>/g, ' '));
};

export const toContentItem = (post: WordPressPost): ContentItem => ({
  id: post.id,
  title: normalizeText(post.title.rendered),
  excerpt: normalizeText(post.excerpt.rendered),
  content: post.content ? toSafeRichText(post.content.rendered) : undefined,
  type: 'news',
  url: post.link,
  publishedAt: post.date,
  imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
});

export type CollectionResult = { items: ContentItem[]; fromCache: boolean; stale: boolean };
const CACHE_TTL = 15 * 60 * 1000;
async function getPosts(query: string, cacheKey: string): Promise<CollectionResult> { try { const posts = await getJson<WordPressPost[]>(`/posts?${query}&_embed`); const items = posts.map(toContentItem); await writeCache(cacheKey, items); return { items, fromCache: false, stale: false }; } catch (error) { const cached = await readCache<ContentItem[]>(cacheKey, CACHE_TTL); if (cached) return { items: cached.value, fromCache: true, stale: cached.stale }; throw error; } }
export async function getFeaturedContent(): Promise<CollectionResult> { return getPosts('per_page=6', 'home:featured'); }
export async function searchContent(term: string, page = 1): Promise<CollectionResult> { const clean = term.trim(); if (!clean) return { items: [], fromCache: false, stale: false }; return getPosts(`per_page=12&page=${page}&search=${encodeURIComponent(clean)}`, `search:${clean}:${page}`); }
export async function getContentDetail(id: number): Promise<ContentItem> { const result = await getPosts(`include=${id}&per_page=1`, `detail:${id}`); const item = result.items[0]; if (!item) throw new Error('Contenu introuvable.'); return item; }

interface RawLieuContentItem { id: number; title: string; excerpt: string | null; permalink: string; image: { url: string; thumb: string; alt: string | null } | null; type: string; category: { id: number; slug: string; name: string } | null; }
const KNOWN_LIEU_TYPES: ContentType[] = ['tourism', 'heritage', 'gastronomy', 'people', 'news'];
function toLieuContentItem(raw: RawLieuContentItem): ContentItem { const type = (KNOWN_LIEU_TYPES as string[]).includes(raw.type) ? (raw.type as ContentType) : 'news'; return { id: raw.id, title: raw.title, excerpt: raw.excerpt ?? undefined, imageUrl: raw.image?.url, type, url: raw.permalink, tags: raw.category ? [raw.category.name] : undefined }; }
export async function getLieuContent(lieuId: number): Promise<CollectionResult> { const cacheKey = `lieu-content:${lieuId}`; try { const raw = await getJson<{ items: RawLieuContentItem[] }>(`/lieu/${lieuId}/contenus`, undefined, env.geoApiBaseUrl); const items = raw.items.map(toLieuContentItem); await writeCache(cacheKey, items); return { items, fromCache: false, stale: false }; } catch (error) { const cached = await readCache<ContentItem[]>(cacheKey, CACHE_TTL); if (cached) return { items: cached.value, fromCache: true, stale: cached.stale }; throw error; } }
export async function resolveContentBySlug(slug: string): Promise<ContentItem | null> { const posts = await getJson<WordPressPost[]>(`/posts?slug=${encodeURIComponent(slug)}&_embed`); const post = posts[0]; return post ? toContentItem(post) : null; }
