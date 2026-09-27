import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 18 — patrimoine naturel, mémoire et gastronomie. */
export const CONTENT_WO_EXTRA_I: Record<string, WolofContent> = {
  'parc-national-du-niokolo-koba': {
    titleWo: 'Parc nationalu Niokolo-Koba',
    excerptWo: 'Àll bu mag ci Senegaal, bu am solo lool ci aarug nature ak rab yu àll ci penku réew mi.',
    contentWo: `### Jëmmal

Parc nationalu Niokolo-Koba mooy benn ci aires protégées yu gën a mag ci Senegaal. Mu nekk ci penku réew mi, ci diiwaanu Tambacounda, te mooy bérab bu am solo ci aarug biodiversité.

### Taariix ak patrimoine

Parc bi sosu na ci 1954 ngir aar ekosystem yi ak rab yi. UNESCO dafa ko jàppe patrimoine mondial ci 1981, te parc bi bokk na it ci réseau des réserves de biosphère.

### Nature

Niokolo-Koba am na savanes, àll yu rëy, collines, prairies ak cours d’eau. Biodiversité bi am na rab yu bare, ci biir ay espèces yu rare walla yu nekk ci risk.

### Tourisme ak recherche

Safaris, seetug rab yi, randonnées ak photographie animalière bokk nañu ci mbir yu ñu mën a def ci parc bi, ci toppatoo ay règles yu aar nature. Parc bi di it laboratoire bu ñuy def recherche ci conservation, écologie ak gestion des écosystèmes.

### Aarug nature

Aarug habitats ak rab yi mooy benn ci ay mission yu gën a am solo. Surveillance écologique, protection des espèces menacées, sensibilisation ak coopération bokk nañu ci liggéey bi.`,
  },
  'place-du-souvenir-africain-dakar': {
    titleWo: 'Place du Souvenir africain — fattalikoo, aada ak jàngale',
    excerptWo: 'Bérab bu Dakar bu jëm ci fattalikoo, aada, mbind ak diggante ci héritages africains.',
    contentWo: `### Jëmmal

Place du Souvenir africain nekk na ci Dakar, te mooy bérab bu ñuy jëfandikoo ngir fattalikoo, aada ak jàngale ci mbirum héritages africains.

### Bérab bu fattalikoo

Bérab bi dafa tax nit ñi mën a boole taariix, aada ak création contemporaine. Mu bokk ci yeneen bérab yu Dakar yu yor mémoire ak transmission, mel ni musées, bibliothèques, monuments ak centres culturels.

### Aada ak transmission

Place du Souvenir africain bokk na ci réseau bu établissements ak structures culturelles nationales. Dafa yokk liggéeyu yeneen institutions yu jëm ci aada, patrimoine, arts ak jàngale.

### Repères

- Type : espace culturel ak mémoriel
- Dëkk : Dakar
- Jëf yi : mémoire, aada, rencontre ak transmission
- Réseau : établissements culturels nationaux`,
  },
  'cafe-touba': {
    titleWo: 'Café Touba',
    excerptWo: 'Ndoxum café bu xamle Senegaal, bu am saf-saf ci poivre de Guinée te lëkkale ak aada Mouride.',
    contentWo: `### Jëmmal

Café Touba mooy ndoxum café bu xamle Senegaal. Am na saf-saf bu am solo te ñu ko xam ci poivre de Guinée, te bokk na ci dundinu bés bu bëccëg ci réew mi.

### Cosaan

Café Touba jël na turam ci dëkkub Touba, centre spirituel bu mouridisme. Aada ak nettali yu dëkk bi lëkkale nañu ko ak Cheikh Ahmadou Bamba ak ay taalibeem.

### Lu ko wuute

Café bi dafa am café ak poivre de Guinée, te ñu mën a yokk tuuti girofle. Graine yi ñuy torréfier, ñu xotti leen ak poivre bi, ba mu am saf-saf bu am solo.

### Njàngat ak dundin

Café Touba ñu ko faral di jaay ci mbedd mi, ci ay chariot ak thermos. Léegi, boisson bi wàññiku na ci cercle bu cosaanam rekk: nit ñi ci réew mi, ci ay mbir yu wuute, dañuy ko naan.

### Valeur culturelle

Café Touba di won ni aada bu lëkkale ak diine mën a tas ci cosaanu réew mi te doon benn ci mbir yu ñuy bokk ci dundinu bés bu Senegaal.`,
  },
};
