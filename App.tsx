import { useEffect, useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppNavigator } from './src/app/AppNavigator';
import { I18nProvider } from './src/i18n/I18nProvider';
import { FavoritesProvider } from './src/stores/FavoritesProvider';
import { ThemeProvider, useBrandFonts, useTheme } from './src/theme/ThemeProvider';
import { getThemePreference, setThemePreference, type ThemePreference } from './src/services/themePreference';
import { ThemePreferenceContext } from './src/theme/ThemePreferenceContext';

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
    <SafeAreaProvider>
      <ThemePreferenceContext.Provider value={{ preference, setPreference: updatePreference }}>
        <ThemeProvider forcedScheme={preference === 'system' ? undefined : preference}>
          <AppShell />
        </ThemeProvider>
      </ThemePreferenceContext.Provider>
    </SafeAreaProvider>
  );
}

/** Sépare le gate de chargement des polices de marque pour pouvoir lire `useTheme()` (nécessite le Provider au-dessus). */
function AppShell() {
  const { scheme, colors } = useTheme();
  const fontsLoaded = useBrandFonts();
  const styles = useMemo(() => StyleSheet.create({ container: { flex: 1, backgroundColor: colors.bg } }), [colors]);

  if (!fontsLoaded) {
    // Écran de démarrage neutre (fond de marque) plutôt qu'un flash blanc ou
    // un spinner générique le temps que les 4 familles de polices se chargent.
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
