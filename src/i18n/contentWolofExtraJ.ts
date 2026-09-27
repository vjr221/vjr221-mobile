import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_J: Record<string, WolofContent> = {
  'musee-de-la-femme-henriette-bathily-dakar': {
    titleWo: 'Musée de la Femme Henriette Bathily — Dakar',
    excerptWo: 'Musée bu jëm ci taariixu jigéen ñi, dundug jigéen yu Senegaal ak liggéeyu émancipation.',
    contentWo: `### Jëmmal

Musée de la Femme Henriette Bathily (MUFEM) mooy musée bu jëm ci taariix, rôle ak dundug jigéen yu Senegaal, ci dëkk ak ci gox. Ñu ubbi ko ci Gorée ci 1994, te ñu yóbbu ko Dakar ci 2015.

### Taariix ak transfert

Musée bi sosu na ci Gorée ci 1994, te gannaaw loolu ñu yóbbu ko Dakar ci Place du Souvenir Africain et de la Diaspora, Corniche Ouest.

### Collections

Musée bi dafay wone mbir yu aju ci dundug jigéen yu Senegaal ci milieu rural ak urbain, ak itam ay nit yu am solo ci yoonu émancipation jigéen ñi.

### Solo

MUFEM bokk na ci bérab yu jàppale xam-xam, transmission ak valorisationu patrimoine ak taariixu jigéen ñi ci Senegaal.`,
  },
  'grand-theatre-national-doudou-ndiaye-coumba-rose-dakar': {
    titleWo: 'Grand Théâtre national Doudou Ndiaye Coumba Rose — scène bu mag bu Dakar',
    excerptWo: 'Benn ci scène yu mag yu arts ak spectacles ci Senegaal, te mu bokk ci réseau bu institutions culturelles nationales.',
    contentWo: `### Jëmmal

Grand Théâtre national Doudou Ndiaye Coumba Rose mooy benn ci scène yu mag yu arts ak spectacles ci Senegaal. Mu bokk ci établissements culturels yu nekk ci tutelle bu département bi yor Culture.

### Institution ci biir écosystème culturel

Grand Théâtre bi nekk na ci wetu yeneen structures culturelles nationales, mel ni Musée des Civilisations Noires, Compagnie du Théâtre national Daniel Sorano, Maison de la Culture Douta Seck, Galerie nationale des Arts ak École nationale des Arts.

### Scène bu arts vivants

Vocationu Grand Théâtre bi mooy program ak wone spectacles ak manifestations culturelles. Mu nekk na itam bérab bu artistes, professionnels, publics ak initiatives culturelles di daje.

### Agenda culturel

Événements yu ñu di organiz ci Grand Théâtre mën nañu bokk ci agenda culturel territorial, ngir dimbali nit ñi ci seet ak xam ay manifestations ci Dakar.

### Localisation

Dëkk: Dakar
Diiwaan: Dakar
Institution: Grand Théâtre national Doudou Ndiaye Coumba Rose`,
  },  'mont-assirik-niokolo-koba': {
    titleWo: 'Mont Assirik — wàllu relief ak biodiversité bu Niokolo-Koba',
    excerptWo: 'Mont Assirik mooy benn ci relief yu xamleñ ci Parc national du Niokolo-Koba, ci diiwaanu Tambacounda.',
    contentWo: `### Jëmmal

Mont Assirik mooy benn ci relief yu xamleñ ci Parc national du Niokolo-Koba. Mu feeñal ay paysage yu savane, plateaux ak collines yu bokk ci Senegaal oriental.

### Repère naturel

Relief bi dafa am solo ci environnement bi, fa savane boisée, mares, vallées ak yeneen formations végétales di daje. Wuute gox yi jàppale na ci amug faune bu bare.

### Jëfandikoo ak aar

Seet bérab bi war na topp yoon yi ñu may, te aar rab yi, gàncax yi ak ay sàrtu conservation.

### Patrimoine naturel

Niokolo-Koba mooy bérab bu am solo ngir aar biodiversité bu Senegaal, te Mont Assirik bokk na ci patrimoine naturel bu diiwaanu Tambacounda.`,
  },
  'yoff-layene': {
    titleWo: 'Yoff-Layène',
    excerptWo: 'Quartier bu Yoff, berceau bu confrérie Layène, ak bérab yu am solo ci mémoire religieuse bu Senegaal.',
    contentWo: `### Jëmmal

Yoff-Layène mooy quartier bu commune Yoff, te mu nekk berceau bu confrérie Layène. Fa la mausolée bu Seydina Limamou Laye nekk, benn ci bérab yu musulman yi ñu daan dem ci Senegaal.

### Mausolée ak Diamalaye

Mausolée bu Seydina Limamou Laye nekk na ci kanamu géej Atlantique. Mu nekk bérab bu recueillement ngir fidèles layènes, rawatina ci waxtu Appel bi. Jege ko, Diamalaye mooy espace bu am solo ci mémoire ak recueillement.

### Mémoire layène

Famille Dioné moo yor gestionu mausolée bi lu ëpp benn téeméer. At mu nekk, ay junni fidèles di dem Yoff-Layène, ak Cambérène ak Ngor, ngir màggal Seydina Limamou Laye.

### Rattachement administratif

Yoff-Layène bokk na ci commune Yoff, département Dakar, diiwaanu Dakar.`,
  },
  'le-point-culminant-du-senegal-les-collines-de-kedougou': {
    titleWo: 'Collines de Kédougou — wàllu relieffu Senegaal bu gën a kawe',
    excerptWo: 'Collines yu Kédougou nekk nañu ci sud-est Senegaal, te relief bi wuute na ak platitude bu ëpp ci réew mi.',
    contentWo: `### Jëmmal

Senegaal réew la bu reliefam gën a woyof ci li ëpp. Collines yu Kédougou nekk nañu ci extreme sud-est, jege frontière guinéenne.

### Reliefu Kédougou

Wàllu Kédougou mooy benn ci yoon yi réew mi am relief bu ëpp a accidenté, ndax contreforts bu massif Fouta Djalon, bi gën a nekk ci Guinée.

### Point bu gën a kawe

Point bi gën a kawe ci Senegaal nekk na ci collines yu jege frontière guinéenne, ci kaw bu tollu ci 580 mètres environ. Relief bii wuute na lool ak platitude bu ëpp ci territoire bi.

### Nature

Diiwaanu Kédougou am na itam Mont Assirik ci Parc national du Niokolo-Koba, ak ay paysage yu am solo ci patrimoine naturel bu Senegaal.`,
  },
};
