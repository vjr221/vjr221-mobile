import type { Coordinates } from './mapService';

export type LocationPermission = 'granted' | 'denied' | 'undetermined' | 'unavailable';

export interface UserLocationResult {
  coordinates: Coordinates | null;
  permission: LocationPermission;
}

/**
 * Diagnostic stability mode for 1.4.2:
 * the native expo-location module is temporarily disabled while isolating
 * the Android startup crash introduced after 1.2.1.
 */
export async function getUserLocation(_options: { requestPermission?: boolean } = {}): Promise<UserLocationResult> {
  return { coordinates: null, permission: 'unavailable' };
}
