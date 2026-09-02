import { mergeFavorites, syncFavorites, type RemoteFavoritesProvider } from './favoritesSyncService';
import type { ContentItem } from '../types/content';

const item = (id: number, title: string): ContentItem => ({ id, title, type: 'news' });

describe('mergeFavorites', () => {
  it('fait l’union sans supprimer aucun favori', () => {
    const local = [item(1, 'A'), item(2, 'B')];
    const remote = [item(2, 'B (serveur)'), item(3, 'C')];
    const merged = mergeFavorites(local, remote);
    expect(merged.map((i) => i.id).sort()).toEqual([1, 2, 3]);
  });

  it('préfère la version locale en cas de conflit', () => {
    const merged = mergeFavorites([item(1, 'Version locale')], [item(1, 'Version serveur')]);
    expect(merged[0].title).toBe('Version locale');
  });

  it('ne perd rien quand le serveur est vide', () => {
    const local = [item(1, 'A'), item(2, 'B')];
    expect(mergeFavorites(local, [])).toHaveLength(2);
  });
});

describe('syncFavorites', () => {
  it('renvoie la liste locale inchangée si la synchronisation échoue', async () => {
    const failingProvider: RemoteFavoritesProvider = {
      fetchRemoteFavorites: () => Promise.reject(new Error('hors ligne')),
      pushFavorites: () => Promise.resolve(),
    };
    const local = [item(1, 'A')];
    const result = await syncFavorites(local, failingProvider);
    expect(result).toEqual(local);
  });

  it('fusionne puis pousse l’état fusionné vers le serveur', async () => {
    const pushed: ContentItem[][] = [];
    const provider: RemoteFavoritesProvider = {
      fetchRemoteFavorites: () => Promise.resolve([item(2, 'B')]),
      pushFavorites: (items) => { pushed.push(items); return Promise.resolve(); },
    };
    const result = await syncFavorites([item(1, 'A')], provider);
    expect(result.map((i) => i.id).sort()).toEqual([1, 2]);
    expect(pushed[0].map((i) => i.id).sort()).toEqual([1, 2]);
  });
});
