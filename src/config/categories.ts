import type { ContentType } from '../types/content';
export type Category = { id: ContentType; labelKey: string; emoji: string; available: boolean };
export const categories: Category[] = [
  { id: 'regions', labelKey: 'regions', emoji: '◉', available: false }, { id: 'tourism', labelKey: 'tourism', emoji: '⌁', available: false }, { id: 'heritage', labelKey: 'heritage', emoji: '◇', available: false }, { id: 'gastronomy', labelKey: 'gastronomy', emoji: '◌', available: false }, { id: 'history', labelKey: 'history', emoji: '◫', available: false }, { id: 'nature', labelKey: 'nature', emoji: '♧', available: false }, { id: 'culture', labelKey: 'culture', emoji: '◈', available: false }, { id: 'events', labelKey: 'events', emoji: '✦', available: false }, { id: 'people', labelKey: 'people', emoji: '●', available: false }, { id: 'directory', labelKey: 'directory', emoji: '▦', available: false }, { id: 'news', labelKey: 'news', emoji: '▤', available: true },
];
