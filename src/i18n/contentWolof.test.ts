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
    'le-fanal-de-saint-louis-la-parade-des-lanternes-de-fin-dannee',
    'les-regates-traditionnelles-au-senegal-sport-nautique-culture-et-transmission',
    'le-mandinka-langue-mandingue-de-lest-du-senegal',
    'departement-de-kedougou',
    'la-colonisation-du-senegal-conquete-administration-et-transformations',
    'agriculture-et-elevage-dans-le-senegal-oriental-filieres-et-marches',
    'musee-des-civilisations-noires',
    'manufacture-senegalaise-des-arts-decoratifs-de-thies',
    'musee-de-la-femme-henriette-bathily',
    'maison-ousmane-sow',
    'musee-historique-du-senegal-fort-d-estrees',
    'village-des-arts-de-dakar',
    'maison-des-esclaves-de-goree',
    'maison-natale-de-leopold-sedar-senghor',
    'musee-boribana',
    'centre-dinterpretation-du-delta-du-saloum',
    'mosquee-de-divinity',
    'chateau-de-saint-louis',
    'mame-woury-thioubou',
    'ibrahima-sall',
    'faty-sow-kane',
    'aminata-maiga-ka',
    'mame-younousse-dieng',
    'ndeye-coumba-mbengue-diakhate',
    'cheikh-ndiaye',
    'papa-ibra-tall',
    'moustapha-dime',
    'mamadou-gomis',
    'sokhna-benga',
    'khady-sylla',
    'mamousse-diagne',
    'amady-aly-dieng',
    'abasse-ndione',
    'amadou-lamine-sall',
    'mohamed-mbougar-sarr',
    'david-diop',
    'ken-bugul',
    'cheikh-aliou-ndao',
    'boubacar-boris-diop',
    'birago-diop',
    'aminata-sow-fall',
    'fatou-diome',
    'felwine-sarr',
    'souleymane-bachir-diagne',
    'awa-ly',
    'yoro-ndiaye',
    'nuru-kane',
    'wasis-diop',
    'el-hadj-ndiaye',
    'laba-sosseh',
    'titi-ndeye-fatou-tine',
    'xuman',
    'alioune-mbaye-nder',
    'ablaye-cissoko',
    'seckou-keita',
    'mansour-seck',
    'khar-mbaye-madiaga',
    'yande-codou-sene',
    'ndiaga-mbaye',
    'kine-lam',
    'ousmane-william-mbaye',
    'thierno-ndiaye-doss',
    'awa-sene-sarr',
    'douta-seck',
    'alioune-badara-beye',
    'oumar-ndao',
    'isseu-niang',
    'fatou-cisse',
    'feral-benga',
    'moussa-sene-absa',
    'souleyemane-keita',
    'mansour-ciss',
    'zulu-mbaye',
    'ahmad-faye',
    'amath-faye',
    'combe-seck',
    'edmond-sanka',
    'brancou-badio',
    'louis-francois-mendy',
    'moussa-niakhate',
    'pape-thiaw',
    'habib-diallo',
    'saly-sarr',
    'aya-traore',
    'isabelle-sambou',
    'mame-maty-mbengue',
    'adama-diatta',
    'gorgui-dieng',
    'battling-siki',
    'iba-mar-diop',
    'amy-mbacke-thiam',
    'oumy-diop',
    'henri-camara',
    'colle-ardo-sow',
    'diouma-dieng-diakhate',
    'sarah-diouf',
    'adama-paris',
    'lamine-diasse',
    'oumou-sy',
    'nzinga-biegueng-mboup',
    'ousmane-mbaye',
    'tidiane-deme',
    'pape-amadou-seck',
    'mamadou-diaw',
    'aminata-zaaria',
    'musee-des-civilisations-noires-actualite-et-vocation',
    'aminata-fall-chanteuse-senegalaise',
    'daara-j-family',
    'mamy-victory',
    'baidy-ba',
    'pape-faye',
    'omar-seck',
    'marieme-myriam-niang-icone-du-cinema-senegalais',
    'orchestra-baobab-groupe-mythique-de-la-musique-senegalaise',
    'positive-black-soul-pionnier-du-rap-senegalais',
    'fode-camara-peintre-senegalais-contemporain',
    'le-rap-galsen-scene-hip-hop-senegalaise',
    'ousmane-sembene',
    'djibril-diop-mambety',
    'safi-faye',
    'alain-gomis',
    'musee-du-crds-de-saint-louis-musee-regional-saint-louis',
    'musee-regional-de-thies-histoire-et-ethnographie-thies',
    'maison-de-la-culture-douta-seck-medina-dakar',
    'leopold-sedar-senghor-poete-et-homme-detat',
    'ken-bugul-ecrivaine-senegalaise',
    'mariama-ba-ecrivaine-senegalaise',
    'birago-diop-poete-et-ecrivain-senegalais',
    'cheikh-hamidou-kane-ecrivain-senegalais',
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



  it('rejects the known ASCII apostrophe regression in Wolof copy', () => {
    for (const slug of getWolofContentKeys()) {
      const fiche = getWolofContentBySlug(slug);
      const text = [fiche?.titleWo, fiche?.excerptWo, fiche?.contentWo].filter(Boolean).join('\\n');
      expect(text).not.toContain("d'année");
    }
  });\n  it('exposes the phase 1 fiche translations with all required fields', () => {
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
