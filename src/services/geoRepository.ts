import { env } from '../config/env';
import { getJson } from './http';
import { readCache, writeCache } from './cache';
import type {
  Commune,
  Department,
  GeoDetail,
  GeoEntity,
  GeoListMeta,
  GeoListResult,
  GeoPoint,
  GeoRef,
  KeyInfos,
  Region,
  RemoteImage,
  UsefulLink,
  Village,
} from '../types/geo';

const CACHE_TTL = 15 * 60 * 1000;

/** Forme brute renvoyée par vjr221/v1 pour une entité de liste (avant normalisation). */
interface RawGeoItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  permalink: string;
  image: RemoteImage | null;
  gps: GeoPoint | null;
  infos: { superficie: string | null; population: string | null; chef_lieu: string | null; gentile: string | null };
  region?: GeoRef | null;
  departement?: GeoRef | null;
  arrondissement?: string | null;
  commune?: GeoRef | null;
}

interface RawGeoDetail extends RawGeoItem {
  content: string;
  galerie: RemoteImage[];
  liens_utiles: { label: string | null; url: string }[];
}

interface RawList {
  items: RawGeoItem[];
  meta: { page: number; per_page: number; total: number; total_pages: number };
}

export const toInfos = (raw: RawGeoItem['infos']): KeyInfos => ({
  superficie: raw?.superficie ?? null,
  population: raw?.population ?? null,
  chefLieu: raw?.chef_lieu ?? null,
  gentile: raw?.gentile ?? null,
});

const toMeta = (raw: RawList['meta']): GeoListMeta => ({
  page: raw.page,
  perPage: raw.per_page,
  total: raw.total,
  totalPages: raw.total_pages,
});

export function toRegion(raw: RawGeoItem): Region {
  return { kind: 'region', id: raw.id, slug: raw.slug, title: raw.title, excerpt: raw.excerpt, permalink: raw.permalink, image: raw.image, gps: raw.gps, infos: toInfos(raw.infos) };
}

export function toDepartment(raw: RawGeoItem): Department {
  return {
    kind: 'department', id: raw.id, slug: raw.slug, title: raw.title, excerpt: raw.excerpt, permalink: raw.permalink, image: raw.image, gps: raw.gps, infos: toInfos(raw.infos),
    region: raw.region ?? null, departement: null, arrondissement: raw.arrondissement ?? null,
  };
}

export function toCommune(raw: RawGeoItem): Commune {
  return {
    kind: 'commune', id: raw.id, slug: raw.slug, title: raw.title, excerpt: raw.excerpt, permalink: raw.permalink, image: raw.image, gps: raw.gps, infos: toInfos(raw.infos),
    region: raw.region ?? null, departement: raw.departement ?? null, arrondissement: raw.arrondissement ?? null,
  };
}

export function toVillage(raw: RawGeoItem): Village {
  return { kind: 'village', id: raw.id, slug: raw.slug, title: raw.title, excerpt: raw.excerpt, permalink: raw.permalink, image: raw.image, gps: raw.gps, infos: toInfos(raw.infos), commune: raw.commune ?? null };
}

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

function toDetail<T extends GeoEntity>(raw: RawGeoDetail, mapper: (r: RawGeoItem) => T): GeoDetail<T> {
  const content = raw.content ? stripHtml(raw.content) : '';
  return { entity: mapper(raw), content: content || null, gallery: raw.galerie ?? [], usefulLinks: (raw.liens_utiles ?? []) as UsefulLink[] };
}

function buildQuery(params: Record<string, string | number | undefined>): string {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === '') return;
    search.set(key, String(value));
  });
  const query = search.toString();
  return query ? `?${query}` : '';
}

async function fetchList<T>(path: string, cacheKey: string, mapper: (raw: RawGeoItem) => T): Promise<GeoListResult<T>> {
  try {
    const raw = await getJson<RawList>(path, undefined, env.geoApiBaseUrl);
    const items = raw.items.map(mapper);
    const meta = toMeta(raw.meta);
    await writeCache(cacheKey, { items: raw.items, meta: raw.meta });
    return { items, meta, fromCache: false, stale: false };
  } catch (error) {
    const cached = await readCache<{ items: RawGeoItem[]; meta: RawList['meta'] }>(cacheKey, CACHE_TTL);
    if (cached) return { items: cached.value.items.map(mapper), meta: toMeta(cached.value.meta), fromCache: true, stale: cached.stale };
    throw error;
  }
}

async function fetchDetail<T extends GeoEntity>(path: string, cacheKey: string, mapper: (raw: RawGeoItem) => T): Promise<GeoDetail<T>> {
  try {
    const raw = await getJson<RawGeoDetail>(path, undefined, env.geoApiBaseUrl);
    await writeCache(cacheKey, raw);
    return toDetail(raw, mapper);
  } catch (error) {
    const cached = await readCache<RawGeoDetail>(cacheKey, CACHE_TTL);
    if (cached) return toDetail(cached.value, mapper);
    throw error;
  }
}

// ---- Régions ----------------------------------------------------------

export function getRegions(options: { q?: string } = {}): Promise<GeoListResult<Region>> {
  const query = buildQuery({ q: options.q });
  return fetchList(`/regions${query}`, `geo:regions:${options.q ?? ''}`, toRegion);
}

export function getRegion(id: number): Promise<GeoDetail<Region>> {
  return fetchDetail(`/regions/${id}`, `geo:region:${id}`, toRegion);
}

// ---- Départements -------------------------------------------------------

export function getDepartments(options: { regionId?: number; q?: string } = {}): Promise<GeoListResult<Department>> {
  const query = buildQuery({ region: options.regionId, q: options.q });
  return fetchList(`/departements${query}`, `geo:departments:${options.regionId ?? 'all'}:${options.q ?? ''}`, toDepartment);
}

export function getDepartment(id: number): Promise<GeoDetail<Department>> {
  return fetchDetail(`/departements/${id}`, `geo:department:${id}`, toDepartment);
}

// ---- Communes -----------------------------------------------------------

export function getCommunes(options: { departmentId?: number; regionId?: number; q?: string } = {}): Promise<GeoListResult<Commune>> {
  const query = buildQuery({ departement: options.departmentId, region: options.regionId, q: options.q });
  return fetchList(`/communes${query}`, `geo:communes:${options.departmentId ?? 'all'}:${options.regionId ?? 'all'}:${options.q ?? ''}`, toCommune);
}

export function getCommune(id: number): Promise<GeoDetail<Commune>> {
  return fetchDetail(`/communes/${id}`, `geo:commune:${id}`, toCommune);
}

// ---- Villages / quartiers ------------------------------------------------

export function getVillages(options: { communeId?: number; q?: string } = {}): Promise<GeoListResult<Village>> {
  const query = buildQuery({ commune: options.communeId, q: options.q });
  return fetchList(`/villages${query}`, `geo:villages:${options.communeId ?? 'all'}:${options.q ?? ''}`, toVillage);
}

export function getVillage(id: number): Promise<GeoDetail<Village>> {
  return fetchDetail(`/villages/${id}`, `geo:village:${id}`, toVillage);
}
