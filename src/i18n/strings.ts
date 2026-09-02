export type Locale = 'fr' | 'wo';

export const strings = {
  fr: {
    home: 'Accueil', explore: 'Explorer', search: 'Recherche', favorites: 'Favoris', more: 'Plus',
    tagline: 'Le Sénégal dans sa diversité', discover: 'Explorer le Sénégal', featured: 'À la une',
    categories: 'Explorer par univers', recent: 'Dernières publications',
    offline: 'Mode hors connexion : contenus enregistrés affichés.', retry: 'Réessayer',
    unavailable: 'Cette collection sera disponible dès sa publication sur VJR 221.',
    available: 'Disponible', comingSoon: 'À venir',
    exploreIntro: 'Découvrez les univers éditoriaux de VJR 221.',
    regions: 'Régions', tourism: 'Tourisme', heritage: 'Patrimoine', gastronomy: 'Gastronomie', history: 'Histoire',
    nature: 'Nature', culture: 'Culture', events: 'Événements', people: 'Personnalités', directory: 'Annuaire', news: 'Actualités',
    noResults: 'Aucun résultat pour cette recherche.', searchPlaceholder: 'Rechercher un lieu, une histoire…',
    language: 'Langue', french: 'Français', wolof: 'Wolof', share: 'Partager', save: 'Favori', saved: 'En favori',
    website: 'Site web', call: 'Appeler', location: 'Localiser',
  },
  wo: {
    home: 'Kër gi', explore: 'Seet', search: 'Wut', favorites: 'Tànn', more: 'Yeneen',
    tagline: 'Senegaal ci ay wuuteem', discover: 'Seet Senegaal', featured: 'Ci kanam',
    categories: 'Seet ci wàll', recent: 'Yégle yi mujj',
    offline: 'Danga nekk ci biti resewo : yëf yi denc rekk lañuy won.', retry: 'Jéemaat',
    unavailable: 'Mbooloo bii dina am ci VJR 221 bu ñu ko siiwalee.',
    available: 'Am na', comingSoon: 'Dina ñëw',
    exploreIntro: 'Xoolal wàll yi VJR 221 di jëfandikoo ngir nettali Senegaal.',
    regions: 'Régions', tourism: 'Tourisme', heritage: 'Patrimoine', gastronomy: 'Gastronomie', history: 'Histoire',
    nature: 'Nature', culture: 'Culture', events: 'Événements', people: 'Personnalités', directory: 'Annuaire', news: 'Actualités',
    noResults: 'Amul tontu ci wut bii.', searchPlaceholder: 'Wut ab bérab walla nettali…',
    language: 'Làkk', french: 'Français', wolof: 'Wolof', share: 'Séddale', save: 'Tànn', saved: 'Tànn nañu ko',
    website: 'Site web', call: 'Woo', location: 'Fekk bérab bi',
  },
} as const;

export type TranslationKey = keyof typeof strings.fr;
