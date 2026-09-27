import { getWolofContentBySlug, getWolofContentKeys } from './contentWolof';

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
    'joal-fadiouth',
    'gare-de-dakar-la-porte-dentree-historique-du-chemin-de-fer-dakar-niger',
    'ecomusee-diakhao',
    'musee-mbiin-ndiogoye-de-joal-memoire-et-patrimoine-de-joal-fadiouth',
    'ecomusee-du-commerce-fluvial-de-podor-memoire-du-fleuve-senegal',
    'musee-des-forces-armees-du-senegal-memoire-militaire-et-histoire-nationale',
    'fort-de-podor',
    'cathedrale-du-souvenir-africain-dakar',
    'musee-theodore-monod-d-art-africain',
    'palais-du-gouverneur-de-saint-louis',
    'village-artisanal-de-soumbedioune-le-sanctuaire-de-lartisanat-senegalais-a-dakar',
    'coniagui-rites-et-savoir-faire-de-la-communaute-coniagui',
  ];

  it('has no duplicate local keys', () => {
    const keys = getWolofContentKeys();
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('validates every local Wolof fiche has all required fields', () => {
    for (const slug of getWolofContentKeys()) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

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
