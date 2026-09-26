/**
 * Géolocalisation défensive — 1.6.0 Phase B.
 *
 * Règles strictes (leçon crash post-1.2.1) :
 * 1. Jamais d’import statique de expo-location au top-level (App / index).
 * 2. import() dynamique uniquement dans requestUserLocation() au clic utilisateur.
 * 3. Timeout + try/catch → permission 'unavailable' (l’UI tolère déjà ce cas).
 * 4. getUserLocation() ne demande jamais de permission (cache mémoire ou unavailable).
 */

export type LocationPermission = 'granted' | 'denied' | 'unavailable';

export type UserLocation = {
  latitude: number;
  longitude: number;
  accuracy?: number;
  permission: LocationPermission;
};

const LOCATION_TIMEOUT_MS = 12_000;
const PERMISSION_TIMEOUT_MS = 8_000;

let lastGranted: UserLocation | null = null;

function unavailable(): UserLocation {
  return { latitude: 0, longitude: 0, permission: 'unavailable' };
}

function denied(): UserLocation {
  return { latitude: 0, longitude: 0, permission: 'denied' };
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('location_timeout')), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

/**
 * Lecture passive : dernière position accordée en session, sinon unavailable.
 * Ne déclenche jamais de dialogue système.
 */
export async function getUserLocation(): Promise<UserLocation> {
  if (lastGranted?.permission === 'granted') return lastGranted;
  return unavailable();
}

/**
 * Point d’entrée « Autour de moi » / « Près de moi ».
 * Permission foreground uniquement, au clic, avec timeout et repli sûr.
 */
export async function requestUserLocation(): Promise<UserLocation> {
  try {
    // Import dynamique — le module natif n’est chargé qu’ici.
    const Location = await import('expo-location');

    const servicesEnabled = await withTimeout(Location.hasServicesEnabledAsync(), 3_000).catch(() => false);
    if (!servicesEnabled) return unavailable();

    const permission = await withTimeout(Location.requestForegroundPermissionsAsync(), PERMISSION_TIMEOUT_MS);
    if (permission.status !== 'granted') {
      return permission.status === 'denied' ? denied() : unavailable();
    }

    const position = await withTimeout(
      Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      }),
      LOCATION_TIMEOUT_MS,
    );

    const coords = position?.coords;
    if (
      !coords ||
      typeof coords.latitude !== 'number' ||
      typeof coords.longitude !== 'number' ||
      !Number.isFinite(coords.latitude) ||
      !Number.isFinite(coords.longitude)
    ) {
      return unavailable();
    }

    const result: UserLocation = {
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: typeof coords.accuracy === 'number' ? coords.accuracy : undefined,
      permission: 'granted',
    };
    lastGranted = result;
    return result;
  } catch {
    // Module absent, timeout, ou erreur native → l’app continue sans GPS.
    return unavailable();
  }
}

/** Test / reset session (Jest). */
export function __resetLocationCacheForTests(): void {
  lastGranted = null;
}
