import AsyncStorage from '@react-native-async-storage/async-storage';
type Envelope<T> = { value: T; storedAt: number };
export async function readCache<T>(key: string, ttlMs = Infinity): Promise<{ value: T; stale: boolean } | null> { const raw = await AsyncStorage.getItem(key); if (!raw) return null; try { const envelope = JSON.parse(raw) as Envelope<T>; return { value: envelope.value, stale: Date.now() - envelope.storedAt > ttlMs }; } catch { await AsyncStorage.removeItem(key); return null; } }
export async function writeCache<T>(key: string, value: T): Promise<void> { await AsyncStorage.setItem(key, JSON.stringify({ value, storedAt: Date.now() } satisfies Envelope<T>)); }
export async function removeCache(key: string): Promise<void> { await AsyncStorage.removeItem(key); }
