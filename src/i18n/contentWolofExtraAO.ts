import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_AO: Record<string, WolofContent> = {
  'marieme-myriam-niang': {
    titleWo: 'Marième Myriam Niang',
    excerptWo: 'Cinéaste ak actrice senegaaleer — récits contemporains ak société.',
    contentWo: `### Jëmmal

Marième Myriam Niang mooy artiste bu audiovisuel senegaaleer, liggéey ci cinéma ak création.

### Cinéma

Liggéeyam dafa jëm ci récits contemporains, personnages ak questions yu société. Dafa bokk ci génération bu bees bu cinéma senegaaleer.

### Création

Ay projetsam contribuent ci diversité bu récits ak visibilité bu artistes yu bees ci audiovisuel.`,
  },
  'rohkaya-niang': {
    titleWo: 'Rokhaya Niang',
    excerptWo: 'Actrice senegaaleer — cinéma, télévision ak scène.',
    contentWo: `### Jëmmal

Rokhaya Niang mooy actrice senegaaleer, xam-xam ci cinéma ak audiovisuel.

### Liggéey

Dafa bokk ci films ak productions audiovisuelles yu jëm ci récits senegaaleer ak expériences yu personnages.

### Solo

Rokhaya Niang bokk na ci génération bu acteurs yi contribué ci rayonnement bu cinéma senegaaleer.`,
  },
  'mati-diop': {
    titleWo: 'Mati Diop',
    excerptWo: 'Cinéaste ak artiste franco-senegaaleer — mémoire, migration, histoire ak création.',
    contentWo: `### Jëmmal

Mati Diop mooy cinéaste ak artiste franco-senegaaleer. Créationam dafa jëm ci mémoire, histoire, migration ak identité.

### Cinéma

Filmiam dafa lëkkale documentaire ak fiction, te di seet expériences personnelles ak collectives.

### Rayonnement

Mati Diop bokk na ci cinéastes yu génération bu bees yi amoon rayonnement international.`,
  },
  'djibril-diop-mambety': {
    titleWo: 'Djibril Diop Mambéty',
    excerptWo: 'Réalisateur senegaaleer — cinéma d’auteur, société ak imagination.',
    contentWo: `### Jëmmal

Djibril Diop Mambéty mooy réalisateur senegaaleer bu am solo ci taariixu cinéma africain.

### Cinéma

Filmiam dañuy lëkkale imagination, critique sociale, poésie ak récits yu dundin. Touki Bouki ak Hyènes bokk nañu ci oeuvresam yu xam-xam.

### Héritage

Liggéeyam am na solo ci cinéma d’auteur africain ak ci taariixu cinéma senegaaleer.`,
  },
};
