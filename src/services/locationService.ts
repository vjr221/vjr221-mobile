import type { Coordinates } from './mapService';

export type LocationPermission = 'granted' | 'denied' | 'undetermined' | 'unavailable';

export interface UserLocationResult {
  coordinates: Coordinates | null;
  permission: LocationPermission;
}

/**
 * Géolocalisation optionnelle via expo-location.
 * Si le module est absent ou si l'utilisateur refuse, l'app continue sans position.
 */
export async function getUserLocation(options: { requestPermission?: boolean } = {}): Promise<UserLocationResult> {
  try {
    const Location = await import('expo-location');
    const existing = await Location.getForegroundPermissionsAsync();
    let status = existing.status;

    if (status !== 'granted' && options.requestPermission !== false) {
      const requested = await Location.requestForegroundPermissionsAsync();
      status = requested.status;
    }

    if (status !== 'granted') {
      return { coordinates: null, permission: status === 'denied' ? 'denied' : 'undetermined' };
    }

    const position = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });

    return {
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
      permission: 'granted',
    };
  } catch {
    return { coordinates: null, permission: 'unavailable' };
  }
}
