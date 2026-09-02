/**
 * Modèles géographiques VJR 221.
 *
 * Ces types reflètent exactement ce que renvoie l'API `vjr221/v1`
 * (voir docs/API.md). Aucun champ n'est inventé : tout ce qui est absent
 * en base est `null`, jamais une valeur fabriquée.
 */

export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface RemoteImage {
  url: string;
  thumb: string;
  alt: string | null;
}

export interface KeyInfos {
  superficie: string | null;
  population: string | null;
  chefLieu: string | null;
  gentile: string | null;
}

export interface UsefulLink {
  label: string | null;
  url: string;
}

/** Référence légère vers un post parent (région/département/commune). */
export interface GeoRef {
  id: number;
  name: string;
  slug: string;
}

interface GeoEntityBase {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  permalink: string;
  image: RemoteImage | null;
  gps: GeoPoint | null;
  infos: KeyInfos;
}

export interface Region extends GeoEntityBase {
  kind: 'region';
}

export interface Department extends GeoEntityBase {
  kind: 'department';
  region: GeoRef | null;
  departement: GeoRef | null; // toujours null pour un département, présent pour homogénéité de type
  arrondissement: string | null;
}

export interface Commune extends GeoEntityBase {
  kind: 'commune';
  region: GeoRef | null;
  departement: GeoRef | null;
  arrondissement: string | null;
}

export interface Village extends GeoEntityBase {
  kind: 'village';
  commune: GeoRef | null;
}

export type GeoEntity = Region | Department | Commune | Village;

export interface GeoDetail<T extends GeoEntity> {
  entity: T;
  content: string | null;
  gallery: RemoteImage[];
  usefulLinks: UsefulLink[];
}

export interface GeoListMeta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface GeoListResult<T> {
  items: T[];
  meta: GeoListMeta;
  fromCache: boolean;
  stale: boolean;
}
