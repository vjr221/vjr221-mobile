import type { Coordinates } from './mapService';

export type LocationPermission = 'granted' | 'denied' | 'undetermined' | 'unavailable';

export interface UserLocationResult {
  coordinates: Coordinates | null;
  permission: LocationPermission;
}

/**
 * Géolocalisation utilisateur.
 *
 * Volontairement sans module natif (`expo-location`) en 1.5.0 :
 * l'intégration native a provoqué un crash au démarrage Android après 1.2.1.
 * L'API reste stable pour DirectoryScreen / « près de moi » ; le bouton
 * affiche un état indisponible tant qu'un module natif sûr n'est pas validé
 * sur appareil physique.
 */
export async function getUserLocation(_options: { requestPermission?: boolean } = {}): Promise<UserLocationResult> {
  return { coordinates: null, permission: 'unavailable' };
}
