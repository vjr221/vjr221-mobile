import { getJson } from './http';
import { readCache, writeCache } from './cache';
import type { ContentItem } from '../types/content';
export type WordPressPost = { id: number; date: string; link: string; title: { rendered: string }; excerpt: { rendered: string }; content?: { rendered: string }; tags?: number[]; _embedded?: { 'wp:featuredmedia'?: { source_url: string }[] } };
const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').trim();
export const toContentItem = (post: WordPressPost): ContentItem => ({ id: post.id, title: stripHtml(post.title.rendered), excerpt: stripHtml(post.excerpt.rendered), content: post.content ? stripHtml(post.content.rendered) : undefined, type: 'news', url: post.link, publishedAt: post.date, imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url });
export type CollectionResult = { items: ContentItem[]; fromCache: boolean; stale: boolean };
const CACHE_TTL = 15 * 60 * 1000;
async function getPosts(query: string, cacheKey: string): Promise<CollectionResult> { try { const posts = await getJson<WordPressPost[]>(`/posts?${query}&_embed`); const items = posts.map(toContentItem); await writeCache(cacheKey, items); return { items, fromCache: false, stale: false }; } catch (error) { const cached = await readCache<ContentItem[]>(cacheKey, CACHE_TTL); if (cached) return { items: cached.value, fromCache: true, stale: cached.stale }; throw error; } }
export async function getFeaturedContent(): Promise<CollectionResult> { return getPosts('per_page=6', 'home:featured'); }
export async function searchContent(term: string, page = 1): Promise<CollectionResult> { const clean = term.trim(); if (!clean) return { items: [], fromCache: false, stale: false }; return getPosts(`per_page=12&page=${page}&search=${encodeURIComponent(clean)}`, `search:${clean}:${page}`); }
export async function getContentDetail(id: number): Promise<ContentItem> { const result = await getPosts(`include=${id}&per_page=1`, `detail:${id}`); const item = result.items[0]; if (!item) throw new Error('Contenu introuvable.'); return item; }
