import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

const CONTENT_WO: Record<string, WolofContent> = {
  thiakry: {
    titleWo: 'Thiakry',
    excerptWo: 'Dessert ak naan bu ñu defee ak millet, nekk ci lekk yu gën a siiw ci Senegaal.',
    contentWo: `### Jëmmal

Thiakry mooy lekk bu aada ci Senegaal, diggante dessert ak naan. Ñu koy def ak couscousu millet ak sowwu, te nekk ci lekk yu neex yi ñu gën a bëgg ci réew mi.

### Fu mu jóge ak turam

Tur bi « thiakry » (tiakry walla chakery itam) jóge ci baat bu wolof « cakri ». Ci nettali yu aada, lekk bi bokk na ci aada yu Peul (Halpulaar) ak Sereer ci Senegaal, ñooñu dëkkandoo woon ba noppi leeral ko ci yeneen réewi Afrig Oksidan. Ci réew yi, am na ay tur yu mel ni « dégué » ci Côte d’Ivoire, Mali ak Guinée, walla « bodé » ci ay Peul.

### Li ñu koy def

- Couscousu millet
- Sowwu
- Yaourt
- Sukkar
- Vanille, bu recette bi so ko

### Ni ñu koy def

Ñu di def millet bi ci ay ndaw ndaw mbubbaay, topp ñu ko togg ci vapeur, ba noppi boole ko ak sowwu walla yaourt bu ñu suukaree. Mën nañu ci yokk raisins secs walla vanille.

### Ni ñu koy lekk

Ñu koy serve bu sedd, rawatina ci bés yu màggal ak ay xew-xew. Waaye ñu koy lekk itam bés bu nekk, rawatina ci jamono ju tàng.

### Millet, ndoxum dund gu yàgg

Millet mooy dugub bu ñu doon góor-góorlu ci Afrig Oksidan lu yàgg. Dafa bokk ci dugub yi ñuy gën a jëfandikoo ci lekk yu aada ci Senegaal, laata riz di gën a siiw. Thiakry dafay wéyale xam-xam ak liggéeyu dugub boobu.

### Siiw na ci Senegaal

Thiakry siiw na ci màggal ak ay xew-xew, rawatina ci ndaje yu njaboot, céet ak ngénte. Ñu koy jox ci toppatoo lekk walla ni naan bu sedd. `,
  },
  thiou: {
    titleWo: 'Thiou',
    excerptWo: 'Ragoutu Senegaal bu bés bu nekk, ñu gën a xam ko ak yapp walla jën, te ñu koy lekk ak ceeb.',
    contentWo: `### Jëmmal

Thiou mooy ragoutu aada ci Senegaal. Mën nañu ko def ak yapp (thiou yapp) walla jën (thiou dieune / thiou diw tir), ñu togg ko ak sosu tomate bu fees ak legum, te ñu koy lekk ak ceeb weex. Mooy bokk ci lekk yi njaboot yu bare ci Senegaal di def lu ëpp bés bu nekk.

### Fu mu jóge ak ay xeet

Baatu « thiou » ci wolof tekki na ragout. Am na ay xeet yu mel ni thiou yapp ak yapp, thiou dieune ak jën bu ñu fritt, ak thiou boulette bu ñu def ak boulettesu jën. Am na itam thiou tir, foo xam ne ñu mën koo def ak diwlin palmi rouj, mu jox lekk bi goût bu gën a tar.

### Li ñu gën a jëfandikoo

- Yapp (wëy walla xar) walla jën weex
- Tomate fresh ak tomate bu ñu concentree
- Legum yu jamono: pom de terre, carotte, chou, patate douce, aubergine
- Soblé, garlic ak diwlin
- Ceeb weex

### Ni ñu koy def

Ñu di assaisonne yapp walla jën bi, topp ñu ko jàpp ci safara ndank-ndank, ba noppi togg ko ci sosu tomate ak soblé. Legum yi ñu leen di yokk ndànk-ndànk, ci ni ñu leen di wara togg, ba sos bi nekk bu neex te mën a topp ceeb weex bi ñu def ci wet.

### Bérab bi mu am ci lekk bu bés

Ci biir lekk yu am solo ak yu ñuy def ci màggal, mel ni thiéboudienne, thiou mooy lekk bu bés bu nekk. Ñu ko bëgg ndax dafa yomb te mën nañu ko soppi, ku nekk def ko ak legum yi am ci jamono ak ni njaboot bi bëgg a lekk.`,
  },
  pastels: {
    titleWo: 'Pastels',
    excerptWo: 'Pastels mooy lekk bu ñu fritt, ñu koy fees ak jën walla yapp, te nekk ci lekk yu gën a siiw ci rue yi ci Senegaal.',
    contentWo: `### Jëmmal

Pastels mooy ndaw ndaw chaussons yu ñu fritt, ñu koy fees ak jën walla yapp. Bokk nañu ci lekk yi gën a siiw ci cuisine de rue ci Senegaal.

### Fu mu jóge

Tur bi ak xalaat bi aju na ci ay influence culinaires yu jóge ci péninsule ibérique ak Cap-Vert. Aada ak lekk yi jaar nañu ci géej yi ci Afrig Oksidan, rawatina ci Casamance ak ay comptoir yu njëkk.

### Ni ñu koy def

Ñu mën a def farce ak jën bu ñu xàcc walla yapp bu ñu xotti, ñu boole ko ak soblé ak épices. Ñu denc farce bi ci pâte bu xóotul, ñu bëgg ko ci melokaan triangle walla croissant, ba noppi fritt ko ba mu am melo bu xonq te neex.

### Li ñu koy lekk ak

Ñu gën a serve pastels ak:
- Sosu tomate bu am piment
- Soblé bu ñu marine

### Bérab bi mu am ci aada

Pastels bokk nañu ci lekk yi gën a xam ci rue yi ci Senegaal. Ñu leen di jaay ci marché yi, ci xew-xew ak ci màggal yu am ci quartier yi.

### Lu tax nga wara xam pastels

Pastels dafay jox nit ku bëgg a xam Senegaal yoon wu yomb ngir seet lekk bu am solo ci cuisine de rue, xam ay influence yu jóge ci géej yi, te fees ak goût ak croustillant.`,
  },
  'patrimoine-culturel-immateriel-du-senegal-inventaire-expressions': {
    titleWo: 'Ndeyjoor ak aada yu dul jàmm ci Senegaal — lim ak wuute expression yi',
    excerptWo: 'Patrimoine culturel immatériel dafay may nu xam Senegaal jaarale ci aada, xam-xam ak liggéey yu nit ñi di jàppale te di jële ci maam ba ci doom.',
    contentWo: `### Lan mooy patrimoine culturel immatériel?

Mu ëmb nettali yu gëstu, jëf yu askan wi, ay rituel, màggal, xam-xam yu aju ci àdduna ak nature, xam-xam liggéeyu loxo ak expression yu art ak culture yi ñuy jàppale ci jamono yi.

### Aada bi bokk ci réew mi

Ci Senegaal, expression yii dañuy aju ci terroir ak askan yi. Ñu ngi leen gis ci làkk yi, cérémonies yi, musik, fecc, ni xam-xam di jaar, liggéeyu loxo ak ni nit ñi di bokkandoo. Wuute bi dafa ànd ak wuute wu 14 régions yi.

### Lim bu réew mi di yokk

Ci 2021, ministère bi yor Culture wax na ne 59 expression yu bees yokku ci lim bu patrimoine culturel immatériel bu réew mi, ak bokk-bokkute bu askan yi yor aada yooyu ci 14 régions yi. UNESCO dimbali woon na ci liggéey boobu.

### Ay misaal yu ñu bind

- Tuuru Maam Njaré: rituel bu aju ci Lébou yu Yoff ak seen jokkoo ak géej.
- Xaxaar: cérémonie bu mbégte ngir teral jigéen ju bees ci aada wolof.
- Prim: fecc bu aju ci lutte yu Sereer.
- Kankourang: rituelu initiation bu Manding, bu ñu bind itam ci patrimoine VJR 221.
- Kora: instrument ak aada musik bu griot yi Manding, rawatina ci Casamance.

### Aar patrimoine bu dund

Aar patrimoine immatériel du ko rekk denc ay mbir. War nañu itam dimbali askan yi yor ko, tax xam-xam di jaar diggante maam ak doom, def documentation, gëstu, jàngale ak jëfandikoo aada bi ci dund.

### VJR 221 ni atlasu culture

VJR 221 bëgg na bind expression yii te lëkkale leen ak seen terroir, askan, làkk, nit ñu am solo, xew-xew ak bérab yi ñuy def leen. Bu expression amee xibaar bu doy, war nañu sosal ko fiche bu boppam ngir bañ a def doublon te aar xóotinu encyclopédie bi.`,
  },
};

export function getWolofContent(item: ContentItem): WolofContent | undefined {
  const slug = item.url?.replace(/\/$/, '').split('/').pop();
  return slug ? CONTENT_WO[slug] : undefined;
}
