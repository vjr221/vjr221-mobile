import { createContext, useContext } from 'react';
import type { ThemePreference } from '../services/themePreference';

export interface ThemePreferenceValue {
  preference: ThemePreference;
  setPreference: (preference: ThemePreference) => void;
}

/**
 * Contexte séparé de `ThemeContext` (`./ThemeProvider`) : celui-là porte la
 * palette *résolue* (lue par tous les écrans), celui-ci porte le *choix brut*
 * de l'utilisateur (système/clair/sombre), lu uniquement par l'écran Plus.
 */
export const ThemePreferenceContext = createContext<ThemePreferenceValue>({
  preference: 'system',
  setPreference: () => {},
});

export function useThemePreference(): ThemePreferenceValue {
  return useContext(ThemePreferenceContext);
}
