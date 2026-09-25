import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { openExternalUrl } from '../../services/externalLinks';
import { clearAppNetworkCache } from '../../services/appCache';
import { AccountScreen } from '../account/AccountScreen';
import { NotificationPreferencesScreen } from '../account/NotificationPreferencesScreen';
import { EmergenciesScreen } from './EmergenciesScreen';
import { Icon } from '../../components/icons/Icon';
import { useI18n } from '../../i18n/I18nProvider';
import type { TranslationKey } from '../../i18n/strings';
import { useTheme } from '../../theme/ThemeProvider';
import { useThemePreference } from '../../theme/ThemePreferenceContext';
import type { ThemePreference } from '../../services/themePreference';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { APP_VERSION } from '../../config/appMeta';

const SITE_URL = 'https://vjr221.sn';

/** Annuaire = dans l'app ; le reste = pages dédiées du site (formulaires, tarifs, institutionnel). */
const MORE_ACTIONS = [
  { key: 'directory', labelKey: 'siteDirectory' as TranslationKey, mode: 'app' as const },
  { key: 'establishment', labelKey: 'siteEstablishment' as TranslationKey, mode: 'web' as const, path: '/ajouter-un-etablissement-a-l-annuaire/' },
  { key: 'pricing', labelKey: 'sitePricing' as TranslationKey, mode: 'web' as const, path: '/tarifs-annuaire/' },
  { key: 'partnership', labelKey: 'sitePartnership' as TranslationKey, mode: 'web' as const, path: '/partenariat/' },
  { key: 'support', labelKey: 'siteSupport' as TranslationKey, mode: 'web' as const, path: '/soutenir-vjr221/' },
  { key: 'about', labelKey: 'siteAbout' as TranslationKey, mode: 'web' as const, path: '/a-propos/' },
  { key: 'contact', labelKey: 'siteContact' as TranslationKey, mode: 'web' as const, path: '/contact/' },
] as const;

