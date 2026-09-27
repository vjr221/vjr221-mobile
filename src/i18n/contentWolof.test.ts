import fs from 'fs';
import path from 'path';
import { getWolofContentBySlug, getWolofContentKeys } from './contentWolof';

/** Packs source scannés pour apostrophes ASCII dangereuses dans titleWo/excerptWo. */
const WOLOF_SOURCE_FILES = [
  'contentWolof.ts',
  'contentWolofExtra.ts',
  'contentWolofExtraB.ts',
  'contentWolofExtraC.ts',
  'contentWolofExtraD.ts',
  'contentWolofExtraE.ts',
  'contentWolofExtraF.ts',
  'contentWolofExtraG.ts',
  'contentWolofExtraH.ts',
  'contentWolofExtraI.ts',
  'contentWolofExtraJ.ts',
  'contentWolofExtraK.ts',
  'contentWolofExtraL.ts',
  'contentWolofExtraM.ts',
  'contentWolofExtraN.ts',
  'contentWolofExtraO.ts',
  'contentWolofExtraP.ts',
  'contentWolofExtraQ.ts',
  'contentWolofExtraR.ts',
  'contentWolofExtraS.ts',
  'contentWolofExtraT.ts',
  'contentWolofExtraU.ts',
  'contentWolofExtraV.ts',
  'contentWolofExtraW.ts',
  'contentWolofExtraX.ts',
  'contentWolofExtraY.ts',
];

/**
 * Scan source TS : titleWo / excerptWo en simple-quotes.
 * Une apostrophe ASCII U+0027 non échappée dans la valeur casse tsc (TS1002).
 * Autorisé : apostrophe typographique U+2019, backslash-quote, ou guillemets doubles / template.
 */
