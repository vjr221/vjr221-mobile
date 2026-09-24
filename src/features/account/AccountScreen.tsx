import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { Icon } from '../../components/icons/Icon';
import { Button } from '../../components/Button';
import { useAuthSession } from '../../services/authService';
import { openExternalUrl } from '../../services/externalLinks';
import { useI18n } from '../../i18n/I18nProvider';

const SITE = 'https://vjr221.sn';
/** Espace membre WordPress — login / inscription / gestion des fiches. */
const ACCOUNT_URL = `${SITE}/mon-compte/`;
/** Formulaire multi-étapes d’ajout d’établissement (validation éditoriale). */
const ADD_LISTING_URL = `${SITE}/ajouter-un-etablissement-a-l-annuaire/`;

/**
 * Compte VJR 221.
 *
 * Décision produit : pas d’auth native tant qu’il n’existe pas d’API JWT/OAuth
 * côté portail. Création de compte, connexion et réclamation de fiches passent
 * par le site (WebBrowser) — mêmes formulaires, même validation éditoriale.
 * Les favoris restent 100 % locaux et fonctionnent sans compte.
 */
export function AccountScreen() {
  const { t, locale } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const session = useAuthSession();
  const authenticated = session.status === 'authenticated' && session.profile;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconWrap}>
          <Icon name="user" size={18} color={colors.terreStrong} />
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{t('accountTitle')}</Text>
          <Text style={styles.body}>
            {authenticated
              ? t('accountAuthenticated', { name: session.profile!.displayName })
              : t('accountAnonymous')}
          </Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Button
          variant="primary"
          size="sm"
          onPress={() => {
            void openExternalUrl(ACCOUNT_URL, 'web');
          }}
          accessibilityLabel={t('accountOpenSite')}
        >
          {t('accountOpenSite')}
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onPress={() => {
            void openExternalUrl(ADD_LISTING_URL, 'web');
          }}
          accessibilityLabel={t('siteEstablishment')}
        >
          {t('siteEstablishment')}
        </Button>
      </View>

      <Pressable
        accessibilityRole="link"
        accessibilityHint={locale === 'wo' ? 'Dina ubbi site bi' : 'Ouvre la page sur vjr221.sn'}
        onPress={() => {
          void openExternalUrl(ACCOUNT_URL, 'web');
        }}
        style={styles.hintRow}
      >
        <Text style={styles.hint}>{t('accountClaimHint')}</Text>
        <Icon name="chevronRight" size={13} color={colors.terreStrong} />
      </Pressable>
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    card: {
      backgroundColor: colors.surfaceSoft,
      borderRadius: radii.lg,
      padding: spacing.md,
      marginTop: spacing.md,
      gap: spacing.sm,
    },
    header: { flexDirection: 'row', gap: spacing.sm },
    iconWrap: {
      width: 36,
      height: 36,
      borderRadius: radii.pill,
      backgroundColor: colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: { flex: 1 },
    title: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 15, marginBottom: 4 },
    body: { color: colors.inkSoft, lineHeight: 20, fontFamily: fonts.body, fontSize: type.caption },
    actions: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, marginTop: spacing.xs },
    hintRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      paddingTop: spacing.xs,
    },
    hint: { flex: 1, color: colors.terreStrong, fontFamily: fonts.bodyMedium, fontSize: 13, lineHeight: 18 },
  });
}
