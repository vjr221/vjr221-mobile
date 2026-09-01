import AsyncStorage from '@react-native-async-storage/async-storage';
import { readCache, writeCache } from './cache';

describe('cache', () => {
  beforeEach(() => jest.clearAllMocks());
  it('retourne une valeur fraîche après écriture', async () => {
    await writeCache('key', { title: 'Dakar' });
    const result = await readCache<{ title: string }>('key', 60_000);
    expect(result).toMatchObject({ value: { title: 'Dakar' }, stale: false });
  });
  it('retire une entrée JSON invalide', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce('{');
    expect(await readCache('broken')).toBeNull();
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith('broken');
  });
});
