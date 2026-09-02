import { StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing } from '../../theme/tokens';
import { useAuthSession } from '../../services/authService';
import { useI18n } from '../../i18n/I18nProvider';

/**
 * Écran Compte. Tant qu'aucun backend d'authentification n'est branché
 * (voir services/authService.ts), il affiche honnêtement l'état « à venir »
 * plutôt qu'un formulaire de connexion qui ne mènerait nulle part.
 */
export function AccountScreen() {
  const { t } = useI18n();
  const session = useAuthSession();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{t('accountTitle')}</Text>
      <Text style={styles.body}>
        {session.status === 'authenticated' && session.profile
          ? t('accountAuthenticated', { name: session.profile.displayName })
          : t('accountAnonymous')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.sand, borderRadius: radii.md, padding: spacing.md, marginTop: spacing.md },
  title: { color: colors.ink, fontWeight: '800', fontSize: 16, marginBottom: spacing.sm },
  body: { color: colors.muted, lineHeight: 20 },
});
