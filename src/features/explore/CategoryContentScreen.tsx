import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ContentCard } from '../../components/ContentCard';
import { EmptyState, ErrorState, LoadingState } from '../../components/ContentStates';
import { Button } from '../../components/Button';
import { Icon } from '../../components/icons/Icon';
import { useI18n } from '../../i18n/I18nProvider';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { getCategoryContent } from '../../services/contentRepository';
import type { ContentItem, ContentType } from '../../types/content';
import type { TranslationKey } from '../../i18n/strings';

type LoadState = 'loading' | 'ready' | 'error';

/**
 * Écran générique pour un univers éditorial national (Tourisme, Patrimoine,
 * Gastronomie, Histoire, Nature, Culture, Événements, Personnalités,
 * Actualités) : une seule implémentation pour ces rubriques plutôt que des
 * écrans quasi identiques, chacune filtrée sur ses vraies catégories
 * WordPress (voir contentRepository.CATEGORY_TAXONOMY) — jamais une liste
 * fabriquée. Recherche, pagination « Charger plus », états
 * loading/error/empty/offline explicites : même grammaire que GeoExplorer et
 * SearchScreen.
 */
export function CategoryContentScreen({
  type,
  titleKey,
  introKey,
  onOpen,
  onExit,
}: {
  type: ContentType;
  titleKey: TranslationKey;
  introKey: TranslationKey;
  onOpen: (item: ContentItem) => void;
  onExit: () => void;
}) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const online = useOnlineStatus();

  const [term, setTerm] = useState('');
  const [items, setItems] = useState<ContentItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [state, setState] = useState<LoadState>('loading');
  const [loadingMore, setLoadingMore] = useState(false);
  const [cached, setCached] = useState(false);

  const load = useCallback(
    (q: string) => {
      setState('loading');
      setPage(1);
      getCategoryContent(type, { q: q || undefined, page: 1 })
        .then((result) => {
          setItems(result.items);
          setHasMore(result.hasMore);
          setCached(result.fromCache);
          setState('ready');
        })
        .catch(() => setState('error'));
    },
    [type]
  );

  useEffect(() => {
    const timer = setTimeout(() => load(term), term ? 350 : 0);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term, type]);

  const loadMore = () => {
    if (loadingMore || !hasMore) return;
    const nextPage = page + 1;
    setLoadingMore(true);
    getCategoryContent(type, { q: term || undefined, page: nextPage })
      .then((result) => {
        setItems((current) => [...current, ...result.items]);
        setHasMore(result.hasMore);
        setPage(nextPage);
      })
      .catch(() => {})
      .finally(() => setLoadingMore(false));
  };

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
      <Pressable accessibilityRole="button" onPress={onExit} style={styles.backRow}>
        <Icon name="chevronLeft" size={16} color={colors.terreStrong} />
        <Text style={styles.backText}>{t('back')}</Text>
      </Pressable>
      <Text style={styles.title}>{t(titleKey)}</Text>
      <Text style={styles.intro}>{t(introKey)}</Text>
      {!online || cached ? (
        <View style={styles.offline}>
          <Text style={styles.offlineText}>{t('offline')}</Text>
        </View>
      ) : null}
      <View style={styles.inputWrap}>
        <Icon name="search" size={16} color={colors.inkSoft} />
        <TextInput
          value={term}
          onChangeText={setTerm}
          placeholder={t('searchPlaceholder')}
          placeholderTextColor={colors.inkSoft}
          style={styles.input}
          autoCapitalize="none"
        />
        {term ? (
          <Pressable accessibilityRole="button" hitSlop={8} onPress={() => setTerm('')}>
            <Icon name="close" size={16} color={colors.inkSoft} />
          </Pressable>
        ) : null}
      </View>
      {state === 'loading' ? <LoadingState /> : null}
      {state === 'error' ? <ErrorState onRetry={() => load(term)} /> : null}
      {state === 'ready' && !items.length ? <EmptyState message={term ? t('noResults') : t('categoryEmpty')} /> : null}
      {items.map((item) => (
        <ContentCard key={`${item.type}-${item.id}`} item={item} onPress={onOpen} />
      ))}
      {state === 'ready' && hasMore ? (
        <Button variant="secondary" size="sm" onPress={loadMore} loading={loadingMore} style={styles.loadMoreBtn}>
          {t('loadMore')}
        </Button>
      ) : null}
    </ScrollView>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    content: { padding: spacing.md, paddingBottom: 120, backgroundColor: colors.bg },
    backRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: spacing.sm, alignSelf: 'flex-start' },
    backText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 14 },
    title: { color: colors.ink, fontSize: type.display - 8, fontFamily: fonts.displayBold },
    intro: { color: colors.inkSoft, marginTop: 4, marginBottom: spacing.md, fontFamily: fonts.body, fontSize: type.body, lineHeight: 20 },
    offline: { backgroundColor: colors.surfaceSoft, borderRadius: radii.sm, padding: spacing.sm, marginBottom: spacing.sm },
    offlineText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 12 },
    inputWrap: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, backgroundColor: colors.surface, borderRadius: radii.pill, height: 46, paddingHorizontal: spacing.md, marginBottom: spacing.md },
    input: { flex: 1, color: colors.ink, fontFamily: fonts.body, fontSize: 14 },
    loadMoreBtn: { alignSelf: 'center', marginTop: spacing.sm },
  });
}
