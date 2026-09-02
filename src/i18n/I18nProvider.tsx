import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Locale, TranslationKey } from './strings';
import { strings } from './strings';

type I18n = { locale: Locale; setLocale: (locale: Locale) => void; t: (key: TranslationKey, params?: Record<string, string>) => string };

const Context = createContext<I18n | null>(null);

function interpolate(template: string, params?: Record<string, string>): string {
  if (!params) return template;
  return Object.entries(params).reduce((acc, [key, value]) => acc.replace(`{${key}}`, value), template);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr');

  useEffect(() => {
    AsyncStorage.getItem('settings:locale')
      .then((value) => { if (value === 'fr' || value === 'wo') setLocaleState(value); })
      .catch(() => {});
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    AsyncStorage.setItem('settings:locale', next).catch(() => {});
  };

  const value = useMemo(
    () => ({ locale, setLocale, t: (key: TranslationKey, params?: Record<string, string>) => interpolate(strings[locale][key] ?? strings.fr[key], params) }),
    [locale],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useI18n() {
  const value = useContext(Context);
  if (!value) throw new Error('I18nProvider manquant');
  return value;
}
