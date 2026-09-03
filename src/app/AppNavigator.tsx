import { useCallback, useMemo, useState } from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from '../features/home/HomeScreen';
import { ContentDetailScreen } from '../features/home/ContentDetailScreen';
import { ExploreScreen } from '../features/explore/ExploreScreen';
import { FavoritesScreen } from '../features/favorites/FavoritesScreen';
import { MoreScreen } from '../features/more/MoreScreen';
import type { GeoView } from '../features/explore/GeoExplorer';
import { SearchScreen } from '../features/search/SearchScreen';
import { Icon, type IconName } from '../components/icons/Icon';
import { useI18n } from '../i18n/I18nProvider';
import { useFavorites } from '../stores/FavoritesProvider';
import { useTheme } from '../theme/ThemeProvider';
import { fonts, spacing } from '../theme/tokens';
import type { ContentItem, ContentType } from '../types/content';
import { getContentDetail, resolveContentBySlug } from '../services/contentRepository';
import { getDirectoryEntry } from '../services/directoryRepository';
import { fallbackWebUrl, type DeepLinkDestination } from '../services/deepLinks';
import { useDeepLinkRouter } from '../hooks/useDeepLinkRouter';

type Tab = 'home' | 'explore' | 'search' | 'favorites' | 'more';
const TAB_ICON: Record<Tab, IconName> = { home: 'home', explore: 'compass', search: 'search', favorites: 'heart', more: 'more' };
type ExploreSeed = { collection: ContentType | null; geoView?: GeoView; directoryCategory?: string };

type DetailNavigationContext = { items: ContentItem[]; index: number };

export function AppNavigator() {
  const { locale, setLocale, t } = useI18n();
  const { items } = useFavorites();
  const { colors, shadow } = useTheme();
  const styles = useMemo(() => makeStyles(colors, shadow), [colors, shadow]);
  const [tab, setTab] = useState<Tab>('home');
  const [detailStack, setDetailStack] = useState<ContentItem[]>([]);
  const [detailContext, setDetailContext] = useState<DetailNavigationContext | null>(null);
  const [exploreSeed, setExploreSeed] = useState<ExploreSeed>({ collection: null });
  const [exploreSeedVersion, setExploreSeedVersion] = useState(0);

  const open = useCallback((item: ContentItem, context?: DetailNavigationContext) => {
    setDetailStack((current) => {
      const existing = current.findIndex((entry) => entry.id === item.id);
      return existing >= 0 ? current.slice(0, existing + 1) : [...current, item];
    });
    setDetailContext(context ?? null);
  }, []);

  const closeDetail = useCallback(() => {
    setDetailStack((current) => current.slice(0, -1));
    setDetailContext(null);
  }, []);

  const navigateDetail = useCallback((item: ContentItem) => {
    setDetailStack((current) => current.length ? [...current.slice(0, -1), item] : [item]);
  }, []);

  const goToExplore = useCallback((seed: ExploreSeed) => {
    setDetailStack([]);
    setDetailContext(null);
    setExploreSeed(seed);
    setExploreSeedVersion((v) => v + 1);
    setTab('explore');
  }, []);

  const handleDestination = useCallback((destination: DeepLinkDestination) => {
    switch (destination.kind) {
      case 'content':
        getContentDetail(destination.id).then((item) => open(item)).catch(() => Linking.openURL(fallbackWebUrl(destination)));
        return;
      case 'directory':
        getDirectoryEntry(destination.id).then((item) => open(item)).catch(() => Linking.openURL(fallbackWebUrl(destination)));
        return;
      case 'directory-category':
        goToExplore({ collection: 'directory', directoryCategory: destination.slug || undefined });
        return;
      case 'region':
        goToExplore({ collection: 'regions', geoView: { kind: 'region', id: destination.id } });
        return;
      case 'department':
        goToExplore({ collection: 'regions', geoView: { kind: 'department', id: destination.id } });
        return;
      case 'commune':
        goToExplore({ collection: 'regions', geoView: { kind: 'commune', id: destination.id } });
        return;
      case 'village':
        goToExplore({ collection: 'regions', geoView: { kind: 'village', id: destination.id } });
        return;
      case 'category':
        goToExplore({ collection: null });
        return;
      case 'permalink':
        resolveContentBySlug(destination.slug)
          .then((item) => (item ? open(item) : Linking.openURL(fallbackWebUrl(destination))))
          .catch(() => Linking.openURL(fallbackWebUrl(destination)));
        return;
      case 'home':
        setDetailStack([]);
        setDetailContext(null);
        setTab('home');
        return;
      case 'unknown':
      default:
        Linking.openURL(fallbackWebUrl(destination)).catch(() => {});
    }
  }, [goToExplore, open]);

  useDeepLinkRouter(handleDestination);

  if (detailStack.length) {
    return (
      <ContentDetailScreen
        item={detailStack[detailStack.length - 1]}
        onBack={closeDetail}
        navigationContext={detailContext ?? undefined}
        onNavigate={navigateDetail}
      />
    );
  }

  const screen =
    tab === 'home' ? (
      <HomeScreen onOpen={open} onSearch={() => setTab('search')} onExplore={() => goToExplore({ collection: null })} />
    ) : tab === 'explore' ? (
      <ExploreScreen key={exploreSeedVersion} onOpen={open} initialCollection={exploreSeed.collection ?? undefined} initialGeoView={exploreSeed.geoView} initialDirectoryCategory={exploreSeed.directoryCategory} />
    ) : tab === 'search' ? (
      <SearchScreen onOpen={open} />
    ) : tab === 'favorites' ? (
      <FavoritesScreen items={items} onOpen={open} />
    ) : (
      <MoreScreen locale={locale} onLocale={setLocale} />
    );

  const tabs: Tab[] = ['home', 'explore', 'search', 'favorites', 'more'];
  return (
    <View style={styles.root}>
      {screen}
      <View accessibilityRole="tablist" style={styles.tabBarWrap}>
        <View style={styles.tabs}>
          {tabs.map((key) => {
            const active = tab === key;
            return (
              <Pressable accessibilityRole="tab" accessibilityState={{ selected: active }} accessibilityLabel={t(key)} key={key} onPress={() => setTab(key)} style={styles.tab}>
                <View style={[styles.tabIconWrap, active && styles.tabIconWrapActive]}>
                  <Icon name={key === 'favorites' && items.length > 0 && active ? 'heartFilled' : TAB_ICON[key]} size={20} color={active ? colors.terreStrong : colors.inkSoft} />
                </View>
                <Text style={[styles.tabText, active && styles.tabTextActive]}>{t(key)}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors'], shadow: ReturnType<typeof useTheme>['shadow']) {
  return StyleSheet.create({
    root: { flex: 1, backgroundColor: colors.bg },
    tabBarWrap: { backgroundColor: colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, ...shadow('floating') },
    tabs: { flexDirection: 'row', paddingTop: 10, paddingBottom: 12, paddingHorizontal: spacing.xs },
    tab: { flex: 1, alignItems: 'center', gap: 3 },
    tabIconWrap: { width: 40, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
    tabIconWrapActive: { backgroundColor: colors.surfaceSoft },
    tabText: { fontSize: 10.5, color: colors.inkSoft, fontFamily: fonts.bodyMedium },
    tabTextActive: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold },
  });
}
