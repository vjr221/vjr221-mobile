import { env } from '../config/env';
import { getJson } from './http';
import { readCache, writeCache } from './cache';
import { decodeHtmlEntities } from './contentRepository';
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
  cta: { title: string; text: string; button_label: string; button_url: string } | null;
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

/** Nettoie les extraits WordPress où le sommaire est collé sans espaces. */
function cleanExcerpt(value: string | null | undefined): string | null {
  if (!value) return null;
  let text = decodeHtmlEntities(value, { trim: true });
  // WordPress colle parfois le sommaire entier en tête de l'extrait :
  // « SommairePrésentation généraleSituation géographiqueHistoire… ».
  text = text.replace(/^Sommaire\s*/i, '');
  const tocSections = [
    'Présentation générale',
    'Situation géographique',
    'Organisation administrative',
    'Perspectives de développement',
    'Infrastructures',
    'Éducation',
    'Population',
    'Économie',
    'Transport',
    'Histoire',
    'Culture',
    'Tourisme',
    'Patrimoine',
    'Environnement',
    'Investissement',
    'Santé',
    'Géographie',
  ];
  let changed = true;
  while (changed) {
    changed = false;
    for (const section of tocSections) {
      const re = new RegExp('^' + section.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*', 'i');
      if (re.test(text)) {
        text = text.replace(re, '');
        changed = true;
        break;
      }
    }
  }
  text = text.replace(/\s+/g, ' ').trim();
  // Si l'extrait reste un bloc collé sans espace (résidu de TOC), on l'ignore.
  if (text.length > 40 && !/\s/.test(text.slice(0, 40))) return null;
  if (text.length > 220) text = text.slice(0, 217).replace(/\s+\S*$/, '') + '…';
  return text || null;
}

const toMeta = (raw: RawList['meta']): GeoListMeta => ({
  page: raw.page,
  perPage: raw.per_page,
  total: raw.total,
  totalPages: raw.total_pages,
});

export function toRegion(raw: RawGeoItem): Region {
  return { kind: 'region', id: raw.id, slug: raw.slug, title: decodeHtmlEntities(raw.title), excerpt: cleanExcerpt(raw.excerpt), permalink: raw.permalink, image: normalizeRemoteImage(raw.image), gps: raw.gps, infos: toInfos(raw.infos) };
}

export function toDepartment(raw: RawGeoItem): Department {
  return {
    kind: 'department', id: raw.id, slug: raw.slug, title: decodeHtmlEntities(raw.title), excerpt: cleanExcerpt(raw.excerpt), permalink: raw.permalink, image: normalizeRemoteImage(raw.image), gps: raw.gps, infos: toInfos(raw.infos),
    region: raw.region ?? null, departement: null, arrondissement: raw.arrondissement ?? null,
  };
}

export function toCommune(raw: RawGeoItem): Commune {
  return {
    kind: 'commune', id: raw.id, slug: raw.slug, title: decodeHtmlEntities(raw.title), excerpt: cleanExcerpt(raw.excerpt), permalink: raw.permalink, image: normalizeRemoteImage(raw.image), gps: raw.gps, infos: toInfos(raw.infos),
    region: raw.region ?? null, departement: raw.departement ?? null, arrondissement: raw.arrondissement ?? null,
  };
}

export function toVillage(raw: RawGeoItem): Village {
  return { kind: 'village', id: raw.id, slug: raw.slug, title: decodeHtmlEntities(raw.title), excerpt: cleanExcerpt(raw.excerpt), permalink: raw.permalink, image: normalizeRemoteImage(raw.image), gps: raw.gps, infos: toInfos(raw.infos), commune: raw.commune ?? null };
}

const normalizeMediaUrl = (value: string | undefined): string | undefined => {
  if (!value?.trim()) return undefined;
  const raw = value.trim();
  if (raw.startsWith('//')) return `https:${raw}`;
  if (raw.startsWith('http://')) return `https://${raw.slice('http://'.length)}`;
  if (raw.startsWith('https://')) return raw;
  if (raw.startsWith('/')) return `https://vjr221.sn${raw}`;
  return raw;
};

const normalizeRemoteImage = (image: RemoteImage | null): RemoteImage | null =>
  image
    ? {
        ...image,
        url: normalizeMediaUrl(image.url) ?? image.url,
        thumb: normalizeMediaUrl(image.thumb) ?? image.thumb,
      }
    : null;

function toCta(raw: RawGeoDetail['cta']): GeoDetail<GeoEntity>['cta'] {
  if (!raw) return null;
  return { title: decodeHtmlEntities(raw.title), text: decodeHtmlEntities(raw.text), buttonLabel: decodeHtmlEntities(raw.button_label), buttonUrl: raw.button_url };
}

function toDetail<T extends GeoEntity>(raw: RawGeoDetail, mapper: (r: RawGeoItem) => T): GeoDetail<T> {
  const content = raw.content ? decodeHtmlEntities(raw.content, { trim: false }) : '';
  return { entity: mapper(raw), content: content || null, gallery: (raw.galerie ?? []).map((image) => normalizeRemoteImage(image)).filter((image): image is RemoteImage => Boolean(image)), usefulLinks: (raw.liens_utiles ?? []) as UsefulLink[], cta: toCta(raw.cta) };
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

    // Certains anciens enregistrements territoriaux peuvent ne pas être
    // accessibles par l'endpoint détail alors qu'ils sont bien présents dans
    // la liste. On utilise alors la fiche légère de la liste comme fallback
    // afin que la navigation reste fonctionnelle au lieu d'afficher une erreur.
    const match = /^\/(regions|departements|communes|villages)\/(\d+)$/.exec(path);
    if (match) {
      const collection = match[1];
      const id = Number(match[2]);
      const rawList = await getJson<RawList>(`/${collection}?per_page=100`, undefined, env.geoApiBaseUrl);
      const item = rawList.items.find((candidate) => candidate.id === id);
      if (item) {
        return {
          entity: mapper(item),
          content: null,
          gallery: [],
          usefulLinks: [],
          cta: null,
        };
      }
    }
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
