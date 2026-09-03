import { useMemo } from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AccountScreen } from '../account/AccountScreen';
import { NotificationPreferencesScreen } from '../account/NotificationPreferencesScreen';
import { Icon } from '../../components/icons/Icon';
import { useI18n } from '../../i18n/I18nProvider';
import { useTheme } from '../../theme/ThemeProvider';
import { useThemePreference } from '../../theme/ThemePreferenceContext';
import type { ThemePreference } from '../../services/themePreference';
import { fonts, radii, spacing, type } from '../../theme/tokens';

const SITE = 'https://vjr221.sn';
const SITE_LINKS = [
  { path: '/ajouter-un-etablissement-a-l-annuaire/', label: 'Référencer un établissement', wo: 'Bind sa ab établissement ci annuaire bi', icon: 'directory' as const },
  { path: '/tarifs-annuaire/', label: "Tarifs de l'annuaire", wo: 'Njëg yi ci annuaire bi', icon: 'tag' as const },
  { path: '/soutenir-vjr221/', label: 'Soutenir VJR 221', wo: 'Ndimbal VJR 221', icon: 'heart' as const },
  { path: '/partenariat/', label: 'Partenariat', wo: 'Jëflante', icon: 'people' as const },
  { path: '/galerie/', label: 'Galerie', wo: 'Galerie', icon: 'image' as const },
  { path: '/emploi/', label: 'Emploi & opportunités', wo: 'Liggéey ak opportunités', icon: 'briefcase' as const },
  { path: '/a-propos/', label: 'À propos de VJR 221', wo: 'Ci mbirum VJR 221', icon: 'info' as const },
] as const;

export function MoreScreen({ locale, onLocale }: { locale: 'fr' | 'wo'; onLocale: (locale: 'fr' | 'wo') => void }) {
  const { t } = useI18n(); const { colors } = useTheme(); const { preference, setPreference } = useThemePreference(); const styles = useMemo(() => makeStyles(colors), [colors]);
  const themeOptions: { value: ThemePreference; label: string; icon: 'sun' | 'moon' | 'settings' }[] = [{ value: 'system', label: t('darkModeSystem'), icon: 'settings' }, { value: 'light', label: t('darkModeLight'), icon: 'sun' }, { value: 'dark', label: t('darkModeDark'), icon: 'moon' }];
  return <ScrollView contentContainerStyle={styles.page}>
    <Text style={styles.pageTitle}>{t('more')}</Text><Text style={styles.intro}>{t('moreIntro')}</Text>
    <Text style={styles.sectionTitle}>{t('language')}</Text><View style={styles.segment}>{(['fr', 'wo'] as const).map((value) => <Pressable key={value} accessibilityRole="button" onPress={() => onLocale(value)} style={[styles.segmentOption, locale === value && styles.segmentOptionActive]}><Text style={[styles.segmentText, locale === value && styles.segmentTextActive]}>{value === 'fr' ? t('french') : t('wolof')}</Text></Pressable>)}</View>
    <Text style={styles.sectionTitle}>{t('darkMode')}</Text><View style={styles.optionList}>{themeOptions.map((option, index) => <Pressable key={option.value} accessibilityRole="button" onPress={() => setPreference(option.value)} style={[styles.option, preference === option.value && styles.optionActive, index === themeOptions.length - 1 && styles.optionLast]}><Icon name={option.icon} size={17} color={preference === option.value ? colors.terreStrong : colors.inkSoft} /><Text style={[styles.optionText, preference === option.value && styles.optionTextActive]}>{option.label}</Text>{preference === option.value ? <Icon name="check" size={16} color={colors.terreStrong} /> : null}</Pressable>)}</View>
    <Text style={styles.sectionTitle}>{locale === 'fr' ? 'Services VJR 221' : 'Jëfandikoo VJR 221'}</Text>
    <View style={styles.optionList}>{SITE_LINKS.map((link, index) => <Pressable key={link.path} accessibilityRole="link" onPress={() => Linking.openURL(`${SITE}${link.path}`)} style={[styles.option, index === SITE_LINKS.length - 1 && styles.optionLast]}><Icon name={link.icon} size={17} color={colors.terreStrong} /><Text style={styles.optionText}>{locale === 'fr' ? link.label : link.wo}</Text><Icon name="chevronRight" size={16} color={colors.inkSoft} /></Pressable>)}</View>
    <NotificationPreferencesScreen /><AccountScreen />
  </ScrollView>;
}
function makeStyles(colors: ReturnType<typeof useTheme>['colors']) { return StyleSheet.create({ page: { padding: spacing.md, paddingBottom: 120, backgroundColor: colors.bg, flexGrow: 1 }, pageTitle: { color: colors.ink, fontSize: type.display - 4, fontFamily: fonts.displayBold, marginTop: spacing.md }, intro: { color: colors.inkSoft, marginTop: 4, marginBottom: spacing.lg, fontFamily: fonts.body, fontSize: type.bodyLg, lineHeight: 22 }, sectionTitle: { color: colors.inkSoft, fontFamily: fonts.monoSemiBold, fontSize: 11, letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: spacing.sm, marginTop: spacing.md }, segment: { flexDirection: 'row', backgroundColor: colors.surfaceSoft, borderRadius: radii.pill, padding: 4, gap: 4 }, segmentOption: { flex: 1, paddingVertical: 10, borderRadius: radii.pill, alignItems: 'center' }, segmentOptionActive: { backgroundColor: colors.surface }, segmentText: { color: colors.inkSoft, fontFamily: fonts.bodySemiBold, fontSize: 14 }, segmentTextActive: { color: colors.ink }, optionList: { backgroundColor: colors.surface, borderRadius: radii.lg, overflow: 'hidden' }, option: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingHorizontal: spacing.md, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.line }, optionLast: { borderBottomWidth: 0 }, optionActive: { backgroundColor: colors.surfaceSoft }, optionText: { flex: 1, color: colors.ink, fontFamily: fonts.bodyMedium, fontSize: 14 }, optionTextActive: { fontFamily: fonts.bodySemiBold } }); }
