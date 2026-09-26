/**
 * Géolocalisation — contrat 1.5.0 / préparation 1.6.0.
 *
 * expo-location a été retiré volontairement (crash natif sans plugin Expo).
 * Toute l’UI « près de moi » doit tolérer `permission: 'unavailable'`.
 *
 * Réintroduction 1.6 (Phase B) :
 * - import() dynamique uniquement dans requestUserLocation()
 * - jamais au chargement du bundle
 * - permission au clic utilisateur seulement
 * - timeout + fallback
 */

export type LocationPermission = 'granted' | 'denied' | 'unavailable';

export type UserLocation = {
  latitude: number;
  longitude: number;
  accuracy?: number;
  permission: LocationPermission;
};

/** Toujours unavailable tant que le module GPS défensif n’est pas livré. */
export async function getUserLocation(): Promise<UserLocation> {
  return {
    latitude: 0,
    longitude: 0,
    permission: 'unavailable',
  };
}

/**
 * Point d’entrée futur pour le clic « Autour de moi ».
 * Aujourd’hui délègue à getUserLocation (unavailable).
 */
export async function requestUserLocation(): Promise<UserLocation> {
  return getUserLocation();
}
