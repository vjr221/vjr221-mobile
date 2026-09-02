import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ContentItem } from '../types/content';
import { syncFavorites } from '../services/favoritesSyncService';

type Favorites = { items: ContentItem[]; toggle: (item: ContentItem) => void; has: (id: number) => boolean };

/** Logique pure d'ajout/retrait, extraite pour être testable sans rendu. */
export function toggleFavorite(current: ContentItem[], item: ContentItem): ContentItem[] {
  return current.some((entry) => entry.id === item.id)
    ? current.filter((entry) => entry.id !== item.id)
    : [item, ...current];
}

const Context = createContext<Favorites | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ContentItem[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('favorites')
      .then((raw) => {
        if (!raw) return [];
        try {
          const parsed: unknown = JSON.parse(raw);
          if (Array.isArray(parsed)) return parsed as ContentItem[];
        } catch {
          // données corrompues : on repart d'une liste vide ci-dessous
        }
        AsyncStorage.removeItem('favorites').catch(() => {});
        return [];
      })
      .catch(() => [])
      .then((local) => {
        setItems(local);
        // Aujourd'hui : aucun backend de compte -> no-op qui renvoie `local`
        // inchangé (voir services/favoritesSyncService.ts). Demain, quand un
        // compte existera, cette même ligne fusionnera avec le serveur sans
        // qu'aucun écran n'ait à changer.
        return syncFavorites(local);
      })
      .then((merged) => {
        setItems(merged);
        if (merged.length) AsyncStorage.setItem('favorites', JSON.stringify(merged)).catch(() => {});
      })
      .catch(() => {});
  }, []);

  const toggle = (item: ContentItem) => setItems((current) => {
    const next = toggleFavorite(current, item);
    AsyncStorage.setItem('favorites', JSON.stringify(next)).catch(() => {});
    return next;
  });

  const value = useMemo(() => ({ items, toggle, has: (id: number) => items.some((item) => item.id === id) }), [items]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useFavorites() {
  const value = useContext(Context);
  if (!value) throw new Error('FavoritesProvider manquant');
  return value;
}
