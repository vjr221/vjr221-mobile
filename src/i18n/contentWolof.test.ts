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
  'contentWolofExtraZ.ts',
  'contentWolofExtraAA.ts',
  'contentWolofExtraAB.ts',
  'contentWolofExtraAC.ts',
  'contentWolofExtraAD.ts',
  'contentWolofExtraAE.ts',
  'contentWolofExtraAF.ts',
  'contentWolofExtraAG.ts',
  'contentWolofExtraAH.ts',
  'contentWolofExtraAI.ts',
  'contentWolofExtraAJ.ts',
  'contentWolofExtraAK.ts',
  'contentWolofExtraAL.ts',
  'contentWolofExtraAM.ts',
  'contentWolofExtraAN.ts',
  'contentWolofExtraAO.ts',
  'contentWolofExtraAP.ts',
  'contentWolofExtraAQ.ts',
  'contentWolofExtraAR.ts',
  'contentWolofExtraAS.ts',
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
    'region-de-dakar',
    'region-de-ziguinchor',
    'region-de-thies',
    'region-de-saint-louis',
    'musee-des-civilisations-noires-actualite-et-vocation',
    'musee-du-crds-de-saint-louis-musee-regional-saint-louis',
    'parc-national-du-niokolo-koba',
    'place-du-souvenir-africain-dakar',
    'thiere-mboum-une-specialite-cerealiere-du-patrimoine-culinaire-senegalais',
    'mosquee-el-hadji-omar-patrimoine-religieux-du-senegal',
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
    for (const slug of ['maison-de-la-culture-douta-seck-medina-dakar', 'musee-du-crds-de-saint-louis-musee-regional-saint-louis', 'musee-regional-de-thies-histoire-et-ethnographie-thies']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified nature and territory wave', () => {
    for (const slug of ['chutes-de-dindefelo', 'wanar-necropole-megalithique-patrimoine-mondial', 'la-reserve-naturelle-communautaire-de-palmarin']) {
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

  it('covers the verified cinema and visual arts wave', () => {
    for (const slug of [
      'cinema-senegalais-histoire-realisateurs-oeuvres-et-rayonnement',
      'arts-visuels-au-senegal-peinture-sculpture-photographie-et-creation-contemporaine',
      'biennale-dakar-dakart-art-contemporain',
      'les-festivals-de-cinema-au-senegal-creation-images-et-industrie-culturelle',
    ]) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified artists and musicians wave', () => {
    for (const slug of ['takeifa', 'awa-ly', 'yoro-ndiaye', 'nuru-kane']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified visual arts and literature wave', () => {
    for (const slug of ['papa-ibra-tall', 'moustapha-dime', 'mamadou-gomis-photographe', 'faty-sow-kane']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified literature and contemporary stage wave', () => {
    for (const slug of ['ibrahima-sall-ecrivain-senegalais', 'aminata-maiga-ka', 'pape-amadou-seck', 'mamadou-diaw-artiste']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified stage and visual creation wave', () => {
    for (const slug of ['ousseynou-bissichi', 'ismael-thiam', 'joelle-le-bussy', 'aissa-dione']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified cinema and audiovisual wave', () => {
    for (const slug of ['moussa-bathily-createur-audiovisuel', 'samba-felix-ndiaye', 'alassane-diago', 'sada-thioub']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified auteur cinema wave', () => {
    for (const slug of ['mansour-sora-wade', 'joseph-gai-ramaka', 'dyana-gaye', 'moussa-toure', 'halima-gadji']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified cinema wave 46', () => {
    for (const slug of ['ousmane-william-mbaye', 'safi-faye', 'alain-gomis', 'moussa-sene-absa']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified music wave 47', () => {
    for (const slug of ['didier-awadi', 'doudou-ndiaye-rose', 'wassis-diop', 'cheikh-lo']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified urban music wave 48', () => {
    for (const slug of ['carlou-d', 'sister-fa', 'fou-malade', 'keyti', 'daara-j-family']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified heritage music wave 49', () => {
    for (const slug of ['ablaye-cissoko', 'seckou-keita', 'positive-black-soul', 'orchestre-baobab']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified music wave 50', () => {
    for (const slug of ['el-hadj-ndiaye', 'ngaaka-blinde', 'dip-doundou-guiss', 'youssou-ndour']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified cinema wave 51', () => {
    for (const slug of ['marieme-myriam-niang', 'rohkaya-niang', 'mati-diop', 'djibril-diop-mambety']) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });


  it('covers the verified culture and institutions wave 52', () => {
    for (const slug of [
      'le-ndepp',
      'centre-culturel-regional-de-sedhiou',
      'direction-arts-senegal',
    ]) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
    expect(getWolofContentBySlug('festival-national-arts-cultures-fesnac')).toBeDefined();
  });

  it('covers the verified regional culture wave 53', () => {
    for (const slug of [
      'fesnac-a-kaffrine-arts-et-cultures-du-senegal',
      'festival-international-de-sedhiou-diversite-culturelle-du-pakao',
      'federation-regionale-des-artistes-et-acteurs-culturels-de-sedhiou',
      'ligue-matam-slam',
      'federation-regionale-des-acteurs-culturels-de-kaffrine-ferack',
      'festival-international-de-jazz-de-saint-louis-rendez-vous-musical-majeur-d-afrique-de-l-ouest',
    ]) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified culture, territory and literature wave 54', () => {
    for (const slug of [
      'fatou-cisse-choregraphe',
      'andreya-ouamba-choregraphe-fondateur-de-la-compagnie-1er-temps',
      'mame-birame-diouf',
      'kolibantang',
      'lamine-konte-griot-virtuose-de-la-kora',
      'nafissatou-dia-diouf',
    ]) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the verified department territory wave 55', () => {
    for (const slug of [
      'departement-de-thies',
      'departement-de-tivaouane',
      'departement-de-bakel',
      'departement-de-fatick',
      'departement-de-rufisque',
      'departement-de-sedhiou',
    ]) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche).toBeDefined();
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the Wolof literature consolidation wave 58', () => {
    const slugs = [
      'ibrahima-sall-ecrivain-senegalais',
      'aminata-maiga-ka',
      'mamadou-diaw-artiste',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect(fiche?.contentWo?.length).toBeGreaterThan(250);
    }
  });

  it('covers the Wolof heritage consolidation wave 57', () => {
    const slugs = [
      'musee-boribana-art-africain-ile-de-goree',
      'parc-national-des-iles-de-la-madeleine',
      'reserve-ornithologique-kalissaye',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the Wolof terminology consolidation wave 56', () => {
    const slugs = [
      'parc-national-des-oiseaux-du-djoudj',
      'reserve-de-fathala',
      'mangroves-casamance-ecosystemes-villages-savoir-faire',
      'le-royaume-du-jolof-formation-territoires-et-heritage-historique',
      'reserve-speciale-faune-gueumbeul',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
    }
  });

  it('covers the Wolof gastronomy and drinks enrichment wave 126', () => {
    const slugs = ['soupou-kandia', 'cafe-touba', 'jus-de-bouye', 'mbakhalou-saloum', 'domoda'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(700);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof culture and gastronomy enrichment wave 127', () => {
    const slugs = ['bissap', 'xalam-2', 'ucas-band-formation-musicale-historique-de-sedhiou', 'fode-doussouba', 'ile-de-fadiouth'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(700);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof gastronomy enrichment wave 127', () => {
    const slugs = ['thiakry', 'baila', 'mafe', 'jus-de-gingembre', 'thieboudiene-ceebu-jen'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(700);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof heritage and tourism enrichment wave 128', () => {
    const slugs = ['plage-de-ngor', 'tata-de-kedougou-architecture-defensive-et-patrimoine-du-senegal-oriental', 'pointe-des-almadies-dakar', 'cap-skirring'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(700);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof gastronomy and agriculture enrichment wave 129', () => {
    const slugs = ['ceebu-yapp', 'lakhou-bissap', 'riz-de-casamance', 'les-epices-dans-la-cuisine-senegalaise'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(700);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof cuisine and fishing enrichment wave 130', () => {
    const slugs = ['thiou', 'caldou', 'poisson-braise-lakk-dieune'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(700);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof fishing and cuisine enrichment wave 131', () => {
    const slugs = ['le-thiof-au-senegal-poisson-emblematique-peche-et-gastronomie', 'ndambe-ragout-de-niebe-petit-dejeuner-populaire-senegalais', 'thiere-bassi-salte'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(700);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof cultural heritage enrichment wave 132', () => {
    const slugs = ['culture-mandingue-senegal-traditions', 'sebbe-koliyabe-tradition-culturelle-du-fouta', 'intronisation-beuleup-tradition-royale-du-senegal'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(700);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('has no duplicate source keys across Wolof packs', () => {
    const seen = new Map<string, string>();
    const duplicates: string[] = [];
    for (const name of WOLOF_SOURCE_FILES) {
      const filePath = path.join(__dirname, name);
      if (!fs.existsSync(filePath)) continue;
      const source = fs.readFileSync(filePath, 'utf8');
      const keyPattern = /^\s{2}'([^']+)':\s*\{/gm;
      let match: RegExpExecArray | null;
      while ((match = keyPattern.exec(source)) !== null) {
        const slug = match[1];
        const previous = seen.get(slug);
        if (previous) duplicates.push(slug + ' (' + previous + ' + ' + name + ')');
        else seen.set(slug, name);
      }
    }
    expect(duplicates).toEqual([]);
  });

  it('covers the Wolof creator consolidation wave 60', () => {
    const slugs = ['oumou-sy', 'adama-paris', 'nzinga-biegueng-mboup'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(300);
    }
  });

  it('covers the Wolof music consolidation wave 62', () => {
    const slugs = ['didier-awadi', 'doudou-ndiaye-rose', 'wassis-diop', 'cheikh-lo'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(350);
    }
  });

  it('covers the Wolof literature consolidation wave 68', () => {
    const slugs = [
      'leopold-sedar-senghor-poete-et-homme-detat',
      'cinema-senegalais-histoire-realisateurs-oeuvres-et-rayonnement',
      'arts-visuels-au-senegal-peinture-sculpture-photographie-et-creation-contemporaine',
      'biennale-dakar-dakart-art-contemporain',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof heritage museums consolidation wave 67', () => {
    const slugs = [
      'musee-du-crds-de-saint-louis-musee-regional-saint-louis',
      'musee-regional-de-thies-histoire-et-ethnographie-thies',
      'maison-de-la-culture-douta-seck-medina-dakar',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(450);
    }
  });

  it('covers the Wolof culture and design consolidation wave 66', () => {
    const slugs = ['ousseynou-bissichi', 'ismael-thiam', 'joelle-le-bussy', 'aissa-dione'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(350);
    }
  });

  it('covers the Wolof music heritage consolidation wave 65', () => {
    const slugs = [
      'orchestra-baobab-groupe-mythique-de-la-musique-senegalaise',
      'positive-black-soul-pionnier-du-rap-senegalais',
      'fode-camara-peintre-senegalais-contemporain',
      'le-rap-galsen-scene-hip-hop-senegalaise',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(350);
    }
  });

  it('covers the Wolof cinema consolidation wave 64', () => {
    const slugs = ['marieme-myriam-niang', 'rohkaya-niang', 'mati-diop', 'djibril-diop-mambety'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(350);
    }
  });

  it('covers the Wolof urban music consolidation wave 63', () => {
    const slugs = ['carlou-d', 'sister-fa', 'fou-malade', 'keyti', 'daara-j-family'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(350);
    }
  });

  it('covers the Wolof music and dance consolidation wave 61', () => {
    const slugs = ['aminata-fall-chanteuse-senegalaise', 'mamy-victory', 'baidy-ba'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(300);
    }
  });

  it('covers the Wolof architectural heritage consolidation wave 69', () => {
    const slugs = [
      'cases-a-etage-de-mlomp-architecture-traditionnelle-casamance',
      'cases-a-impluvium-royaume-bandial',
      'galerie-nationale-des-arts-du-senegal',
      'ecole-nationale-des-arts-du-senegal-formation-arts-culture',
      'marche-kermel-le-joyau-colonial-du-plateau-de-dakar',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof living heritage consolidation wave 70', () => {
    const slugs = [
      'le-gumbe-rythme-danse-et-memoire-musicale-de-lespace-senegambien',
      'palmier-a-huile-de-casamance-arbre-economie-et-culture',
      'les-metiers-de-la-forge-a-kaffrine-un-savoir-faire-artisanal-du-ndoucoumane',
      'chambre-de-commerce-de-dakar-architecture-coloniale-place-de-lindependance',
      'village-d-iwol-patrimoine-bedik-et-paysage-de-kedougou',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof religious heritage consolidation wave 71', () => {
    const slugs = [
      'cathedrale-de-saint-louis',
      'grande-mosquee-de-dakar',
      'mosquee-massalikul-jinaan',
      'calao-a-bec-rouge-oiseau-emblematique-des-savanes-senegalaises',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(450);
    }
  });

  it('covers the Wolof nature heritage consolidation wave 72', () => {
    const slugs = [
      'le-parc-national-du-delta-du-saloum',
      'le-tamarinier-arbre-d-ombrage-au-fruit-acidule-emblematique',
      'le-calao-terrestre-geant-social-des-savanes-senegalaises',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(450);
    }
  });

  it('covers the Wolof linguistic heritage consolidation wave 73', () => {
    const slugs = [
      'les-ethnies-du-senegal',
      'le-conte-au-senegal-oralite-transmission-et-patrimoine-vivant',
      'le-palor-langue-cangin-patrimoine-serere-pays-thiessois',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(450);
    }
  });

  it('covers the Wolof stage heritage consolidation wave 74', () => {
    const slugs = [
      'le-festival-du-sahel',
      'le-theatre-au-senegal-scenes-creation-et-patrimoine-culturel',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(450);
    }
  });

  it('covers the Wolof cinema heritage consolidation wave 75', () => {
    const slugs = [
      'cinema-senegalais-histoire-realisateurs-oeuvres-et-rayonnement',
      'arts-visuels-au-senegal-peinture-sculpture-photographie-et-creation-contemporaine',
      'biennale-dakar-dakart-art-contemporain',
      'les-festivals-de-cinema-au-senegal-creation-images-et-industrie-culturelle',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(450);
    }
  });


  it('covers the Wolof contemporary music consolidation wave 76', () => {
    const slugs = ['takeifa', 'awa-ly', 'yoro-ndiaye', 'nuru-kane'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });













  it('covers the Wolof Niokolo memory culture consolidation wave 91', () => {
    const slugs = ['parc-national-du-niokolo-koba', 'place-du-souvenir-africain-dakar'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof Lompoul Goree heritage consolidation wave 90', () => {
    const slugs = ['ile-degueye-mangrove-bolongs-immersion-casamance', 'desert-de-lompoul', 'boubacar-joseph-ndiaye-gardien-de-la-memoire-de-goree'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof Boundou Casamance culture consolidation wave 89', () => {
    const slugs = ['fode-kaba-doumbouya-resistant-a-la-colonisation-en-casamance', 'le-yeela-poesie-musicale-du-boundou-et-patrimoine-vivant-du-senegal-oriental', 'le-patrimoine-diola-langues-rites-et-culture-de-casamance'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof Casamance heritage consolidation wave 88', () => {
    const slugs = ['reserve-naturelle-communautaire-tocc-tocc', 'parc-national-basse-casamance-foret-biodiversite', 'ile-karabane-memoire-architecture-casamance'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof natural heritage consolidation wave 87', () => {
    const slugs = ['chutes-de-dindefelo', 'wanar-necropole-megalithique-patrimoine-mondial', 'la-reserve-naturelle-communautaire-de-palmarin'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof heritage consolidation wave 86', () => {
    const slugs = ['chutes-de-dindefelo', 'wanar-necropole-megalithique-patrimoine-mondial', 'la-reserve-naturelle-communautaire-de-palmarin'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof literature consolidation wave 85', () => {
    const slugs = ['leopold-sedar-senghor-poete-et-homme-detat', 'cinema-senegalais-histoire-realisateurs-oeuvres-et-rayonnement', 'arts-visuels-au-senegal-peinture-sculpture-photographie-et-creation-contemporaine', 'biennale-dakar-dakart-art-contemporain'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof theatre cinema consolidation wave 84', () => {
    const slugs = ['baidy-ba', 'pape-faye', 'omar-seck', 'marieme-myriam-niang-icone-du-cinema-senegalais'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof hip-hop consolidation wave 83', () => {
    const slugs = ['carlou-d', 'sister-fa', 'fou-malade', 'keyti', 'daara-j-family'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof audiovisual consolidation wave 82', () => {
    const slugs = ['moussa-bathily-createur-audiovisuel', 'samba-felix-ndiaye', 'alassane-diago', 'sada-thioub'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof cinema consolidation wave 81', () => {
    const slugs = ['mansour-sora-wade', 'joseph-gai-ramaka', 'dyana-gaye', 'moussa-toure'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof visual arts consolidation wave 77', () => {
    const slugs = ['papa-ibra-tall', 'moustapha-dime', 'mamadou-gomis-photographe', 'faty-sow-kane'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });


  it('covers the Wolof documentary cinema consolidation wave 78', () => {
    const slugs = ['ousmane-william-mbaye', 'safi-faye', 'alain-gomis', 'moussa-sene-absa'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });


  it('covers the Wolof musical heritage consolidation wave 79', () => {
    const slugs = ['ablaye-cissoko', 'seckou-keita', 'positive-black-soul', 'orchestre-baobab'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });


  it('covers the Wolof contemporary music consolidation wave 80', () => {
    const slugs = ['el-hadj-ndiaye', 'ngaaka-blinde', 'dip-doundou-guiss', 'youssou-ndour'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof Bamboung Ndiael and Saloum consolidation wave 103', () => {
    const slugs = [
      'mosquee-de-divinity-patrimoine-religieux-de-dakar',
      'aire-marine-protegee-bamboung',
      'reserve-speciale-faune-ndiael',
      'saloum-fleuve-mangroves-iles-patrimoine-vivant',
      'ile-de-mar-lodj',
      'ile-deloubaline-village-insulaire-patrimoine-diola-casamance',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof Saint-Louis and Casamance architecture consolidation wave 102', () => {
    const slugs = [
      'architecture-traditionnelle-sine-saloum',
      'architecture-traditionnelle-casamance',
      'place-faidherbe-coeur-historique-de-saint-louis',
      'quai-roume-memoire-portuaire-et-urbaine-de-dakar',
      'maison-a-etages-de-saint-louis-architecture-urbaine-historique',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof UNESCO heritage consolidation wave 101', () => {
    const slugs = [
      'ile-de-saint-louis-patrimoine-mondial-de-lunesco',
      'le-senegal-et-le-patrimoine-mondial-de-lunesco',
      'cercles-megalithiques-de-sine-ngayene',
      'pays-bassari-patrimoine-culturel-paysages',
      'delta-saloum-ecosystemes-iles-mangroves',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof culinary heritage consolidation wave 92', () => {
    const slugs = ['thiere-mboum-une-specialite-cerealiere-du-patrimoine-culinaire-senegalais', 'jus-de-tamarin', 'jus-de-ditakh'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof religious heritage consolidation wave 93', () => {
    const slugs = ['mosquee-el-hadji-omar-patrimoine-religieux-du-senegal', 'mosquee-de-camberene-patrimoine-religieux-de-dakar', 'eglise-saint-louis-patrimoine-religieux-de-saint-louis', 'mosquee-de-la-pointe-patrimoine-religieux-de-dakar'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof Sedhiou heritage consolidation wave 94', () => {
    const slugs = ['mosquee-de-baghere-patrimoine-religieux-de-sedhiou', 'mosquee-de-karantaba-patrimoine-religieux-de-sedhiou', 'chateau-de-sedhiou-memoire-architecturale-de-la-casamance', 'femme-kagnalene-thionk-tradition-rituelle-de-casamance'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof cultural practices consolidation wave 95', () => {
    const slugs = ['goungoudongho-rite-traditionnel-de-circoncision', 'caayde-patrimoine-culturel-peul-du-matam', 'diokaa-pratique-culturelle-traditionnelle-du-senegal-oriental', 'fifiree-ceremonie-traditionnelle-du-matam'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
  });

  it('covers the Wolof religious and social heritage consolidation wave 96', () => {
    const slugs = ['medina-baye', 'patrimoine-religieux-du-senegal', 'les-salons-de-the-et-la-ceremonie-de-lataya-au-senegal'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
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


test('covers the Wolof cultural heritage consolidation wave 97', () => {
  const slugs = [
    'thiere-boulettes-couscous-mil-sauce-boulettes',
    'lempire-du-djolof',
    'le-royaume-du-cayor',
    'hymne-national-senegal-lion-rouge',
    'musee-mbiin-ndiogoye-joal',
  ];
  for (const slug of slugs) {
    const fiche = getWolofContentBySlug(slug);
    expect(fiche?.titleWo).toBeTruthy();
    expect(fiche?.excerptWo).toBeTruthy();
    expect(fiche?.contentWo).toContain('###');
    expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
  }
});


test('covers the Wolof tourism and cultural venues consolidation wave 98', () => {
  const slugs = [
    'ecomusee-commerce-fluvial-podor',
    'week-end-dakar-itineraire-culturel-patrimoine',
    'centre-culturel-regional-blaise-senghor-de-dakar',
    'tourisme-louga-terroirs-nord',
    'tourisme-kaffrine-saloum-interieur',
  ];
  for (const slug of slugs) {
    const fiche = getWolofContentBySlug(slug);
    expect(fiche?.titleWo).toBeTruthy();
    expect(fiche?.excerptWo).toBeTruthy();
    expect(fiche?.contentWo).toContain('###');
    expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
  }
});


test('covers the Wolof regional tourism consolidation wave 99', () => {
  const slugs = [
    'tourisme-matam-vallee-fleuve',
    'tourisme-tambacounda-senegal-oriental',
    'tourisme-ziguinchor',
    'tourisme-kolda',
    'tourisme-sedhiou',
    'tourisme-kedougou',
  ];
  for (const slug of slugs) {
    const fiche = getWolofContentBySlug(slug);
    expect(fiche?.titleWo).toBeTruthy();
    expect(fiche?.excerptWo).toBeTruthy();
    expect(fiche?.contentWo).toContain('###');
    expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
  }
});


test('covers the Wolof Dakar geological heritage consolidation wave 100', () => {
  const slugs = [
    'falaise-de-toundeup-riya-site-geologique-de-yoff',
    'cap-manuel-site-prehistorique-et-geologique-de-dakar',
    'cimetiere-de-bel-air-patrimoine-historique-de-dakar',
  ];
  for (const slug of slugs) {
    const fiche = getWolofContentBySlug(slug);
    expect(fiche?.titleWo).toBeTruthy();
    expect(fiche?.excerptWo).toBeTruthy();
    expect(fiche?.contentWo).toContain('###');
    expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
  }
});
  it('covers the Wolof department consolidation wave 104', () => {
    const slugs = [
      'departement-de-thies',
      'departement-de-tivaouane',
      'departement-de-bakel',
      'departement-de-fatick',
      'departement-de-rufisque',
      'departement-de-sedhiou',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(450);
    }
  });

  it('keeps wave 104 department keys unique', () => {
    const slugs = [
      'departement-de-thies',
      'departement-de-tivaouane',
      'departement-de-bakel',
      'departement-de-fatick',
      'departement-de-rufisque',
      'departement-de-sedhiou',
    ];
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof culture and creators consolidation wave 105', () => {
    const slugs = [
      'fatou-cisse-choregraphe',
      'andreya-ouamba-choregraphe-fondateur-de-la-compagnie-1er-temps',
      'mame-birame-diouf',
      'kolibantang',
      'lamine-konte-griot-virtuose-de-la-kora',
      'nafissatou-dia-diouf',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(250);
    }
  });

  it('covers the Wolof regional tourism consolidation wave 106', () => {
    const slugs = [
      'tourisme-louga-terroirs-nord',
      'tourisme-kaffrine-saloum-interieur',
      'tourisme-matam-vallee-fleuve',
      'tourisme-tambacounda-senegal-oriental',
      'tourisme-ziguinchor',
      'tourisme-kolda',
      'tourisme-sedhiou',
      'tourisme-kedougou',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof cultural heritage consolidation wave 107', () => {
    const slugs = [
      'mosquee-de-baghere-patrimoine-religieux-de-sedhiou',
      'mosquee-de-karantaba-patrimoine-religieux-de-sedhiou',
      'chateau-de-sedhiou-memoire-architecturale-de-la-casamance',
      'femme-kagnalene-thionk-tradition-rituelle-de-casamance',
      'goungoudongho-rite-traditionnel-de-circoncision',
      'caayde-patrimoine-culturel-peul-du-matam',
      'diokaa-pratique-culturelle-traditionnelle-du-senegal-oriental',
      'fifiree-ceremonie-traditionnelle-du-matam',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });


  it('covers the Wolof gastronomy enrichment wave 109', () => {
    const slugs = [
      'ceebu-yapp',
      'domoda',
      'soupou-kandia',
      'thiakry',
      'jus-de-bouye',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof gastronomy enrichment wave 110', () => {
    const slugs = [
      'jus-de-gingembre',
      'thiere-bassi-salte',
      'poisson-braise-lakk-dieune',
      'ndambe-ragout-de-niebe-petit-dejeuner-populaire-senegalais',
      'thiou',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof gastronomy enrichment wave 111', () => {
    const slugs = [
      'caldou',
      'le-thiof-au-senegal-poisson-emblematique-peche-et-gastronomie',
      'riz-de-casamance',
      'lakhou-bissap',
      'les-epices-dans-la-cuisine-senegalaise',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof gastronomy enrichment wave 112', () => {
    const slugs = ['mafe', 'baila', 'mbakhalou-saloum'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof cultural heritage enrichment wave 113', () => {
    const slugs = [
      'culture-serere-traditions-patrimoine',
      'culture-mandingue-senegal-traditions',
      'sebbe-koliyabe-tradition-culturelle-du-fouta',
      'intronisation-beuleup-tradition-royale-du-senegal',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof music and heritage enrichment wave 114', () => {
    const slugs = [
      'super-diamono',
      'xalam-2',
      'ucas-band-formation-musicale-historique-de-sedhiou',
      'fode-doussouba',
      'tata-de-kedougou-architecture-defensive-et-patrimoine-du-senegal-oriental',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof heritage and natural resources enrichment wave 115', () => {
    const slugs = [
      'fort-pinet-laprade-memoire-historique-de-sedhiou',
      'centre-dinterpretation-de-toubacouta-patrimoine-du-delta-du-saloum',
      'centre-dinterpretation-de-bandafassi-patrimoine-du-pays-bassari',
      'nature-du-ferlo-paysages-saheliens-faune-et-ressources',
      'la-gomme-arabique-au-senegal-ressource-du-sahel-et-valorisation',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof gastronomy enrichment wave 123', () => {
    const slugs = ['caldou', 'le-thiof-au-senegal-poisson-emblematique-peche-et-gastronomie', 'riz-de-casamance', 'lakhou-bissap', 'les-epices-dans-la-cuisine-senegalaise'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof gastronomy enrichment wave 122', () => {
    const slugs = ['thiere-bassi-salte', 'poisson-braise-lakk-dieune', 'ndambe-ragout-de-niebe-petit-dejeuner-populaire-senegalais', 'thiou'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof drinks and dessert enrichment wave 121', () => {
    const slugs = ['thiakry', 'jus-de-bouye', 'jus-de-gingembre'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof Senegalese cuisine enrichment wave 120', () => {
    const slugs = ['mafe', 'domoda', 'soupou-kandia'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof destinations and food enrichment wave 119', () => {
    const slugs = ['cap-skirring', 'pointe-des-almadies-dakar', 'ceebu-yapp'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof food and heritage enrichment wave 118', () => {
    const slugs = ['plage-de-ngor', 'ceebu-yapp', 'baila', 'mbakhalou-saloum'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof beverages enrichment wave 117', () => {
    const slugs = ['cafe-touba', 'bissap'];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof destinations and cuisine enrichment wave 116', () => {
    const slugs = [
      'ile-de-fadiouth',
      'cap-skirring',
      'pointe-des-almadies-dakar',
      'plage-de-ngor',
      'thieboudiene-ceebu-jen',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof Carabane corpus cleanup wave 108', () => {
    const canonical = getWolofContentBySlug('ile-karabane-memoire-architecture-casamance');
    expect(getWolofContentBySlug('carabane')).toBeUndefined();
    expect(canonical?.titleWo).toBeTruthy();
    expect(canonical?.excerptWo).toBeTruthy();
    expect(canonical?.contentWo).toContain('###');
    expect((canonical?.contentWo ?? '').length).toBeGreaterThan(500);
  });

  it('covers the Wolof culture and heritage enrichment wave 124', () => {
    const slugs = [
      'culture-serere-traditions-patrimoine',
      'culture-mandingue-senegal-traditions',
      'sebbe-koliyabe-tradition-culturelle-du-fouta',
      'intronisation-beuleup-tradition-royale-du-senegal',
      'super-diamono',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(500);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('covers the Wolof heritage and Sahel enrichment wave 125', () => {
    const slugs = [
      'centre-dinterpretation-de-toubacouta-patrimoine-du-delta-du-saloum',
      'centre-dinterpretation-de-bandafassi-patrimoine-du-pays-bassari',
      'nature-du-ferlo-paysages-saheliens-faune-et-ressources',
      'la-gomme-arabique-au-senegal-ressource-du-sahel-et-valorisation',
      'fort-pinet-laprade-memoire-historique-de-sedhiou',
    ];
    for (const slug of slugs) {
      const fiche = getWolofContentBySlug(slug);
      expect(fiche?.titleWo).toBeTruthy();
      expect(fiche?.excerptWo).toBeTruthy();
      expect(fiche?.contentWo).toContain('###');
      expect((fiche?.contentWo ?? '').length).toBeGreaterThan(700);
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });


});