import { Component, type ReactNode } from 'react';
import { Appearance, Pressable, StyleSheet, Text, View } from 'react-native';
import { darkPalette, lightPalette, type Palette } from '../theme/tokens';

/**
 * Filet de sécurité global : sans lui, une exception non interceptée pendant
 * un rendu (champ API mal formé, accès `.x` sur `null`, etc.) fait tomber
 * TOUTE l'app sur un écran figé/noir sans aucun moyen de s'en sortir pour
 * l'utilisateur. Ici, seul le sous-arbre concerné est remplacé par un écran
 * de secours avec une action « Réessayer » qui réinitialise l'état et relance
 * le rendu normal.
 *
 * Ne consomme ni `useTheme()` ni aucun autre composant/contexte de l'app (un
 * Provider au-dessus a pu être la cause même du crash) : palette figée via
 * `Appearance`, `Pressable`/`Text` bruts — pour rester fonctionnel même si
 * l'arbre de providers est lui-même en cause.
 */
export class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: { componentStack?: string | null }) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  reset = () => this.setState({ error: null });

  render() {
    if (this.state.error) return <ErrorFallback onRetry={this.reset} />;
    return this.props.children;
  }
}

function ErrorFallback({ onRetry }: { onRetry: () => void }) {
  // Pas de useColorScheme() ici pour rester indépendant de tout contexte React
  // (un Provider au-dessus a pu être la cause du crash) ; Appearance donne la
  // même info de façon synchrone et sans dépendance à l'arbre de composants.
  const scheme = Appearance.getColorScheme();
  const colors: Palette = scheme === 'dark' ? darkPalette : lightPalette;
  const styles = makeStyles(colors);
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Un problème est survenu</Text>
      <Text style={styles.body}>L’application a rencontré une erreur inattendue. Vous pouvez réessayer sans perdre vos favoris enregistrés.</Text>
      <Pressable accessibilityRole="button" accessibilityLabel="Réessayer" onPress={onRetry} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.buttonText}>Réessayer</Text>
      </Pressable>
    </View>
  );
}

function makeStyles(colors: Palette) {
  return StyleSheet.create({
    root: { flex: 1, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center', padding: 32, gap: 12 },
    title: { color: colors.ink, fontSize: 20, fontWeight: '700', textAlign: 'center' },
    body: { color: colors.inkSoft, fontSize: 15, textAlign: 'center', lineHeight: 21 },
    button: { marginTop: 8, backgroundColor: colors.terre, borderRadius: 999, paddingHorizontal: 24, paddingVertical: 13, minHeight: 46, alignItems: 'center', justifyContent: 'center' },
    buttonPressed: { opacity: 0.86 },
    buttonText: { color: colors.white, fontSize: 15, fontWeight: '600' },
  });
}
