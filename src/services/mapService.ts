import { Platform } from 'react-native';
import { openExternalUrl } from './externalLinks';

export interface Coordinates {
  lat: number;
  lng: number;
}

export function isValidCoordinates(value: unknown): value is Coordinates {
  if (!value || typeof value !== 'object') return false;
  const { lat, lng } = value as Partial<Coordinates>;
  return typeof lat === 'number' && typeof lng === 'number' && Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180;
}

const EARTH_RADIUS_KM = 6371;
const toRad = (deg: number) => (deg * Math.PI) / 180;

export function distanceKm(from: Coordinates, to: Coordinates): number {
  const dLat = toRad(to.lat - from.lat);
  const dLng = toRad(to.lng - from.lng);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(from.lat)) * Math.cos(toRad(to.lat)) * Math.sin(dLng / 2) ** 2;
  return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function formatDistance(km: number): string {
  if (!Number.isFinite(km) || km < 0) return '';
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(1)} km`;
}

export async function openExternalNavigation(coordinates: Coordinates, label?: string): Promise<boolean> {
  if (!isValidCoordinates(coordinates)) return false;
  const { lat, lng } = coordinates;
  const query = label ? encodeURIComponent(label) : `${lat},${lng}`;

  const candidates =
    Platform.OS === 'ios'
      ? [`maps://?q=${query}&ll=${lat},${lng}`, `https://maps.apple.com/?q=${query}&ll=${lat},${lng}`]
      : [`geo:${lat},${lng}?q=${lat},${lng}(${query})`, `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`];

  for (const url of candidates) {
    const kind = url.startsWith('geo:') || url.startsWith('maps:') ? 'map' : 'web';
    if (await openExternalUrl(url, kind)) return true;
  }
  return false;
}

export interface MapMarker {
  id: string;
  coordinates: Coordinates;
  title: string;
  subtitle?: string | null;
}