export function MoreScreen({
  locale,
  onLocale,
  onOpenDirectory,
}: {
  locale: 'fr' | 'wo';
  onLocale: (locale: 'fr' | 'wo') => void;
  onOpenDirectory?: () => void;
}) {
  const { t } = useI18n();
  const { colors, shadow } = useTheme();
  const { preference, setPreference } = useThemePreference();
  const styles = useMemo(() => makeStyles(colors, shadow), [colors, shadow]);
  const [cacheState, setCacheState] = useState<'idle' | 'working' | 'done'>('idle');
  const themeOptions: { value: ThemePreference; label: string; icon: 'sun' | 'moon' | 'settings' }[] = [
    { value: 'system', label: t('darkModeSystem'), icon: 'settings' },
    { value: 'light', label: t('darkModeLight'), icon: 'sun' },
    { value: 'dark', label: t('darkModeDark'), icon: 'moon' },
  ];
  const openMoreAction = (action: (typeof MORE_ACTIONS)[number]) => {
    if (action.mode === 'app') {
      onOpenDirectory?.();
      return;
    }
    void openExternalUrl(`${SITE_URL}${action.path}`, 'web');
  };
  const onClearCache = async () => {
    if (cacheState === 'working') return;
    setCacheState('working');
    try {
      await clearAppNetworkCache();
      setCacheState('done');
      setTimeout(() => setCacheState('idle'), 2500);
    } catch {
      setCacheState('idle');
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.pageTitle}>{t('more')}</Text>
      <Text style={styles.intro}>{t('moreIntro')}</Text>

      <EmergenciesScreen />

      <Text style={styles.sectionTitle}>{t('language')}</Text>
      <View accessibilityRole="radiogroup" style={styles.segment}>
        {(['fr', 'wo'] as const).map((value) => (
          <Pressable
            key={value}
            accessibilityRole="radio"
            accessibilityState={{ selected: locale === value }}
            accessibilityLabel={value === 'fr' ? t('french') : t('wolof')}
            onPress={() => onLocale(value)}
            style={[styles.segmentOption, locale === value && styles.segmentOptionActive]}
          >
            <Text style={[styles.segmentText, locale === value && styles.segmentTextActive]}>
              {value === 'fr' ? t('french') : t('wolof')}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.sectionTitle}>{t('darkMode')}</Text>
      <View accessibilityRole="radiogroup" style={styles.optionList}>
        {themeOptions.map((option, index) => (
          <Pressable
            key={option.value}
            accessibilityRole="radio"
            accessibilityState={{ selected: preference === option.value }}
            accessibilityLabel={option.label}
            onPress={() => setPreference(option.value)}
            style={[styles.option, preference === option.value && styles.optionActive, index === themeOptions.length - 1 && styles.optionLast]}
          >
            <Icon name={option.icon} size={17} color={preference === option.value ? colors.terreStrong : colors.inkSoft} />
            <Text style={[styles.optionText, preference === option.value && styles.optionTextActive]}>{option.label}</Text>
            {preference === option.value ? <Icon name="check" size={16} color={colors.terreStrong} /> : null}
          </Pressable>
        ))}
      </View>

      <Text style={styles.sectionTitle}>{t('dataSection')}</Text>
      <View style={styles.optionList}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('clearCache')}
          onPress={() => {
            void onClearCache();
          }}
          style={[styles.option, styles.optionLast]}
        >
          <Icon name="settings" size={17} color={colors.terreStrong} />
          <Text style={styles.optionText}>
            {cacheState === 'working' ? t('clearCacheWorking') : cacheState === 'done' ? t('clearCacheDone') : t('clearCache')}
          </Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>{t('siteSection')}</Text>
      <View style={styles.siteActions}>
        {MORE_ACTIONS.map((action, index) => (
          <Pressable
            key={action.key}
            accessibilityRole={action.mode === 'web' ? 'link' : 'button'}
            accessibilityLabel={t(action.labelKey)}
            accessibilityHint={
              action.mode === 'web'
                ? locale === 'wo'
                  ? 'Dina ubbi navigateur bi'
                  : 'Ouvre la page sur vjr221.sn'
                : locale === 'wo'
                  ? 'Dina ubbi annuaire bi ci application bi'
                  : "Ouvre l'annuaire dans l'application"
            }
            onPress={() => openMoreAction(action)}
            style={[styles.siteAction, index === MORE_ACTIONS.length - 1 && styles.optionLast]}
          >
            <View style={styles.siteIcon}>
              <Icon name="chevronRight" size={16} color={colors.terreStrong} />
            </View>
            <Text style={styles.siteActionText}>{t(action.labelKey)}</Text>
            {action.mode === 'web' ? (
              <Text style={styles.externalHint}>{locale === 'wo' ? 'Site' : 'Site'}</Text>
            ) : null}
          </Pressable>
        ))}
      </View>

      <NotificationPreferencesScreen />
      <AccountScreen />

      <Text style={styles.version}>
        VJR 221 · {t('appVersion')} {APP_VERSION}
      </Text>
    </ScrollView>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors'], shadow: ReturnType<typeof useTheme>['shadow']) {
  return StyleSheet.create({
    page: { padding: spacing.md, paddingBottom: 120, backgroundColor: colors.bg, flexGrow: 1 },
    pageTitle: { color: colors.ink, fontSize: type.display - 4, fontFamily: fonts.displayBold, marginTop: spacing.md, letterSpacing: 0.2 },
    intro: { color: colors.inkSoft, marginTop: 4, marginBottom: spacing.sm, fontFamily: fonts.body, fontSize: type.bodyLg, lineHeight: 22 },
    sectionTitle: {
      color: colors.inkSoft,
      fontFamily: fonts.monoSemiBold,
      fontSize: 11,
      letterSpacing: 0.8,
      textTransform: 'uppercase',
      marginBottom: spacing.sm,
      marginTop: spacing.md,
    },
    segment: { flexDirection: 'row', backgroundColor: colors.surfaceSoft, borderRadius: radii.pill, padding: 4, gap: 4, borderWidth: StyleSheet.hairlineWidth, borderColor: colors.line },
    segmentOption: { flex: 1, paddingVertical: 10, borderRadius: radii.pill, alignItems: 'center' },
    segmentOptionActive: { backgroundColor: colors.surface },
    segmentText: { color: colors.inkSoft, fontFamily: fonts.bodySemiBold, fontSize: 14 },
    segmentTextActive: { color: colors.ink },
    optionList: { backgroundColor: colors.surface, borderRadius: radii.lg, overflow: 'hidden', borderWidth: StyleSheet.hairlineWidth, borderColor: colors.line, ...shadow('subtle') },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.line,
    },
    optionLast: { borderBottomWidth: 0 },
    optionActive: { backgroundColor: colors.surfaceSoft },
    optionText: { flex: 1, color: colors.ink, fontFamily: fonts.bodyMedium, fontSize: 14 },
    optionTextActive: { fontFamily: fonts.bodySemiBold },
    siteActions: { backgroundColor: colors.surface, borderRadius: radii.lg, overflow: 'hidden', borderWidth: StyleSheet.hairlineWidth, borderColor: colors.line, ...shadow('subtle') },
    siteAction: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      minHeight: 54,
      paddingHorizontal: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.line,
    },
    siteIcon: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: colors.surfaceSoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    siteActionText: { flex: 1, color: colors.ink, fontFamily: fonts.bodyMedium, fontSize: 14 },
    externalHint: {
      color: colors.inkSoft,
      fontFamily: fonts.monoSemiBold,
      fontSize: 10,
      letterSpacing: 0.4,
      textTransform: 'uppercase',
    },
    version: {
      marginTop: spacing.xl,
      textAlign: 'center',
      color: colors.inkSoft,
      fontFamily: fonts.mono,
      fontSize: 11,
    },
  });
}
