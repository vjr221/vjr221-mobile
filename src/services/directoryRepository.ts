import { env } from '../config/env';
import { getJson } from './http';
import { withCacheFallback } from './cache';
import type { ContentItem } from '../types/content';

const CACHE_TTL = 15 * 60 * 1000;

export interface DirectoryCategory {
  id: number;
  slug: string;
  name: string;
  count: number;
}

interface RawContact {
  telephone: string | null;
  whatsapp: string | null;
  email: string | null;
  site_web: string | null;
  adresse: string | null;
  ville: string | null;
  region: string | null;
  gps: { lat: number; lng: number } | null;
}

interface RawDirectoryItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  permalink: string;
  category: { id: number; slug: string; name: string } | null;
  image: { url: string; thumb: string; alt: string | null } | null;
  contact: RawContact;
  horaires: string | null;
  prix: string | null;
  note: number | string | null;
}

interface RawDirectoryDetail extends RawDirectoryItem {
  content: string;
  galerie: { url: string }[];
  services: string[];
  reseaux: { plateforme: string | null; url: string }[];
  horaires_detail: { jour: string; heures: string | null }[];
}

interface RawList {
  items: RawDirectoryItem[];
  meta: { page: number; per_page: number; total: number; total_pages: number };
}

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

function toContentItem(raw: RawDirectoryItem): ContentItem {
  const { contact } = raw;
  return {
    id: raw.id,
    title: raw.title,
    excerpt: raw.excerpt ?? undefined,
    imageUrl: raw.image?.url,
    thumbnailUrl: raw.image?.thumb,
    type: 'directory',
    url: raw.permalink,
    tags: raw.category ? [raw.category.name] : undefined,
    practical: {
      address: contact.adresse ?? undefined,
      phone: contact.telephone ?? undefined,
      whatsapp: contact.whatsapp ?? undefined,
      email: contact.email ?? undefined,
      website: contact.site_web ?? undefined,
      hours: raw.horaires ?? undefined,
      coordinates: contact.gps ? { latitude: contact.gps.lat, longitude: contact.gps.lng } : undefined,
    },
  };
}

function toContentItemDetail(raw: RawDirectoryDetail): ContentItem {
  const base = toContentItem(raw);
  const content = raw.content ? stripHtml(raw.content) : undefined;
  return { ...base, content };
}

export async function getDirectoryCategories(): Promise<DirectoryCategory[]> {
  const result = await withCacheFallback('directory:categories', CACHE_TTL, async () => {
    const raw = await getJson<{ items: DirectoryCategory[] }>('/annuaire/categories', undefined, env.geoApiBaseUrl);
    return raw.items;
  });
  return result.value;
}

export interface DirectoryListResult {
  items: ContentItem[];
  meta: { page: number; perPage: number; total: number; totalPages: number };
  fromCache: boolean;
  stale: boolean;
}

export async function getDirectoryEntries(options: { categorie?: string; q?: string; page?: number; perPage?: number } = {}): Promise<DirectoryListResult> {
  const search = new URLSearchParams();
  if (options.categorie) search.set('categorie', options.categorie);
  if (options.q) search.set('q', options.q);
  if (options.page) search.set('page', String(options.page));
  if (options.perPage) search.set('per_page', String(options.perPage));
  const query = search.toString();
  const path = `/annuaire${query ? `?${query}` : ''}`;
  const cacheKey = `directory:list:${options.categorie ?? ''}:${options.q ?? ''}:${options.page ?? 1}`;

  const result = await withCacheFallback(cacheKey, CACHE_TTL, () => getJson<RawList>(path, undefined, env.geoApiBaseUrl));
  return {
    items: result.value.items.map(toContentItem),
    meta: { page: result.value.meta.page, perPage: result.value.meta.per_page, total: result.value.meta.total, totalPages: result.value.meta.total_pages },
    fromCache: result.fromCache,
    stale: result.stale,
  };
}

export async function getDirectoryEntry(id: number): Promise<ContentItem> {
  const result = await withCacheFallback(`directory:entry:${id}`, CACHE_TTL, () => getJson<RawDirectoryDetail>(`/annuaire/${id}`, undefined, env.geoApiBaseUrl));
  return toContentItemDetail(result.value);
}
