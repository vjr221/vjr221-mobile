import type { ContentItem } from '../types/content';

type WolofContent = Pick<ContentItem, 'titleWo' | 'excerptWo' | 'contentWo'>;

export const CONTENT_WO_EXTRA_J: Record<string, WolofContent> = {
  'musee-de-la-femme-henriette-bathily-dakar': {
    titleWo: 'Musée de la Femme Henriette Bathily — Dakar',
    excerptWo: 'Musée bu jëm ci taariixu jigéen ñi, seen dund, liggéey, xam-xam ak contribution ci société ak patrimoineu Senegaal.',
    contentWo: `### Jëmmal

Musée de la Femme Henriette Bathily di ab espace bu jëm ci taariix, patrimoine ak dundug jigéen yu Senegaal. Musée bi di jox yoon ngir xam ay parcoursu jigéen, seen liggéey, seen xam-xam ak seen contribution ci dundug société. Mu di itam ab espaceu transmission ngir xale yi, ndaw ñi ak visiteurs.

### Taariix ak patrimoine

Musée bi sosu na ci Gorée ci 1994, gannaaw ñu yóbbu ko Dakar ci Place du Souvenir Africain et de la Diaspora. Taariixu bérab bi di lëkkale patrimoineu jigéen ak mémoireu société. Expositions yi mën a joxe ab yoon ngir xam ni rôleu jigéen ñi soppeeku te di wéy ci jamono yi.

### Collections ak xam-xam

Mbir yi ñuy wone mën nañu jëm ci dundug jigéen ci milieu rural ak urbain, liggéey, savoir-faire, vêtement, objets ak ay pratiquesu aada. Xam-xam yu mel ni di wone diversitéu parcours ak identitéu jigéen ñi ci Senegaal. Dencug mbir yi di jàppale transmissionu mémoire ci génération yi.

### Émancipation ak transmission

Musée bi di jàppale waxtaan ci émancipation, égalité ak placeu jigéen ci société. Visite, exposition ak jàngale di mën a yokk xam-xam ak respectu patrimoine. Musée de la Femme di wone ne histoireu jigéen ñi bokk na ci histoireu Senegaal te war nañu ko denc, jàng ak wone.`,
  },
};