function findUnsafeAsciiApostrophesInSource(filePath: string): string[] {
  const src = fs.readFileSync(filePath, 'utf8');
  const lines = src.split(/\r?\n/);
  const issues: string[] = [];
  const wellFormed = /^\s*(titleWo|excerptWo):\s*'(?:\\'|[^'])*',?\s*$/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!/^\s*(titleWo|excerptWo):/.test(line)) continue;
    if (/^\s*(titleWo|excerptWo):\s*["`]/.test(line)) continue;
    if (!/^\s*(titleWo|excerptWo):\s*'/.test(line)) continue;

    if (!wellFormed.test(line)) {
      issues.push(
        `${path.basename(filePath)}:${i + 1}: titleWo/excerptWo simple-quote cassée (apostrophe ASCII ?) → ${line.trim().slice(0, 120)}`,
      );
      continue;
    }

    let count = 0;
    for (let j = 0; j < line.length; j++) {
      if (line[j] === "'" && (j === 0 || line[j - 1] !== '\\')) count += 1;
    }
    if (count !== 2) {
      issues.push(
        `${path.basename(filePath)}:${i + 1}: ${count} apostrophes ASCII sur titleWo/excerptWo → ${line.trim().slice(0, 120)}`,
      );
    }
  }

  return issues;
}

describe('Wolof fiche translations', () => {
  const slugs = [
    'parc-national-des-oiseaux-du-djoudj',
    'reserve-de-fathala',
    'parc-national-de-la-langue-de-barbarie',
    'reserve-speciale-faune-guembeul',
    'mangroves-casamance-ecosystemes-villages-savoir-faire',
    'la-case-ronde-serere-architecture-traditionnelle-du-sine-saloum',
    'le-royaume-du-jolof-formation-territoires-et-heritage-historique',
    'le-baobab-d-iwol-arbre-protecteur-et-memoire-des-bediks',
    'cases-a-etage-de-mlomp-architecture-traditionnelle-casamance',
    'cases-a-impluvium-royaume-bandial',
    'galerie-nationale-des-arts-du-senegal',
    'ecole-nationale-des-arts-du-senegal-formation-arts-culture',
    'marche-kermel-le-joyau-colonial-du-plateau-de-dakar',
    'gare-de-thies-patrimoine-ferroviaire-colonial',
    'marche-sandaga-histoire-commerce-dakar',
    'patrimoine-industriel-senegal',
    'lartisanat-traditionnel-senegalais',
    'patrimoine-fluvial-est-senegal',
    'le-mankanya-langue-nationale-et-patrimoine-linguistique-de-casamance',
    'la-teinture-a-lindigo-savoir-faire-textile-traditionnel-senegalais',
    'le-patrimoine-serere-langue-traditions-et-territoires',
    'les-maisons-a-signares-de-saint-louis-et-goree',
    'le-gumbe-rythme-danse-et-memoire-musicale-de-lespace-senegambien',
    'palmier-a-huile-de-casamance-arbre-economie-et-culture',
    'les-metiers-de-la-forge-a-kaffrine-un-savoir-faire-artisanal-du-ndoucoumane',
    'chambre-de-commerce-de-dakar-architecture-coloniale-place-de-lindependance',
    'village-d-iwol-patrimoine-bedik-et-paysage-de-kedougou',
    'reserve-de-bandia',
    'camp-de-simenti-porte-dentree-du-parc-national-du-niokolo-koba',
    'reserve-speciale-faune-gueumbeul',
    'la-galerie-nationale-des-arts-du-senegal',
    'daara-el-hadji-djamil-ndao-kaffrine',
    'essaout-patrimoine-agroecologique-de-la-basse-casamance',
    'cathedrale-de-saint-louis',
    'grande-mosquee-de-dakar',
    'mosquee-massalikul-jinaan',
    'calao-a-bec-rouge-oiseau-emblematique-des-savanes-senegalaises',
    'grande-mosquee-de-tivaouane',
    'grande-mosquee-de-touba',
    'pelerinage-marial-de-popenguine-notre-dame-de-la-delivrande',
    'le-parc-national-du-delta-du-saloum',
    'le-tamarinier-arbre-d-ombrage-au-fruit-acidule-emblematique',
    'le-calao-terrestre-geant-social-des-savanes-senegalaises',
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

  it('covers the verified heritage wave', () => {
    for (const slug of ["parc-national-du-niokolo-koba","place-du-souvenir-africain-dakar","cafe-touba"]) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified culture wave', () => {
    for (const slug of ['musee-de-la-femme-henriette-bathily-dakar', 'douta-seck', 'grand-theatre-national-doudou-ndiaye-coumba-rose-dakar']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified nature and territory wave', () => {
    for (const slug of ['mont-assirik-niokolo-koba', 'yoff-layene', 'le-point-culminant-du-senegal-les-collines-de-kedougou']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified nature and memory wave', () => {
    for (const slug of ['ile-degueye-mangrove-bolongs-immersion-casamance', 'desert-de-lompoul', 'boubacar-joseph-ndiaye-gardien-de-la-memoire-de-goree']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified nature heritage wave', () => {
    for (const slug of ['chutes-de-dindefelo', 'wanar-necropole-megalithique-patrimoine-mondial', 'la-reserve-naturelle-communautaire-de-palmarin']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified nature and culture wave N', () => {
    for (const slug of ['musee-boribana-art-africain-ile-de-goree', 'parc-national-des-iles-de-la-madeleine', 'reserve-ornithologique-kalissaye']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified nature territory wave O', () => {
    for (const slug of ['reserve-naturelle-communautaire-tocc-tocc', 'parc-national-basse-casamance-foret-biodiversite', 'ile-karabane-memoire-architecture-casamance']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified culture history wave', () => {
    for (const slug of ['fode-kaba-doumbouya-resistant-a-la-colonisation-en-casamance', 'le-yeela-poesie-musicale-du-boundou-et-patrimoine-vivant-du-senegal-oriental', 'le-patrimoine-diola-langues-rites-et-culture-de-casamance']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

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

  it("rejects the known ASCII apostrophe regression (d'année) in Wolof copy", () => {
    for (const slug of getWolofContentKeys()) {
      const fiche = getWolofContentBySlug(slug);
      const text = [fiche?.titleWo, fiche?.excerptWo, fiche?.contentWo].filter(Boolean).join('\n');
      expect(text).not.toContain("d'année");
    }
  });

  it('source: titleWo/excerptWo single-quotes have no unescaped ASCII apostrophe', () => {
    const dir = __dirname;
    const allIssues: string[] = [];
    for (const name of WOLOF_SOURCE_FILES) {
      const filePath = path.join(dir, name);
      if (!fs.existsSync(filePath)) continue;
      allIssues.push(...findUnsafeAsciiApostrophesInSource(filePath));
    }
    if (allIssues.length > 0) {
      throw new Error(
        'Apostrophes ASCII dangereuses dans titleWo/excerptWo (utiliser apostrophe typographique ou guillemets doubles) :\n' +
          allIssues.slice(0, 20).join('\n'),
      );
    }
    expect(allIssues).toEqual([]);
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
