import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 8 — institutions culturelles et nouvelles voix musicales */
export const CONTENT_WO_EXTRA_D: Record<string, WolofContent> = {
  'musee-des-civilisations-noires-actualite-et-vocation': {
    titleWo: 'Réseauu muze yi ak établissements culturels publics ci Senegaal',
    excerptWo: 'Jokkoo gu institusioŋ yu di sàmm, bind, jàngale ak yégle patrimoine ak création.',
    contentWo: `### Jëmmal

Réseauu muze yi ak établissements culturels publics ci Senegaal dafa boole ay institusioŋ yu am solo ci aar, bind, yégle ak jàngale patrimoine ak création artistique.

### Institusioŋ yu wuute

Musée des Civilisations noires, Musée Léopold Sédar Senghor, Musée Boribana, Galerie nationale des Arts, Maison de la Culture Douta Seck ak Grand Théâtre national bokk nañu ci ecosystem bu culturel bi. Seen liggéey mën na jëm ci collections, exposition, recherche, médiation ak diffusion.

### Patrimoine ak culture

Politique bu patrimoine bi dafa jëm it ci recensement ak classementu sites ak monuments historiques, restauration, gestionu collections ak yokkute muze yi. Lii dafay dimbali ci yóbbu xam-xam ak aar patrimoine bi.`,
  },
  'aminata-fall-chanteuse-senegalaise': {
    titleWo: 'Aminata Fall — chanteuse bu Senegaal',
    excerptWo: 'Benn ci ay baat yu mag ci taariixu musik bu Senegaal.',
    contentWo: `### Jëmmal

Aminata Fall mooy chanteuse ak artiste bu Senegaal, te bokk na ci ay nit ñi am solo ci taariixu musik ak scène culturelle bu réew mi.

### Parcours artistique

Baatam ak présence scénique bi bokk nañu ci taariixu ay baat yu jigéen yu mag ci musik bu Senegaal, te seen liggéey daldi jaar ci ay génération yu bari.

### Patrimoine musical

Parcoursam dafay lëkkale musik populaire, traditions vocales, scène ak mémoire culturelle bu Senegaal.`,
  },

  'mamy-victory': {
    titleWo: 'Mamy Victory — rappeuse bu Senegaal',
    excerptWo: 'Artiste ak rappeuse bu Senegaal, Faye Ndeye Penda ci turam wu dëkk.',
    contentWo: `### Jëmmal

Mamy Victory, turam wu dëkk Faye Ndeye Penda, mooy artiste ak rappeuse bu Senegaal. Ci liggéeyam, dafa jëfandikoo musik ngir wax ci égalité diggante jigéen ak góor ak leadershipu jigéen.

### Création

Liggéeyu Mamy Victory bokk na ci scène culturelle bu Senegaal, te dafay lëkkale création, waxtaan ak mbir yi aju ci dundug askan wi.

### Contribution

Parcoursam di bokk ci feeñal industries culturelles ak créatives bu Senegaal, ak jokkoo gi am ci création, transmission ak ubbeeku ci àdduna.`,
  },
};
