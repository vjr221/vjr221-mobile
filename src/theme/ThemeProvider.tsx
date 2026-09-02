import { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useFonts as useUnbounded, Unbounded_600SemiBold, Unbounded_700Bold, Unbounded_800ExtraBold } from '@expo-google-fonts/unbounded';
import {
  useFonts as useInstrumentSans,
  InstrumentSans_400Regular,
  InstrumentSans_500Medium,
  InstrumentSans_600SemiBold,
  InstrumentSans_700Bold,
} from '@expo-google-fonts/instrument-sans';
import { useFonts as useLora, Lora_400Regular_Italic } from '@expo-google-fonts/lora';
import { useFonts as usePlexMono, IBMPlexMono_500Medium, IBMPlexMono_600SemiBold } from '@expo-google-fonts/ibm-plex-mono';
import { darkPalette, lightPalette, palette as paletteFor, shadow, type ColorScheme, type Palette, type ShadowLevel } from './tokens';

/**
 * Thème réactif : contrairement aux jetons statiques précédents, les couleurs
 * suivent `useColorScheme()` en direct. Un mode sombre « réellement conçu »
 * exige que chaque écran reconstruise ses styles quand le thème change
 * (voir le pattern `useMemo(() => StyleSheet.create(...), [colors])` utilisé
 * dans chaque écran), pas un simple objet de couleurs figé au démarrage.
 */
export interface Theme {
  scheme: ColorScheme;
  colors: Palette;
  shadow: (level: ShadowLevel) => ReturnType<typeof shadow>;
}

const ThemeContext = createContext<Theme>({
  scheme: 'light',
  colors: lightPalette,
  shadow: (level) => shadow(lightPalette, level),
});

export function useTheme(): Theme {
  return useContext(ThemeContext);
}

/** true dès que les 4 familles de polices de marque sont prêtes. */
export function useBrandFonts(): boolean {
  const [unboundedLoaded] = useUnbounded({ Unbounded_600SemiBold, Unbounded_700Bold, Unbounded_800ExtraBold });
  const [instrumentLoaded] = useInstrumentSans({
    InstrumentSans_400Regular,
    InstrumentSans_500Medium,
    InstrumentSans_600SemiBold,
    InstrumentSans_700Bold,
  });
  const [loraLoaded] = useLora({ Lora_400Regular_Italic });
  const [plexMonoLoaded] = usePlexMono({ IBMPlexMono_500Medium, IBMPlexMono_600SemiBold });
  return Boolean(unboundedLoaded && instrumentLoaded && loraLoaded && plexMonoLoaded);
}

export function ThemeProvider({ children, forcedScheme }: { children: React.ReactNode; forcedScheme?: ColorScheme }) {
  const systemScheme = useColorScheme();
  const scheme: ColorScheme = forcedScheme ?? (systemScheme === 'dark' ? 'dark' : 'light');

  const value = useMemo<Theme>(() => {
    const colors = paletteFor(scheme);
    return { scheme, colors, shadow: (level: ShadowLevel) => shadow(colors, level) };
  }, [scheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Réexportés pour les rares cas (ex. tests) qui veulent une palette figée sans passer par le hook.
export { lightPalette, darkPalette };
