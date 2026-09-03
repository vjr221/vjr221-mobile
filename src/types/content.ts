export type ContentType =
  | 'regions'
  | 'departments'
  | 'communes'
  | 'heritage'
  | 'tourism'
  | 'gastronomy'
  | 'people'
  | 'history'
  | 'nature'
  | 'wildlife'
  | 'beaches'
  | 'culture'
  | 'events'
  | 'news'
  | 'directory'
  | 'practical'
  | 'media'
  | 'diaspora'
  | 'community';

export interface ContentItem {
  id: number;
  title: string;
  excerpt?: string;
  content?: string;
  imageUrl?: string;
  /** Variante allégée de `imageUrl` (miniature WordPress ou champ `.thumb` des API géo/annuaire), à préférer dans les listes/fiches ; retombe sur `imageUrl` quand aucune variante réduite n'existe. Ne jamais utiliser pour un hero plein écran. */
  thumbnailUrl?: string;
  type: ContentType;
  url?: string;
  publishedAt?: string;
  tags?: string[];
  practical?: {
    address?: string;
    phone?: string;
    whatsapp?: string;
    email?: string;
    website?: string;
    hours?: string;
    coordinates?: { latitude: number; longitude: number };
  };
}
