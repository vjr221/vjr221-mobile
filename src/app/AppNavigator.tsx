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

export function AppNavigator() {
  const { locale, setLocale, t } = useI18n();
  const { items } = useFavorites();
  const { colors, shadow } = useTheme();
  const styles = useMemo(() => makeStyles(colors, shadow), [colors, shadow]);
  const [tab, setTab] = useState<Tab>('home');
  const [detail, setDetail] = useState<ContentItem | null>(null);
  const [exploreSeed, setExploreSeed] = useState<ExploreSeed>({ collection: null });
  const [exploreSeedVersion, setExploreSeedVersion] = useState(0);

  const open = (item: ContentItem) => setDetail(item);

  const goToExplore = (seed: ExploreSeed) => {
    setDetail(null);
    setExploreSeed(seed);
    setExploreSeedVersion((v) => v + 1);
    setTab('explore');
  };

  // ---- Deep links : une URL vjr221.sn/... ou vjr221://... ouvre directement
  // la bonne destination dans l'app ; si elle n'est pas reconnue, fallback web.
  const handleDestination = useCallback((destination: DeepLinkDestination) => {
    switch (destination.kind) {
      case 'content':
        getContentDetail(destination.id).then(setDetail).catch(() => Linking.openURL(fallbackWebUrl(destination)));
        return;
      case 'directory':
        getDirectoryEntry(destination.id).then(setDetail).catch(() => Linking.openURL(fallbackWebUrl(destination)));
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
        // Pas encore d'écran dédié par catégorie éditoriale : on atterrit sur
        // le menu Explorer plutôt que d'inventer une destination.
        goToExplore({ collection: null });
        return;
      case 'permalink':
        // La quasi-totalité des URLs réellement partagées depuis vjr221.sn
        // n'ont pas d'ID visible (permaliens WordPress classiques) : on
        // résout par slug avant de retomber sur le navigateur si rien ne
        // correspond -- jamais de fiche inventée.
        resolveContentBySlug(destination.slug)
          .then((item) => (item ? setDetail(item) : Linking.openURL(fallbackWebUrl(destination))))
          .catch(() => Linking.openURL(fallbackWebUrl(destination)));
        return;
      case 'home':
        setDetail(null);
        setTab('home');
        return;
      case 'unknown':
      default:
        Linking.openURL(fallbackWebUrl(destination)).catch(() => {});
    }
  }, []);

  useDeepLinkRouter(handleDestination);

  if (detail) return <ContentDetailScreen item={detail} onBack={() => setDetail(null)} />;

  const screen =
    tab === 'home' ? (
      <HomeScreen onOpen={open} onSearch={() => setTab('search')} onExplore={() => goToExplore({ collection: null })} />
    ) : tab === 'explore' ? (
      <ExploreScreen
        key={exploreSeedVersion}
        onOpen={open}
        initialCollection={exploreSeed.collection ?? undefined}
        initialGeoView={exploreSeed.geoView}
        initialDirectoryCategory={exploreSeed.directoryCategory}
      />
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
