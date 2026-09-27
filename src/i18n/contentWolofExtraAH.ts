import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

/** Vague 44 — cinéma documentaire et audiovisuel. */
export const CONTENT_WO_EXTRA_AH: Record<string, WolofContent> = {
  'moussa-bathily-createur-audiovisuel': {
    titleWo: 'Moussa Bathily — acteur ci création audiovisuelle bu Senegaal',
    excerptWo: 'Acteur ci création audiovisuelle bu Senegaal, ci ekosistem bi cinéma, télévision, production ak formesu numérique di bokk.',
    contentWo: `### Audiovisuel ak création

Moussa Bathily mooy acteur ci création audiovisuelle bu Senegaal. Parcoursam bokk na ci secteur fa cinéma, télévision, production ak formesu numérique di jàppale yégle nettaliu Senegaal.

### Métiersu audiovisuel

Secteur audiovisuel bu Senegaal boole réalisateurs, producteurs, scénaristes, techniciens, comédiens ak structuresu production. Chaîneu métiersu boobu am na solo ci sos ak yégle œuvres.

### Li war a fàttaliku

- Acteur ci audiovisuel bu Senegaal
- Création audiovisuelle
- Cinéma ak télévision
- Secteur culturel`,
  },

  'samba-felix-ndiaye': {
    titleWo: 'Samba Félix Ndiaye — cinéaste ak documentariste bu Senegaal',
    excerptWo: 'Cinéaste ak documentariste bu Senegaal, figure bu am solo ci cinéma documentaire africain.',
    contentWo: `### Nettaliu société yu Afrik

Samba Félix Ndiaye mooy cinéaste ak documentariste bu Senegaal. Œuvream di jox bérab bu mag métiers, savoir-faire, pratiquesu bés-bés ak réalités sociales, te di jàppale dencug mémoire audiovisuelle bu Senegaal.

### Patrimoine ak cinéma

Filmam di wone ni documentaire mën na nekk outil ngir aar patrimoine immatériel ak valoriser savoir-faire yi.

### Li war a fàttaliku

- Cinéaste bu Senegaal
- Documentaire
- Patrimoine immatériel
- Mémoire audiovisuelle`,
  },

  'alassane-diago': {
    titleWo: 'Alassane Diago — réalisateur ak documentariste bu Senegaal',
    excerptWo: 'Réalisateur ak documentariste bu Senegaal bu liggéeyam bokk ci cinéma documentaire africain bu jamono jii.',
    contentWo: `### Documentaire

Alassane Diago mooy réalisateur ak documentariste bu Senegaal. Cinémaam di seet parcoursu nit ñi, mémoire, migrations ak réalités sociales, ak bérab bu am solo bu récitsu nit ñi.

### Cinéma ak société

Documentaire di nekk yoonu am solo ngir denc mémoireu expériences ak soppi-soppi yu société bu Senegaal.

### Li war a fàttaliku

- Réalisateur bu Senegaal
- Documentaire
- Mémoire ak récitsu nit ñi
- Cinéma contemporain`,
  },

  'sada-thioub': {
    titleWo: 'Sada Thioub — comédien ak acteur bu Senegaal',
    excerptWo: 'Comédien bu Senegaal bu lëkkale ak théâtre ak création scénique.',
    contentWo: `### Théâtre ak scène

Sada Thioub mooy comédien bu Senegaal bu lëkkale ak théâtre ak création scénique. Parcoursam bokk na ci vitalitéu arts dramatiques ci Senegaal.

### Spectacle vivant

Théâtre bu Senegaal am na tradition bu yàgg ci création, transmission orale, dramaturgie ak spectacle vivant. Comédiens yi di jàppale wéyal tradition boobu ci yégle textes ak créations ci kanamu public.

### Li war a fàttaliku

- Comédien bu Senegaal
- Théâtre ak spectacle vivant
- Création scénique`,
  },
};
