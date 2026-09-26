import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Pressable, RefreshControl, StyleSheet, Text, TextInput, View } from 'react-native';
import { ContentCard } from '../../components/ContentCard';
import { DistanceLabel } from '../../components/DistanceLabel';
import { EmptyState, ErrorState, LoadingState } from '../../components/ContentStates';
import { Icon } from '../../components/icons/Icon';
import { useI18n } from '../../i18n/I18nProvider';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { useLatestRequest } from '../../hooks/useLatestRequest';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { getDirectoryCategories, getDirectoryEntries, getDirectoryEntry, type DirectoryCategory } from '../../services/directoryRepository';
import { getUserLocation } from '../../services/locationService';
import { distanceKm, type Coordinates } from '../../services/mapService';
import type { ContentItem } from '../../types/content';

type LoadState = 'loading' | 'ready' | 'error';

export function DirectoryScreen({ onOpen, initialCategory }: { onOpen: (item: ContentItem) => void; initialCategory?: string }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const online = useOnlineStatus();

  const [categories, setCategories] = useState<DirectoryCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | undefined>(initialCategory);
  const [term, setTerm] = useState('');
  const [items, setItems] = useState<ContentItem[]>([]);
  const [state, setState] = useState<LoadState>('loading');
  const [cached, setCached] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [userCoords, setUserCoords] = useState<Coordinates | null>(null);
  const [nearMe, setNearMe] = useState(false);
  const [locating, setLocating] = useState(false);
  const { start, isCurrent } = useLatestRequest();

  useEffect(() => {
    let mounted = true;
    getDirectoryCategories()
      .then((result) => {
        if (mounted) setCategories(result);
      })
      .catch(() => {
        if (mounted) setCategories([]);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const load = useCallback(
    (categorie: string | undefined, q: string, opts: { silent?: boolean } = {}) => {
      const id = start();
      if (!opts.silent) setState('loading');
      getDirectoryEntries({ categorie, q: q || undefined, perPage: 40 })
        .then((result) => {
          if (!isCurrent(id)) return;
          setItems(result.items);
          setCached(result.fromCache);
          setState('ready');
        })
        .catch(() => {
          if (isCurrent(id)) setState('error');
        })
        .finally(() => {
          if (isCurrent(id)) setRefreshing(false);
        });
    },
    [start, isCurrent],
  );

  useEffect(() => {
    const timer = setTimeout(() => load(activeCategory, term), term ? 350 : 0);
    return () => clearTimeout(timer);
  }, [activeCategory, term, load]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    load(activeCategory, term, { silent: true });
  }, [load, activeCategory, term]);

  const selectCategory = (slug: string | undefined) => {
    void import('expo-haptics').then((H) => H.selectionAsync()).catch(() => {});
    setActiveCategory(slug);
  };

  const toggleNearMe = async () => {
    void import('expo-haptics').then((H) => H.selectionAsync()).catch(() => {});
    if (nearMe) {
      setNearMe(false);
      return;
    }
    setLocating(true);
    const result = await getUserLocation();
    setLocating(false);
    if (result.permission === 'granted') {
      setUserCoords({ lat: result.latitude, lng: result.longitude });
      setNearMe(true);
    } else {
      setNearMe(false);
    }
  };

  const displayItems = useMemo(() => {
    if (!nearMe || !userCoords) return items;
    return [...items].sort((a, b) => {
      const ac = a.practical?.coordinates;
      const bc = b.practical?.coordinates;
      const ad = ac ? distanceKm(userCoords, { lat: ac.latitude, lng: ac.longitude }) : Number.POSITIVE_INFINITY;
      const bd = bc ? distanceKm(userCoords, { lat: bc.latitude, lng: bc.longitude }) : Number.POSITIVE_INFINITY;
      return ad - bd;
    });
  }, [items, nearMe, userCoords]);

  const openEntry = (item: ContentItem) => {
    getDirectoryEntry(item.id).then(onOpen).catch(() => onOpen(item));
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('directory')}</Text>
        {!online || cached ? (
          <View style={styles.offline}>
            <Text style={styles.offlineText}>{t('offline')}</Text>
          </View>
        ) : null}
        <View style={styles.inputWrap}>
          <Icon name="search" size={17} color={colors.inkSoft} />
          <TextInput
            accessibilityLabel={t('search')}
            value={term}
            onChangeText={setTerm}
            placeholder={t('searchPlaceholder')}
            placeholderTextColor={colors.inkSoft}
            style={styles.input}
            autoCapitalize="none"
          />
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ selected: nearMe }}
          accessibilityLabel={t('nearMe')}
          onPress={() => void toggleNearMe()}
          style={[styles.nearMe, nearMe && styles.nearMeActive]}
        >
          <Icon name="pin" size={15} color={nearMe ? colors.onSavane : colors.terreStrong} />
          <Text style={[styles.nearMeText, nearMe && styles.nearMeTextActive]}>
            {locating ? t('locating') : t('nearMe')}
          </Text>
        </Pressable>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[{ id: 0, slug: undefined as string | undefined, name: t('directory'), count: 0 }, ...categories.map((c) => ({ ...c, slug: c.slug as string | undefined }))]}
          keyExtractor={(item) => String(item.slug ?? 'all')}
          contentContainerStyle={styles.chips}
          renderItem={({ item }) => (
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected: activeCategory === item.slug }}
              accessibilityLabel={item.name}
              hitSlop={12}
              onPress={() => selectCategory(item.slug)}
              style={[styles.chip, activeCategory === item.slug && styles.chipActive]}
            >
              <Text style={[styles.chipText, activeCategory === item.slug && styles.chipTextActive]}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>
      <FlatList
        data={displayItems}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const coords = item.practical?.coordinates;
          return (
            <View>
              <ContentCard item={item} onPress={openEntry} />
              {nearMe && userCoords && coords ? (
                <View style={styles.distanceWrap}>
                  <DistanceLabel from={userCoords} to={{ lat: coords.latitude, lng: coords.longitude }} />
                </View>
              ) : null}
            </View>
          );
        }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.terreStrong} colors={[colors.terreStrong]} />}
        ListEmptyComponent={
          state === 'loading' ? (
            <LoadingState />
          ) : state === 'error' ? (
            <ErrorState onRetry={() => load(activeCategory, term)} />
          ) : (
            <EmptyState message={t('noResults')} />
          )
        }
      />
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    root: { flex: 1, backgroundColor: colors.bg },
    header: { paddingHorizontal: spacing.md, paddingTop: spacing.md },
    title: { color: colors.ink, fontSize: type.display - 8, fontFamily: fonts.displayBold },
    offline: { backgroundColor: colors.surfaceSoft, borderRadius: radii.sm, padding: spacing.sm, marginTop: spacing.sm },
    offlineText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 12 },
    inputWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      backgroundColor: colors.surface,
      borderRadius: radii.pill,
      height: 48,
      paddingHorizontal: spacing.md,
      marginTop: spacing.md,
    },
    input: { flex: 1, color: colors.ink, fontFamily: fonts.body, fontSize: 15 },
    nearMe: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      gap: 6,
      marginTop: spacing.sm,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: radii.pill,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.line,
    },
    nearMeActive: { backgroundColor: colors.savane, borderColor: colors.savane },
    nearMeText: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 13 },
    nearMeTextActive: { color: colors.onSavane },
    chips: { gap: spacing.xs, paddingVertical: spacing.md },
    chip: { backgroundColor: colors.surface, borderRadius: radii.pill, paddingHorizontal: spacing.md, paddingVertical: 9 },
    chipActive: { backgroundColor: colors.savane },
    chipText: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 13 },
    chipTextActive: { color: colors.onSavane },
    list: { padding: spacing.md, paddingTop: 0, paddingBottom: 120 },
    distanceWrap: { marginTop: -spacing.sm, marginBottom: spacing.md, paddingHorizontal: 4 },
  });
}
