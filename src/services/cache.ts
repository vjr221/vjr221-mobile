import AsyncStorage from '@react-native-async-storage/async-storage';
type Envelope<T> = { value: T; storedAt: number };
export async function readCache<T>(key: string, ttlMs = Infinity): Promise<{ value: T; stale: boolean } | null> { const raw = await AsyncStorage.getItem(key); if (!raw) return null; try { const envelope = JSON.parse(raw) as Envelope<T>; return { value: envelope.value, stale: Date.now() - envelope.storedAt > ttlMs }; } catch { await AsyncStorage.removeItem(key); return null; } }
export async function writeCache<T>(key: string, value: T): Promise<void> { await AsyncStorage.setItem(key, JSON.stringify({ value, storedAt: Date.now() } satisfies Envelope<T>)); }
export async function removeCache(key: string): Promise<void> { await AsyncStorage.removeItem(key); }

export type CacheFallbackResult<T> = { value: T; fromCache: boolean; stale: boolean };

/**
 * Enveloppe commune « réseau d'abord, cache en secours » réutilisée par tous
 * les dépôts (contentRepository, directoryRepository, geoRepository) : tente
 * `fetcher`, écrit le résultat en cache sous `cacheKey`, et en cas d'échec
 * retombe sur la dernière valeur mise en cache (marquée `stale` si expirée)
 * plutôt que de casser l'écran. Ne relance l'erreur d'origine que si aucune
 * valeur en cache n'existe — jamais de contenu fabriqué.
 */
export async function withCacheFallback<T>(cacheKey: string, ttlMs: number, fetcher: () => Promise<T>): Promise<CacheFallbackResult<T>> {
  try {
    const value = await fetcher();
    await writeCache(cacheKey, value);
    return { value, fromCache: false, stale: false };
  } catch (error) {
    const cached = await readCache<T>(cacheKey, ttlMs);
    if (cached) return { value: cached.value, fromCache: true, stale: cached.stale };
    throw error;
  }
}
