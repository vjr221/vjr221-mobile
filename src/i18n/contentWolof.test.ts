import { getWolofContentBySlug } from './contentWolof';

describe('Wolof fiche translations', () => {
  const slugs = [
    'tourisme-communautaire-senegal',
    'tourisme-accessible-senegal',
    'tourisme-memoire-senegal',
    'kankourang-rite-dinitiation-mandingue-inscrit-au-patrimoine-de-lunesco',
    'xooy-ceremonie-divinatoire-patrimoine-serere-senegal',
  ];

  it('exposes the phase 1 fiche translations with all required fields', () => {
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });
});
