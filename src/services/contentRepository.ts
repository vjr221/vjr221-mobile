import { getJson } from './http';
import { readCache, writeCache } from './cache';
import { env } from '../config/env';
import type { ContentItem, ContentType } from '../types/content';
export type WordPressPost = { id: number; date: string; link: string; title: { rendered: string }; excerpt: { rendered: string }; content?: { rendered: string }; tags?: number[]; _embedded?: { 'wp:featuredmedia'?: { source_url: string }[] } };
const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').trim();
export const toContentItem = (post: WordPressPost): ContentItem => ({ id: post.id, title: stripHtml(post.title.rendered), excerpt: stripHtml(post.excerpt.rendered), content: post.content ? stripHtml(post.content.rendered) : undefined, type: 'news', url: post.link, publishedAt: post.date, imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url });
export type CollectionResult = { items: ContentItem[]; fromCache: boolean; stale: boolean };
const CACHE_TTL = 15 * 60 * 1000;
async function getPosts(query: string, cacheKey: string): Promise<CollectionResult> { try { const posts = await getJson<WordPressPost[]>(`/posts?${query}&_embed`); const items = posts.map(toContentItem); await writeCache(cacheKey, items); return { items, fromCache: false, stale: false }; } catch (error) { const cached = await readCache<ContentItem[]>(cacheKey, CACHE_TTL); if (cached) return { items: cached.value, fromCache: true, stale: cached.stale }; throw error; } }
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
  return { id: raw.id, title: raw.title, excerpt: raw.excerpt ?? undefined, imageUrl: raw.image?.url, type, url: raw.permalink, tags: raw.category ? [raw.category.name] : undefined };
}

/**
 * Contenus encyclopédiques (personnalités, tourisme, patrimoine, gastronomie)
 * réellement rattachés à une région/un département/une commune via le champ
 * ACF "Lieu associé" (vjr221/v1/lieu/{id}/contenus). Vide si rien n'est
 * rattaché — jamais de contenu associé inventé.
 */
export async function getLieuContent(lieuId: number): Promise<CollectionResult> {
  const cacheKey = `lieu-content:${lieuId}`;
  try {
    const raw = await getJson<{ items: RawLieuContentItem[] }>(`/lieu/${lieuId}/contenus`, undefined, env.geoApiBaseUrl);
    const items = raw.items.map(toLieuContentItem);
    await writeCache(cacheKey, items);
    return { items, fromCache: false, stale: false };
  } catch (error) {
    const cached = await readCache<ContentItem[]>(cacheKey, CACHE_TTL);
    if (cached) return { items: cached.value, fromCache: true, stale: cached.stale };
    throw error;
  }
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
