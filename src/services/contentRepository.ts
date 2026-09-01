import { getJson } from './http';
import type { ContentItem } from '../types/content';
export type WordPressPost = { id: number; date: string; link: string; title: { rendered: string }; excerpt: { rendered: string }; _embedded?: { 'wp:featuredmedia'?: { source_url: string }[] } };
const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').trim();
export const toContentItem = (post: WordPressPost): ContentItem => ({ id: post.id, title: stripHtml(post.title.rendered), excerpt: stripHtml(post.excerpt.rendered), type: 'news', url: post.link, publishedAt: post.date, imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url });
export async function getFeaturedContent(): Promise<ContentItem[]> { const posts = await getJson<WordPressPost[]>('/posts?per_page=6&_embed'); return posts.map(toContentItem); }
