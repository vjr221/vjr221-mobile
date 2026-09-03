import { useEffect, useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppNavigator } from './src/app/AppNavigator';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { I18nProvider } from './src/i18n/I18nProvider';
import { FavoritesProvider } from './src/stores/FavoritesProvider';
import { ThemeProvider, useBrandFonts, useTheme } from './src/theme/ThemeProvider';
import { getThemePreference, setThemePreference, type ThemePreference } from './src/services/themePreference';
import { initSentry } from './src/services/sentry';
import { ThemePreferenceContext } from './src/theme/ThemePreferenceContext';

// Garde l'écran de démarrage natif affiché tant que les polices de marque ne
// sont pas chargées (voir AppShell ci-dessous) : sans ça, Expo le referme dès
// le premier rendu JS, exposant un bref flash (fond neutre système / police
// de repli) avant que l'écran "vrai" fond de marque + polices ne s'affiche.
SplashScreen.preventAutoHideAsync().catch(() => {});

// Le plus tôt possible : capte aussi les exceptions qui surviennent avant le
// premier rendu (providers, imports statiques).
initSentry();

export default function App() {
  const [preference, setPreference] = useState<ThemePreference>('system');

  useEffect(() => {
    getThemePreference().then(setPreference);
  }, []);

  const updatePreference = (next: ThemePreference) => {
    setPreference(next);
    setThemePreference(next).catch(() => {});
  };

  return (
    // Englobe TOUT (y compris les providers) : une exception dans n'importe
    // quel écran, ou même dans un provider, ne doit jamais figer l'app sur un
    // rendu cassé sans recours pour l'utilisateur (voir ErrorBoundary.tsx).
    <ErrorBoundary>
      <SafeAreaProvider>
        <ThemePreferenceContext.Provider value={{ preference, setPreference: updatePreference }}>
          <ThemeProvider forcedScheme={preference === 'system' ? undefined : preference}>
            <AppShell />
          </ThemeProvider>
        </ThemePreferenceContext.Provider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}

/** Sépare le gate de chargement des polices de marque pour pouvoir lire `useTheme()` (nécessite le Provider au-dessus). */
function AppShell() {
  const { scheme, colors } = useTheme();
  const fontsLoaded = useBrandFonts();
  const styles = useMemo(() => StyleSheet.create({ container: { flex: 1, backgroundColor: colors.bg } }), [colors]);

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync().catch(() => {});
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // Écran de démarrage neutre (fond de marque) plutôt qu'un flash blanc ou
    // un spinner générique le temps que les 4 familles de polices se chargent.
    // Le splash natif (voir plugin expo-splash-screen dans app.json) reste
    // affiché par-dessus jusqu'à l'appel hideAsync() ci-dessus : cette vue
    // n'est donc jamais visible elle-même, elle sert de fond continu pendant
    // la transition splash natif -> premier rendu JS.
    return <View style={styles.container} />;
  }

  return (
    // Bord bas exclu ici : AppNavigator gère lui-même l'inset bas (voir
    // useSafeAreaInsets dans son tabBarWrap) pour que la barre d'onglets
    // reste visuellement pleine jusqu'au bord de l'écran, tout en gardant
    // ses boutons au-dessus de la zone de geste système / barre Android.
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
      <I18nProvider>
        <FavoritesProvider>
          <AppNavigator />
        </FavoritesProvider>
      </I18nProvider>
    </SafeAreaView>
  );
}
