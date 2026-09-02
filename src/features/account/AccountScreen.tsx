import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { Icon } from '../../components/icons/Icon';
import { useAuthSession } from '../../services/authService';
import { useI18n } from '../../i18n/I18nProvider';

/**
 * Écran Compte. Tant qu'aucun backend d'authentification n'est branché
 * (voir services/authService.ts), il affiche honnêtement l'état « à venir »
 * plutôt qu'un formulaire de connexion qui ne mènerait nulle part.
 */
export function AccountScreen() {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const session = useAuthSession();

  return (
    <View style={styles.card}>
      <View style={styles.iconWrap}>
        <Icon name="user" size={18} color={colors.terreStrong} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{t('accountTitle')}</Text>
        <Text style={styles.body}>
          {session.status === 'authenticated' && session.profile
            ? t('accountAuthenticated', { name: session.profile.displayName })
            : t('accountAnonymous')}
        </Text>
      </View>
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    card: { flexDirection: 'row', gap: spacing.sm, backgroundColor: colors.surfaceSoft, borderRadius: radii.lg, padding: spacing.md, marginTop: spacing.md },
    iconWrap: { width: 36, height: 36, borderRadius: radii.pill, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' },
    text: { flex: 1 },
    title: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 15, marginBottom: 4 },
    body: { color: colors.inkSoft, lineHeight: 20, fontFamily: fonts.body, fontSize: type.caption },
  });
}
