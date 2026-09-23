import { searchContent } from './contentRepository';
import { getDirectoryEntries } from './directoryRepository';
import { getRegions, getDepartments, getCommunes } from './geoRepository';
import type { ContentItem } from '../types/content';
import type { GeoEntity } from '../types/geo';

export type UnifiedGeoHit = {
  kind: 'region' | 'department' | 'commune';
  id: number;
  title: string;
  subtitle?: string;
};

export type UnifiedSearchResult = {
  content: ContentItem[];
  places: UnifiedGeoHit[];
  directory: ContentItem[];
  fromCache: boolean;
};

function entityToHit(entity: GeoEntity): UnifiedGeoHit {
  if (entity.kind === 'region') {
    return { kind: 'region', id: entity.id, title: entity.title };
  }
  if (entity.kind === 'department') {
    return {
      kind: 'department',
      id: entity.id,
      title: entity.title,
      subtitle: entity.region?.name,
    };
  }
  if (entity.kind === 'commune') {
    return {
      kind: 'commune',
      id: entity.id,
      title: entity.title,
      subtitle: entity.departement?.name ?? entity.region?.name,
    };
  }
  // village — on l'expose comme entrée « commune » pour ouvrir le détail geo
  return {
    kind: 'commune',
    id: entity.id,
    title: entity.title,
    subtitle: entity.commune?.name,
  };
}

/**
 * Recherche transversale : publications WordPress + territoires + annuaire.
 * Les erreurs partielles n'annulent pas le reste des résultats.
 */
export async function unifiedSearch(query: string): Promise<UnifiedSearchResult> {
  const q = query.trim();
  if (!q) {
    return { content: [], places: [], directory: [], fromCache: false };
  }

  const [contentSettled, regionsSettled, departmentsSettled, communesSettled, directorySettled] = await Promise.allSettled([
    searchContent(q, 1),
    getRegions({ q }),
    getDepartments({ q }),
    getCommunes({ q }),
    getDirectoryEntries({ q, perPage: 12 }),
  ]);

  const content = contentSettled.status === 'fulfilled' ? contentSettled.value.items : [];
  const contentCached = contentSettled.status === 'fulfilled' ? contentSettled.value.fromCache : false;

  const places: UnifiedGeoHit[] = [];
  if (regionsSettled.status === 'fulfilled') {
    places.push(...regionsSettled.value.items.slice(0, 6).map(entityToHit));
  }
  if (departmentsSettled.status === 'fulfilled') {
    places.push(...departmentsSettled.value.items.slice(0, 6).map(entityToHit));
  }
  if (communesSettled.status === 'fulfilled') {
    places.push(...communesSettled.value.items.slice(0, 6).map(entityToHit));
  }

  const directory = directorySettled.status === 'fulfilled' ? directorySettled.value.items : [];
  const directoryCached = directorySettled.status === 'fulfilled' ? directorySettled.value.fromCache : false;

  return {
    content,
    places,
    directory,
    fromCache: contentCached || directoryCached,
  };
}
