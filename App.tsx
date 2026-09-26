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
import { ThemePreferenceContext } from './src/theme/ThemePreferenceContext';
import { initMonitoring } from './src/services/sentry';

// Ne jamais faire échouer le démarrage si le module splash est absente.
try {
  SplashScreen.preventAutoHideAsync().catch(() => {});
} catch {
  // ignore
}

export default function App() {
  const [preference, setPreference] = useState<ThemePreference>('system');

  useEffect(() => {
    getThemePreference().then(setPreference).catch(() => {});
  }, []);

  const updatePreference = (next: ThemePreference) => {
    setPreference(next);
    setThemePreference(next).catch(() => {});
  };

  return (
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

function AppShell() {
  const { scheme, colors } = useTheme();
  // Lance le chargement des polices en arrière-plan (ne bloque plus l'UI).
  useBrandFonts();
  const styles = useMemo(() => StyleSheet.create({ container: { flex: 1, backgroundColor: colors.bg } }), [colors]);

  useEffect(() => {
    // Afficher l'UI immédiatement — le splash figé était perçu comme un crash.
    const t = setTimeout(() => {
      SplashScreen.hideAsync().catch(() => {});
      // Observabilité uniquement après premier rendu (jamais au cold start).
      initMonitoring();
    }, 50);
    return () => clearTimeout(t);
  }, []);

  return (
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
