import { strings } from './strings';

describe('i18n strings', () => {
  it('a exactement les mêmes clés en français et en wolof (aucune traduction manquante)', () => {
    const frKeys = Object.keys(strings.fr).sort();
    const woKeys = Object.keys(strings.wo).sort();
    expect(woKeys).toEqual(frKeys);
  });

  it('ne laisse aucune valeur vide dans l’une ou l’autre langue', () => {
    Object.entries(strings.fr).forEach(([key, value]) => expect(value.trim()).not.toBe(''));
    Object.entries(strings.wo).forEach(([key, value]) => expect(value.trim()).not.toBe(''));
  });
});
