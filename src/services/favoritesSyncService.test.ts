import { mergeFavorites, syncFavorites, type RemoteFavoritesProvider } from './favoritesSyncService';
import type { ContentItem } from '../types/content';

function item(id: number, title: string): ContentItem {
  return { id, title, type: 'heritage' };
}

describe('mergeFavorites', () => {
  it('unions local and remote favorites with no duplicates', () => {
    const merged = mergeFavorites([item(1, 'Local A')], [item(2, 'Remote B')]);
    expect(merged.map((i) => i.id).sort()).toEqual([1, 2]);
  });

  it('prefers the local version on a conflicting id', () => {
    const merged = mergeFavorites([item(1, 'Local version')], [item(1, 'Remote version')]);
    expect(merged).toHaveLength(1);
    expect(merged[0].title).toBe('Local version');
  });

  it('never drops a favorite present only locally, even with an empty remote list', () => {
    const merged = mergeFavorites([item(1, 'Only local')], []);
    expect(merged).toEqual([item(1, 'Only local')]);
  });

  it('never drops a favorite present only remotely, even with an empty local list', () => {
    const merged = mergeFavorites([], [item(1, 'Only remote')]);
    expect(merged).toEqual([item(1, 'Only remote')]);
  });

  it('returns an empty list when both sides are empty', () => {
    expect(mergeFavorites([], [])).toEqual([]);
  });
});

describe('syncFavorites', () => {
  it('merges remote into local and pushes the merged result to the provider', async () => {
    const pushed: ContentItem[][] = [];
    const provider: RemoteFavoritesProvider = {
      fetchRemoteFavorites: async () => [item(2, 'Remote')],
      pushFavorites: async (items) => {
        pushed.push(items);
      },
    };
    const result = await syncFavorites([item(1, 'Local')], provider);
    expect(result.map((i) => i.id).sort()).toEqual([1, 2]);
    expect(pushed).toHaveLength(1);
    expect(pushed[0].map((i) => i.id).sort()).toEqual([1, 2]);
  });

  it('falls back to the unchanged local list when the remote fetch fails, never losing a local favorite', async () => {
    const provider: RemoteFavoritesProvider = {
      fetchRemoteFavorites: async () => {
        throw new Error('network down');
      },
      pushFavorites: async () => {},
    };
    const local = [item(1, 'Local')];
    const result = await syncFavorites(local, provider);
    expect(result).toEqual(local);
  });

  it('falls back to the unchanged local list when the push fails', async () => {
    const provider: RemoteFavoritesProvider = {
      fetchRemoteFavorites: async () => [item(2, 'Remote')],
      pushFavorites: async () => {
        throw new Error('push failed');
      },
    };
    const local = [item(1, 'Local')];
    const result = await syncFavorites(local, provider);
    expect(result).toEqual(local);
  });
});
