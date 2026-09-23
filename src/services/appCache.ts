import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Préfixes de clés AsyncStorage utilisés par les dépôts (cache réseau).
 * Les favoris, la langue et le thème ne sont jamais effacés ici.
 */
const CACHE_PREFIXES = ['content:', 'directory:', 'geo:', 'featured', 'search:', 'related:', 'lieu:'];

const PROTECTED_KEYS = new Set(['favorites', 'locale', 'themePreference', 'notificationPreferences']);

export async function clearAppNetworkCache(): Promise<number> {
  const keys = await AsyncStorage.getAllKeys();
  const toRemove = keys.filter((key) => {
    if (PROTECTED_KEYS.has(key)) return false;
    return CACHE_PREFIXES.some((prefix) => key.startsWith(prefix) || key === prefix);
  });
  if (toRemove.length) {
    await AsyncStorage.multiRemove(toRemove);
  }
  return toRemove.length;
}
