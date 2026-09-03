import { useCallback, useEffect, useMemo, useState } from 'react';
import type { TranslationKey } from '../../i18n/strings';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
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
import { useOnlineStatus } from '../../hooks/useOnlineStatus';

/**
 * Accueil = vitrine de VJR 221. Hero éditorial (dégradé savane), accès direct
 * à la recherche, grille de territoires/univers, puis le fil de contenus
 * récents — jamais un simple flux plat consommant l'API.
 *
 * `onExplore` accepte un univers optionnel : toucher une tuile ("Tourisme"…)
 * ouvre directement cet univers dans Explorer plutôt que son menu générique.
 */
export function HomeScreen({ onOpen, onSearch, onExplore }: { onOpen: (item: ContentItem) => void; onSearch: () => void; onExplore: (collection?: ContentType) => void }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const online = useOnlineStatus();
  const [items, setItems] = useState<ContentItem[]>([]);
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [cached, setCached] = useState(false);

  const load = useCallback(() => {
    setState('loading');
    getFeaturedContent()
      .then((result) => { setItems(result.items); setCached(result.fromCache); setState('ready'); })
      .catch(() => setState('error'));
  }, []);

  useEffect(() => { const timer = setTimeout(load, 0); return () => clearTimeout(timer); }, [load]);

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {(!online || cached) ? (
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

        <Pressable accessibilityRole="button" onPress={() => onExplore()} style={({ pressed }) => [styles.cta, pressed && styles.ctaPressed]}>
          <Text style={styles.ctaText}>{t('discover')}</Text>
          <Icon name="chevronRight" size={15} color={colors.savane} />
        </Pressable>
      </LinearGradient>

      <SectionHeader onSeeAll={() => onExplore()} seeAllLabel={t('explore')}>{t('categories')}</SectionHeader>
      <View style={styles.grid}>
        {categories.slice(0, 8).map((category) => (
          <Pressable
            key={category.id}
            onPress={() => onExplore(category.id)}
            style={({ pressed }) => [styles.category, pressed && styles.categoryPressed]}
          >
            <View style={styles.categoryIconWrap}>
              <Icon name={category.icon} size={19} color={colors.terreStrong} />
            </View>
            <Text numberOfLines={1} style={styles.categoryText}>{t(category.labelKey as TranslationKey)}</Text>
          </Pressable>
        ))}
      </View>

      <SectionHeader>{t('recent')}</SectionHeader>
      {state === 'loading' ? <LoadingState /> : null}
      {state === 'error' ? <ErrorState onRetry={load} /> : null}
      {state === 'ready' && !items.length ? <EmptyState message={t('unavailable')} /> : null}
      {items.map((item) => <ContentCard key={item.id} item={item} onPress={onOpen} />)}
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

    searchWrap: { marginTop: 26, backgroundColor: colors.white, height: 50, borderRadius: radii.pill, paddingHorizontal: spacing.md, flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
    search: { color: colors.ink, fontFamily: fonts.body, fontSize: 15 },

    cta: { flexDirection: 'row', alignItems: 'center', gap: 6, alignSelf: 'flex-start', marginTop: spacing.lg, backgroundColor: colors.safran, borderRadius: radii.pill, paddingHorizontal: 18, paddingVertical: 12 },
    ctaPressed: { opacity: 0.88 },
    ctaText: { fontFamily: fonts.bodyBold, color: colors.savane, fontSize: 14 },

    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
    category: { width: '48%', padding: spacing.md, borderRadius: radii.lg, backgroundColor: colors.surface, flexDirection: 'row', gap: spacing.sm, alignItems: 'center' },
    categoryPressed: { opacity: 0.9 },
    categoryIconWrap: { width: 38, height: 38, borderRadius: radii.pill, backgroundColor: colors.surfaceSoft, alignItems: 'center', justifyContent: 'center' },
    categoryText: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 14, flexShrink: 1 },
  });
}
