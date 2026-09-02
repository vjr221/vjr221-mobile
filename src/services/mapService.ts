import { Linking, Platform } from 'react-native';

/**
 * Abstraction cartographique indépendante du fournisseur.
 *
 * Aucune librairie de carte (react-native-maps, Mapbox...) n'est ajoutée tant
 * qu'un fournisseur et des clés ne sont pas décidés : ce service ne fait que
 * manipuler des coordonnées et ouvrir la navigation externe (Google Maps /
 * Apple Plans / app par défaut), ce qui couvre déjà l'essentiel du besoin
 * (annuaire, tourisme, patrimoine, communes) sans verrouiller le projet.
 */

export interface Coordinates {
  lat: number;
  lng: number;
}

/** Valide une paire de coordonnées ; ne fabrique jamais un emplacement par défaut. */
export function isValidCoordinates(value: unknown): value is Coordinates {
  if (!value || typeof value !== 'object') return false;
  const { lat, lng } = value as Partial<Coordinates>;
  return typeof lat === 'number' && typeof lng === 'number' && Number.isFinite(lat) && Number.isFinite(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180;
}

const EARTH_RADIUS_KM = 6371;
const toRad = (deg: number) => (deg * Math.PI) / 180;

/** Distance à vol d'oiseau (formule de haversine), en kilomètres. */
export function distanceKm(from: Coordinates, to: Coordinates): number {
  const dLat = toRad(to.lat - from.lat);
  const dLng = toRad(to.lng - from.lng);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(from.lat)) * Math.cos(toRad(to.lat)) * Math.sin(dLng / 2) ** 2;
  return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/** Formate une distance pour l'affichage (mètres sous 1 km, sinon km à 1 décimale). */
export function formatDistance(km: number): string {
  if (!Number.isFinite(km) || km < 0) return '';
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(1)} km`;
}

/**
 * Ouvre la navigation externe vers des coordonnées, via l'app par défaut de
 * l'appareil (aucun SDK carto embarqué). Retourne false si aucune app ne peut
 * traiter la requête plutôt que d'échouer silencieusement.
 */
export async function openExternalNavigation(coordinates: Coordinates, label?: string): Promise<boolean> {
  if (!isValidCoordinates(coordinates)) return false;
  const { lat, lng } = coordinates;
  const query = label ? encodeURIComponent(label) : `${lat},${lng}`;

  const candidates =
    Platform.OS === 'ios'
      ? [`maps://?q=${query}&ll=${lat},${lng}`, `https://maps.apple.com/?q=${query}&ll=${lat},${lng}`]
      : [`geo:${lat},${lng}?q=${lat},${lng}(${query})`, `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`];

  for (const url of candidates) {
    try {
      if (await Linking.canOpenURL(url)) {
        await Linking.openURL(url);
        return true;
      }
    } catch {
      // essaie le candidat suivant
    }
  }
  return false;
}

/**
 * Représentation neutre d'un marqueur, indépendante du futur SDK de carte.
 * Utilisable dès aujourd'hui pour lister des lieux ; une vraie carte pourra
 * consommer ce même contrat lorsqu'un fournisseur sera choisi.
 */
export interface MapMarker {
  id: string;
  coordinates: Coordinates;
  title: string;
  subtitle?: string | null;
}
