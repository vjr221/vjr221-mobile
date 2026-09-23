import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Pressable, RefreshControl, StyleSheet, Text, TextInput, View } from 'react-native';
import { ContentCard } from '../../components/ContentCard';
import { EmptyState, ErrorState, LoadingState } from '../../components/ContentStates';
import { Icon } from '../../components/icons/Icon';
import { SectionHeader } from '../../components/SectionHeader';
import type { GeoView } from '../explore/GeoExplorer';
import { getDirectoryEntry } from '../../services/directoryRepository';
import { unifiedSearch, type UnifiedGeoHit, type UnifiedSearchResult } from '../../services/unifiedSearch';
import type { ContentItem } from '../../types/content';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { useI18n } from '../../i18n/I18nProvider';
import { useLatestRequest } from '../../hooks/useLatestRequest';
import { useRefreshOnReconnect } from '../../hooks/useRefreshOnReconnect';

type DetailContext = { items: ContentItem[]; index: number };
type OpenContent = (item: ContentItem, context?: DetailContext) => void;

const EMPTY: UnifiedSearchResult = { content: [], places: [], directory: [], fromCache: false };

export function SearchScreen({
  onOpen,
  onOpenGeo,
}: {
  onOpen: OpenContent;
  onOpenGeo: (view: GeoView) => void;
}) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [term, setTerm] = useState('');
  const [result, setResult] = useState<UnifiedSearchResult>(EMPTY);
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle');
  const [refreshing, setRefreshing] = useState(false);
  const { start, isCurrent } = useLatestRequest();

  const load = useCallback(
    (query: string, opts: { silent?: boolean } = {}) => {
      const clean = query.trim();
      if (!clean) {
        setResult(EMPTY);
        setState('idle');
        setRefreshing(false);
        return;
      }
      const requestId = start();
      if (!opts.silent) setState('loading');
      unifiedSearch(clean)
        .then((next) => {
          if (!isCurrent(requestId)) return;
          setResult(next);
          setState('idle');
        })
        .catch(() => {
          if (!isCurrent(requestId)) return;
          setState('error');
        })
        .finally(() => {
          if (!isCurrent(requestId)) return;
          setRefreshing(false);
        });
    },
    [start, isCurrent],
  );

  useRefreshOnReconnect(
    useCallback(() => {
      if (term.trim()) load(term, { silent: true });
    }, [load, term]),
  );

  const updateTerm = useCallback((value: string) => {
    setTerm(value);
    if (!value.trim()) {
      setResult(EMPTY);
      setState('idle');
    }
  }, []);

  useEffect(() => {
    const clean = term.trim();
    if (!clean) return;
    const timer = setTimeout(() => load(clean), 350);
    return () => clearTimeout(timer);
  }, [term, load]);

  const onRefresh = useCallback(() => {
    if (!term.trim()) return;
    setRefreshing(true);
    load(term, { silent: true });
  }, [load, term]);

  const openDirectory = (item: ContentItem) => {
    getDirectoryEntry(item.id).then((full) => onOpen(full)).catch(() => onOpen(item));
  };

  const openPlace = (place: UnifiedGeoHit) => {
    onOpenGeo({ kind: place.kind, id: place.id });
  };

  const hasAny = result.content.length > 0 || result.places.length > 0 || result.directory.length > 0;
  const showEmpty = state === 'idle' && Boolean(term.trim()) && !hasAny;

  const listHeader = (
    <View>
      <Text style={styles.title}>{t('search')}</Text>
      {result.fromCache ? (
        <View style={styles.offline}>
          <Text style={styles.offlineText}>{t('offline')}</Text>
        </View>
      ) : null}
      <View style={styles.inputWrap}>
        <Icon name="search" size={18} color={colors.inkSoft} />
        <TextInput
          accessibilityLabel={t('search')}
          value={term}
          onChangeText={updateTerm}
          placeholder={t('searchPlaceholder')}
          placeholderTextColor={colors.inkSoft}
          style={styles.input}
          autoCapitalize="none"
          returnKeyType="search"
          onSubmitEditing={() => load(term)}
        />
        {term ? (
          <Pressable accessibilityRole="button" accessibilityLabel={t('close')} hitSlop={12} onPress={() => updateTerm('')}>
            <Icon name="close" size={16} color={colors.inkSoft} />
          </Pressable>
        ) : null}
      </View>
      {state === 'loading' ? <LoadingState /> : null}
      {state === 'error' ? <ErrorState onRetry={() => load(term)} /> : null}
      {showEmpty ? <EmptyState message={t('noResults')} /> : null}

      {result.places.length > 0 ? (
        <View style={styles.section}>
          <SectionHeader>{t('searchPlaces')}</SectionHeader>
          {result.places.map((place) => (
            <Pressable
              key={`${place.kind}-${place.id}`}
              accessibilityRole="button"
              accessibilityLabel={place.title}
              onPress={() => openPlace(place)}
              style={styles.placeRow}
            >
              <View style={styles.placeIcon}>
                <Icon name="pin" size={16} color={colors.terreStrong} />
              </View>
              <View style={styles.placeBody}>
                <Text style={styles.placeTitle}>{place.title}</Text>
                <Text style={styles.placeMeta}>
                  {place.kind === 'region' ? t('region') : place.kind === 'department' ? t('department') : t('commune')}
                  {place.subtitle ? ` · ${place.subtitle}` : ''}
                </Text>
              </View>
              <Icon name="chevronRight" size={16} color={colors.inkSoft} />
            </Pressable>
          ))}
        </View>
      ) : null}

      {result.directory.length > 0 ? (
        <View style={styles.section}>
          <SectionHeader>{t('directory')}</SectionHeader>
          {result.directory.map((item) => (
            <ContentCard key={`dir-${item.id}`} item={item} size="compact" onPress={openDirectory} />
          ))}
        </View>
      ) : null}

      {result.content.length > 0 ? <SectionHeader>{t('searchArticles')}</SectionHeader> : null}
    </View>
  );

  return (
    <FlatList
      data={result.content}
      keyExtractor={(item) => `${item.type}-${item.id}`}
      renderItem={({ item, index }) => (
        <ContentCard item={item} onPress={() => onOpen(item, { items: result.content, index })} />
      )}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={listHeader}
      ListFooterComponent={<View style={styles.footerSpace} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.terreStrong} colors={[colors.terreStrong]} />
      }
    />
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    content: { padding: spacing.md, paddingBottom: 120, backgroundColor: colors.bg },
    title: { color: colors.ink, fontSize: type.display - 6, fontFamily: fonts.displayBold, marginTop: spacing.md, marginBottom: spacing.md },
    offline: { backgroundColor: colors.surfaceSoft, borderRadius: radii.sm, padding: spacing.sm, marginBottom: spacing.md },
    offlineText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 12 },
    inputWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      backgroundColor: colors.surface,
      borderRadius: radii.pill,
      height: 52,
      paddingHorizontal: spacing.md,
      marginBottom: spacing.lg,
    },
    input: { flex: 1, color: colors.ink, fontFamily: fonts.body, fontSize: 16 },
    section: { marginBottom: spacing.md },
    placeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      backgroundColor: colors.surface,
      borderRadius: radii.lg,
      padding: spacing.md,
      marginBottom: spacing.sm,
    },
    placeIcon: {
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: colors.surfaceSoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    placeBody: { flex: 1 },
    placeTitle: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 15 },
    placeMeta: { color: colors.inkSoft, fontFamily: fonts.body, fontSize: 12, marginTop: 2 },
    footerSpace: { height: 24 },
  });
}
