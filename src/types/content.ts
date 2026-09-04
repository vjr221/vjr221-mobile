export type ContentType =
  | 'regions' | 'departments' | 'communes' | 'heritage' | 'tourism' | 'gastronomy' | 'people' | 'history' | 'nature' | 'wildlife' | 'beaches' | 'culture' | 'events' | 'news' | 'directory' | 'practical' | 'media' | 'diaspora' | 'community';

export interface ContentItem {
  id: number;
  title: string;
  excerpt?: string;
  content?: string;
  /** Version structurée de `content` pour le rendu riche en fiche. */
  contentBlocks?: import('../services/richText').RichBlock[];
  imageUrl?: string;
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
