import { toggleFavorite } from './FavoritesProvider';
import type { ContentItem } from '../types/content';

const item = (id: number, title: string): ContentItem => ({ id, title, type: 'news' });

describe('toggleFavorite', () => {
  it('ajoute un contenu absent de la liste (au début, plus récent en premier)', () => {
    const result = toggleFavorite([item(1, 'A')], item(2, 'B'));
    expect(result.map((i) => i.id)).toEqual([2, 1]);
  });

  it('retire un contenu déjà présent (suppression réelle, pas de doublon)', () => {
    const result = toggleFavorite([item(1, 'A'), item(2, 'B')], item(1, 'A'));
    expect(result.map((i) => i.id)).toEqual([2]);
  });

  it('cycle complet ajout -> suppression revient à l’état initial', () => {
    const start: ContentItem[] = [];
    const afterAdd = toggleFavorite(start, item(5, 'Fiche'));
    expect(afterAdd).toHaveLength(1);
    const afterRemove = toggleFavorite(afterAdd, item(5, 'Fiche'));
    expect(afterRemove).toHaveLength(0);
  });

  it('ne modifie jamais le tableau reçu en entrée (pas de mutation)', () => {
    const start = [item(1, 'A')];
    toggleFavorite(start, item(2, 'B'));
    expect(start).toHaveLength(1);
  });
});
