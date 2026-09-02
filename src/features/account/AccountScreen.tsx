import { StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing } from '../../theme/tokens';
import { useAuthSession } from '../../services/authService';

/**
 * Écran Compte. Tant qu'aucun backend d'authentification n'est branché
 * (voir services/authService.ts), il affiche honnêtement l'état « à venir »
 * plutôt qu'un formulaire de connexion qui ne mènerait nulle part.
 */
export function AccountScreen() {
  const session = useAuthSession();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Compte VJR 221</Text>
      <Text style={styles.body}>
        {session.status === 'authenticated' && session.profile
          ? `Connecté en tant que ${session.profile.displayName}.`
          : 'La création de compte arrive prochainement. Vos favoris restent enregistrés sur cet appareil et fonctionnent dès maintenant, sans compte.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.sand, borderRadius: radii.md, padding: spacing.md, marginTop: spacing.md },
  title: { color: colors.ink, fontWeight: '800', fontSize: 16, marginBottom: spacing.sm },
  body: { color: colors.muted, lineHeight: 20 },
});
