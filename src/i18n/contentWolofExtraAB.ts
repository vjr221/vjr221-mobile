import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 38 — festivals, théâtre et patrimoine public. */
export const CONTENT_WO_EXTRA_AB: Record<string, WolofContent> = {
  'le-festival-du-sahel': {
    titleWo: 'Festivalu Sahel',
    excerptWo: 'Mbooloo bu aada ak cosaan yu Sahel, di wone musik, art, patrimoine ak dundin yu askan yi.',
    contentWo: `### Jëmmal

Festivalu Sahel mooy benn ci ndaje yu aada yu di wone alalug culturel, artistique ak patrimonial bu diiwaan yi nekk ci Sahel ci Senegaal.

### Aada ak patrimoine

Festival bi dafay may nit ñi gis ak dégg ay formesu musique, fecc, nettali, arts ak cosaan yu wuute. Mu jàppale itam wone patrimoine bu dund ak xam-xam yu ñuy jottali ci génération yi.

### Expositions ak waxtaan

Ndaje yi mën nañu boole expositions, conférences, débats ak yeneen activitésu culture. Loolu di may ñi bokk yoonu xam aada yi ak waxtaan ci seen solo ci jamono jii.

### Jeunesse ak transmission

Jeunes yi mën nañu bokk ci activitésu festival bi, gis artistes yi ak jàng ci ay pratiquesu culture. Transmission bi di yokk xam-xam ak taxawu patrimoine bu dund.

### Turismu ak territoire

Festivalu aada mën na itam yokk njariñu tourisme culturel. Dafa lëkkale gan ñi ak territoires yi, te di wone richesseu aada ak cosaan yu askan yi.`,
  },

  'festival-international-de-sedhiou-diversite-culturelle-du-pakao': {
    titleWo: 'Festival international bu Sédhiou',
    excerptWo: 'Ndaje bu aada bu jëm ci expressionsu Pakao ak espace mandingue, musik, fecc ak arts.',
    contentWo: `### Jëmmal

Festival international bu Sédhiou mooy ndaje bu jëm ci xam ak jokkoo ci expressionsu culturel yu Pakao ak espace mandingue.

### Musik, fecc ak arts

Festival bi dafay wone musik, fecc ak arts, te di boole troupes ak bokk yi jóge ci réew yu wuute ci sous-région ak yeneen partenaires.

### Jokkoo ak bokkute

Ndaje bi di may artistes, communautés ak gan ñi yoonu daje, waxtaan ak séddoo seen xam-xam. Mu mën a jàppale bokkute ak jokkoo diggante nit ñi.

### Sédhiou ak Pakao

Festival bi di yokk gis-gis ci patrimoine culturel bu Sédhiou ak Pakao. Mu di itam may bérab bu artistes ak traditionsu sudu Senegaal di am seen bérab ci scène.

### Transmission

Ndaje yu mel ni festival bi di jàppale transmissionu musik, fecc, arts ak cosaan. Mu tax yeneen génération yi mën a xam ak jàng ci richesseu culturel bi.`,
  },

  'le-theatre-au-senegal-scenes-creation-et-patrimoine-culturel': {
    titleWo: 'Théâtre ci Senegaal — scène, sos ak patrimoine culturel',
    excerptWo: 'Théâtre bi di boole nettali, parole, musique, fecc ak formesu création ci Senegaal.',
    contentWo: `### Jëmmal

Théâtre ci Senegaal mooy bérab bu mag bu création, critique sociale ak transmission. Mu mën a boole formesu scène yu bees, nettali yu askan, cosaanu oralité, musik ak fecc.

### Cosaanu wax ak nettali

Wax ci kanam nit ñi, conte, jëfandikoo paroleu griot ak yeneen formesu représentation bokk nañu ci cosaan yi tax théâtre bi yokku. Gannaaw loolu, théâtre contemporain yokku na ci écoles, troupes, centres culturels ak scènes professionnelles.

### Théâtre ak société

Dramaturges ak metteurs en scène di jëfandikoo ay sujets yu jëm ci kër, jeunesse, diggante nit ñi, taariix, politique, migrations ak soppi-soppi yu société. Théâtre mën na nekk divertissement, waxtaan ak jumtukaay bu njàngale.

### Jàng ak sos

Formationu comédiens, amug bérab yu ñuy def spectacle ak accèsu xale yi ci spectacles am nañu solo ci yokkute scène bi.

### Patrimoine bu dund

Théâtre bi di jàppale dencug parole, nettali ak expressionsu culturel. Transmission bi di tax formesu création yu cosaan ak yu bees di bokk ci patrimoine culturel bu Senegaal.`,
  },

  'sogepa-sn-patrimoine-bati-etat-senegal': {
    titleWo: 'SOGEPA SN — société bu saytu patrimoine tabax bu État',
    excerptWo: 'Société nationale bu jëm ci gestion, entretien, exploitation ak valorisationu patrimoine immobilier bâti bu État du Senegaal.',
    contentWo: `### Jëmmal

SOGEPA SN mooy société nationale bu bokk ci saytu ak valorisationu patrimoine immobilier bâti bu État du Senegaal. Dafa jëm ci gestion bu gëna efficace ak exploitationu actifs immobiliers publics.

### Sosug société bi

Sosug SOGEPA SN lëkkale na ak reforme bu gestionu patrimoine bâti bu État. Loi n°2021-36 bu 22 novembre 2021 may na autorisationu sos société bi ngir yokk gouvernance, maintenance, exploitation ak valorisationu actifs publics.

### Gestion ak valorisation

Société bi di jàppale ci xam, toppatoo ak jëfandikoo bérab yi ak tabax yi bokk ci patrimoine immobilier bu État. Mbir mi boole gestion, maintenance ak rechercheu njariñ ci patrimoine bi.

### Solo ci patrimoine public

Patrimoine bâti bu État mooy benn ci ressourcesu public. Gestion bu wér mën na jàppale ci aarug actifs yi, yokk seen njariñ ak tax patrimoine bi bokk ci politiquesu développement.

### Gouvernance ak responsabilité

Gestionu patrimoine public soxla xibaar bu leer, toppatoo bu sax ak gouvernance bu wér. SOGEPA SN nekk na ci cadre bu reforme bi jëm ci yokk efficacité ak valorisationu patrimoine immobilier bu État.`,
  },
};
