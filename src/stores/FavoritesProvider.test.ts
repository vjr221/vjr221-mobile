import { toggleFavorite } from './FavoritesProvider';
import type { ContentItem } from '../types/content';

function item(id: number, title: string): ContentItem {
  return { id, title, type: 'heritage' };
}

describe('toggleFavorite', () => {
  it('adds an item that is not yet a favorite, at the front of the list', () => {
    const next = toggleFavorite([item(1, 'A')], item(2, 'B'));
    expect(next.map((i) => i.id)).toEqual([2, 1]);
  });

  it('removes an item that is already a favorite', () => {
    const next = toggleFavorite([item(1, 'A'), item(2, 'B')], item(1, 'A'));
    expect(next.map((i) => i.id)).toEqual([2]);
  });

  it('adds to an empty list', () => {
    expect(toggleFavorite([], item(1, 'A'))).toEqual([item(1, 'A')]);
  });

  it('removing the only favorite yields an empty list', () => {
    expect(toggleFavorite([item(1, 'A')], item(1, 'A'))).toEqual([]);
  });

  it('matches by id only, ignoring other field differences', () => {
    const stale = item(1, 'Old title');
    const fresh = { ...item(1, 'New title') };
    const next = toggleFavorite([stale], fresh);
    expect(next).toEqual([]); // toujours reconnu comme le même favori (même id) -> retiré
  });
});
