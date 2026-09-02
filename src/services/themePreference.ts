import AsyncStorage from '@react-native-async-storage/async-storage';

export type ThemePreference = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'vjr221.themePreference';

/**
 * Préférence d'apparence choisie par l'utilisateur (Plus → Apparence).
 * `system` (par défaut) suit `useColorScheme()` ; `light`/`dark` forcent le
 * thème indépendamment du réglage de l'appareil. Persistée localement,
 * exactement comme les favoris ou les préférences de notifications.
 */
export async function getThemePreference(): Promise<ThemePreference> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (raw === 'light' || raw === 'dark' || raw === 'system') return raw;
    return 'system';
  } catch {
    return 'system';
  }
}

export async function setThemePreference(preference: ThemePreference): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, preference);
}
