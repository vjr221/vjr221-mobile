import { useCallback, useEffect, useMemo, useState } from 'react';
import type { TranslationKey } from '../../i18n/strings';
import { Pressable, RefreshControl, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ContentCard } from '../../components/ContentCard';
import { EmptyState, ErrorState, LoadingState } from '../../components/ContentStates';
import { SectionHeader } from '../../components/SectionHeader';
import { Icon } from '../../components/icons/Icon';
import { categories } from '../../config/categories';
import { useI18n } from '../../i18n/I18nProvider';
import { getFeaturedContent } from '../../services/contentRepository';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import type { ContentItem, ContentType } from '../../types/content';
import { useRefreshOnReconnect } from '../../hooks/useRefreshOnReconnect';

type DetailContext = { items: ContentItem[]; index: number };
type OpenContent = (item: ContentItem, context?: DetailContext) => void;

export function HomeScreen({
  onOpen,
  onSearch,
  onExplore,
  onEmergencies,
}: {
  onOpen: OpenContent;
  onSearch: () => void;
  onExplore: (collection?: ContentType) => void;
  onEmergencies: () => void;
}) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [items, setItems] = useState<ContentItem[]>([]);
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [cached, setCached] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const load = useCallback((opts: { silent?: boolean } = {}) => {
    if (!opts.silent) setState('loading');
    getFeaturedContent()
      .then((result) => {
        setItems(result.items);
        setCached(result.fromCache);
        setState('ready');
      })
      .catch(() => setState('error'))
      .finally(() => setRefreshing(false));
  }, []);
  useRefreshOnReconnect(
    useCallback(() => {
      load({ silent: true });
    }, [load]),
  );
  useEffect(() => {
    const timer = setTimeout(() => load(), 0);
    return () => clearTimeout(timer);
  }, [load]);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    load({ silent: true });
  }, [load]);
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.terreStrong} colors={[colors.terreStrong]} />
      }
    >
      {cached ? (
        <View style={styles.offline}>
          <Text style={styles.offlineText}>{t('offline')}</Text>
        </View>
      ) : null}
      <LinearGradient colors={[colors.savane, colors.savane2]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.hero}>
        <Text style={styles.brand}>
          VJR <Text style={styles.brandAccent}>221</Text>
        </Text>
        <Text style={styles.tagline}>{t('tagline')}</Text>
        <Pressable accessibilityRole="button" onPress={onSearch} style={styles.searchWrap}>
          <Icon name="search" size={17} color={colors.inkSoft} />
          <View pointerEvents="none" style={{ flex: 1 }}>
            <TextInput editable={false} placeholder={t('searchPlaceholder')} placeholderTextColor={colors.inkSoft} style={styles.search} />
          </View>
        </Pressable>
        <View style={styles.heroActions}>
          <Pressable accessibilityRole="button" onPress={() => onExplore()} style={({ pressed }) => [styles.cta, pressed && styles.ctaPressed]}>
            <Text style={styles.ctaText}>{t('discover')}</Text>
            <Icon name="chevronRight" size={15} color={colors.savane} />
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('emergenciesTitle')}
            onPress={onEmergencies}
            style={({ pressed }) => [styles.emergencyCta, pressed && styles.ctaPressed]}
          >
            <Icon name="phone" size={15} color={colors.onSavane} />
            <Text style={styles.emergencyCtaText}>{t('emergenciesShort')}</Text>
          </Pressable>
        </View>
      </LinearGradient>

      <View style={styles.quickRow}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('regions')}
          onPress={() => onExplore('regions')}
          style={({ pressed }) => [styles.quickCard, pressed && styles.categoryPressed]}
        >
          <Icon name="territoires" size={18} color={colors.terreStrong} />
          <Text style={styles.quickText}>{t('regions')}</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('directory')}
          onPress={() => onExplore('directory')}
          style={({ pressed }) => [styles.quickCard, pressed && styles.categoryPressed]}
        >
          <Icon name="directory" size={18} color={colors.terreStrong} />
          <Text style={styles.quickText}>{t('directory')}</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('search')}
          onPress={onSearch}
          style={({ pressed }) => [styles.quickCard, pressed && styles.categoryPressed]}
        >
          <Icon name="search" size={18} color={colors.terreStrong} />
          <Text style={styles.quickText}>{t('search')}</Text>
        </Pressable>
      </View>

      <SectionHeader onSeeAll={() => onExplore()} seeAllLabel={t('explore')}>
        {t('categories')}
      </SectionHeader>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryRow}>
        {categories.map((category) => (
          <Pressable
            key={category.id}
            accessibilityRole="button"
            accessibilityLabel={t(category.labelKey as TranslationKey)}
            onPress={() => onExplore(category.id)}
            style={({ pressed }) => [styles.category, pressed && styles.categoryPressed]}
          >
            <View style={styles.categoryIconWrap}>
              <Icon name={category.icon} size={19} color={colors.terreStrong} />
            </View>
            <Text numberOfLines={1} style={styles.categoryText}>
              {t(category.labelKey as TranslationKey)}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      <SectionHeader>{t('recent')}</SectionHeader>
      {state === 'loading' ? <LoadingState /> : null}
      {state === 'error' ? <ErrorState onRetry={load} /> : null}
      {state === 'ready' && !items.length ? <EmptyState message={t('unavailable')} /> : null}
      {items.map((item, index) => (
        <ContentCard key={`${item.type}-${item.id}`} item={item} onPress={() => onOpen(item, { items, index })} />
      ))}
    </ScrollView>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    content: { padding: spacing.md, paddingBottom: 120, backgroundColor: colors.bg },
    offline: { backgroundColor: colors.surfaceSoft, borderRadius: radii.sm, padding: spacing.sm, marginBottom: spacing.sm },
    offlineText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 12 },
    hero: { borderRadius: radii.xl, padding: spacing.xl, minHeight: 268, marginTop: spacing.xs },
    brand: { color: colors.onSavane, fontSize: type.display, fontFamily: fonts.displayExtraBold, letterSpacing: 0.4 },
    brandAccent: { color: colors.safran },
    tagline: { color: colors.onSavaneSoft, fontFamily: fonts.serifItalic, fontSize: type.bodyLg, marginTop: 6 },
    searchWrap: {
      marginTop: 26,
      backgroundColor: colors.white,
      height: 50,
      borderRadius: radii.pill,
      paddingHorizontal: spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
    },
    search: { color: colors.ink, fontFamily: fonts.body, fontSize: 15 },
    heroActions: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginTop: spacing.lg, alignItems: 'center' },
    cta: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      backgroundColor: colors.safran,
      borderRadius: radii.pill,
      paddingHorizontal: 18,
      paddingVertical: 12,
    },
    emergencyCta: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      borderRadius: radii.pill,
      paddingHorizontal: 14,
      paddingVertical: 12,
      borderWidth: 1.5,
      borderColor: colors.onSavaneSoft,
    },
    ctaPressed: { opacity: 0.88 },
    ctaText: { fontFamily: fonts.bodyBold, color: colors.savane, fontSize: 14 },
    emergencyCtaText: { fontFamily: fonts.bodySemiBold, color: colors.onSavane, fontSize: 13 },
    quickRow: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.lg, marginBottom: spacing.sm },
    quickCard: {
      flex: 1,
      backgroundColor: colors.surface,
      borderRadius: radii.lg,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.sm,
      alignItems: 'center',
      gap: 6,
      minHeight: 72,
      justifyContent: 'center',
    },
    quickText: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 12, textAlign: 'center' },
    categoryRow: { gap: spacing.sm, paddingVertical: spacing.xs, paddingRight: spacing.md },
    category: {
      width: 132,
      padding: spacing.md,
      borderRadius: radii.lg,
      backgroundColor: colors.surface,
      alignItems: 'flex-start',
      gap: spacing.sm,
    },
    categoryPressed: { opacity: 0.9 },
    categoryIconWrap: {
      width: 38,
      height: 38,
      borderRadius: radii.pill,
      backgroundColor: colors.surfaceSoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryText: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 14, flexShrink: 1 },
  });
}
