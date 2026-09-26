import { getWolofContentBySlug } from './contentWolof';

describe('Wolof fiche translations', () => {
  const slugs = [
    'tourisme-communautaire-senegal',
    'tourisme-accessible-senegal',
    'tourisme-memoire-senegal',
    'le-kankourang-rite-dinitiation-mandingue-inscrit-au-patrimoine-de-lunesco',
    'xooy-ceremonie-divinatoire-patrimoine-serere-senegal',
    'patrimoine-culturel-immateriel-du-senegal-inventaire-expressions',
    'patrimoine-architectural-saint-louis-senegal',
    'le-delta-du-saloum-paysage-de-mangroves-et-de-bolongs-patrimoine-mondial-de-lunesco',
    'le-parc-national-du-delta-du-saloum',
    'toubacouta',
    'dionewar',
    'foundiougne-et-le-sine-saloum-porte-dentree-des-iles-et-des-mangroves',
    'keur-samba-gueye',
    'niodior',
    'djilor',
    'soum',
    'betenty',
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
