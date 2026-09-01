import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AppNavigator } from './src/app/AppNavigator';
import { colors } from './src/theme/tokens';
import { I18nProvider } from './src/i18n/I18nProvider';
import { FavoritesProvider } from './src/stores/FavoritesProvider';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <I18nProvider><FavoritesProvider><AppNavigator /></FavoritesProvider></I18nProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
});
