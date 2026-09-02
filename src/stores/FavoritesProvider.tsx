import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ContentItem } from '../types/content';

type Favorites = {
  items: ContentItem[];
  toggle: (item: ContentItem) => void;
  has: (id: number) => boolean;
};

const Context = createContext<Favorites | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ContentItem[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('favorites')
      .then((raw) => {
        if (!raw) return;
        try {
          const parsed: unknown = JSON.parse(raw);
          if (Array.isArray(parsed)) setItems(parsed as ContentItem[]);
          else AsyncStorage.removeItem('favorites').catch(() => {});
        } catch {
          AsyncStorage.removeItem('favorites').catch(() => {});
        }
      })
      .catch(() => {});
  }, []);

  const toggle = (item: ContentItem) =>
    setItems((current) => {
      const next = current.some((entry) => entry.id === item.id)
        ? current.filter((entry) => entry.id !== item.id)
        : [item, ...current];
      AsyncStorage.setItem('favorites', JSON.stringify(next)).catch(() => {});
      return next;
    });

  const value = useMemo(
    () => ({ items, toggle, has: (id: number) => items.some((item) => item.id === id) }),
    [items],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useFavorites() {
  const value = useContext(Context);
  if (!value) throw new Error('FavoritesProvider manquant');
  return value;
}
