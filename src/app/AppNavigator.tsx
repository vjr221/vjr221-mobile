import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { BackHandler, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeScreen } from '../features/home/HomeScreen';
import { ContentDetailScreen } from '../features/home/ContentDetailScreen';
import { ExploreScreen } from '../features/explore/ExploreScreen';
import { FavoritesScreen } from '../features/favorites/FavoritesScreen';
import { MoreScreen } from '../features/more/MoreScreen';
import type { GeoView } from '../features/explore/GeoExplorer';
import { SearchScreen } from '../features/search/SearchScreen';
import { Icon, type IconName } from '../components/icons/Icon';
import { SlideInScreen } from '../components/SlideInScreen';
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
const TABS: Tab[] = ['home', 'explore', 'search', 'favorites', 'more'];
type ExploreSeed = { collection: ContentType | null; geoView?: GeoView; directoryCategory?: string };
export type DetailNavigationContext = { items: ContentItem[]; index: number };
type OpenContent = (item: ContentItem, context?: DetailNavigationContext) => void;
export function AppNavigator() {
  const { locale, setLocale } = useI18n(); const styles = useMemo(() => makeStyles(), []); const [tab, setTab] = useState<Tab>('home'); const [detailStack, setDetailStack] = useState<ContentItem[]>([]); const [detailContext, setDetailContext] = useState<DetailNavigationContext | null>(null); const [exploreSeed, setExploreSeed] = useState<ExploreSeed>({ collection: null }); const [exploreSeedVersion, setExploreSeedVersion] = useState(0);
  const detail = detailStack[detailStack.length - 1] ?? null;
  const open: OpenContent = useCallback((item, context) => { setDetailContext(context ?? null); setDetailStack((stack) => stack.some((entry) => entry.id === item.id && entry.type === item.type) ? [...stack.slice(0, stack.findIndex((entry) => entry.id === item.id && entry.type === item.type) + 1)] : [...stack, item]); }, []);
  const closeDetail = useCallback(() => { setDetailStack((stack) => stack.slice(0, -1)); setDetailContext(null); }, []);
  const navigateDetail = useCallback((item: ContentItem, context: DetailNavigationContext) => { setDetailStack((stack) => (stack.length ? [...stack.slice(0, -1), item] : [item])); setDetailContext(context); }, []);
  const goToExplore = useCallback((seed: ExploreSeed) => { setDetailStack([]); setDetailContext(null); setExploreSeed(seed); setExploreSeedVersion((v) => v + 1); setTab('explore'); }, []);
  useEffect(() => { const subscription = BackHandler.addEventListener('hardwareBackPress', () => { if (detailStack.length > 0) { setDetailStack((stack) => stack.slice(0, -1)); setDetailContext(null); return true; } if (tab !== 'home') { setTab('home'); return true; } return false; }); return () => subscription.remove(); }, [detailStack.length, tab]);
  const handleDestination = useCallback((destination: DeepLinkDestination) => { switch (destination.kind) { case 'content': getContentDetail(destination.id).then((item) => { setDetailContext(null); setDetailStack([item]); }).catch(() => Linking.openURL(fallbackWebUrl(destination))); return; case 'directory': getDirectoryEntry(destination.id).then((item) => { setDetailContext(null); setDetailStack([item]); }).catch(() => Linking.openURL(fallbackWebUrl(destination))); return; case 'directory-category': goToExplore({ collection: 'directory', directoryCategory: destination.slug || undefined }); return; case 'region': goToExplore({ collection: 'regions', geoView: { kind: 'region', id: destination.id } }); return; case 'department': goToExplore({ collection: 'regions', geoView: { kind: 'department', id: destination.id } }); return; case 'commune': goToExplore({ collection: 'regions', geoView: { kind: 'commune', id: destination.id } }); return; case 'village': goToExplore({ collection: 'regions', geoView: { kind: 'village', id: destination.id } }); return; case 'category': goToExplore({ collection: null }); return; case 'permalink': resolveContentBySlug(destination.slug).then((item) => item ? (setDetailContext(null), setDetailStack([item])) : Linking.openURL(fallbackWebUrl(destination))).catch(() => Linking.openURL(fallbackWebUrl(destination))); return; case 'home': setDetailStack([]); setDetailContext(null); setTab('home'); return; case 'unknown': default: Linking.openURL(fallbackWebUrl(destination)).catch(() => {}); } }, [goToExplore]);
  useDeepLinkRouter(handleDestination);
  if (detail) return <SlideInScreen key={detailStack.length} onDismiss={closeDetail}>{(dismiss) => <ContentDetailScreen item={detail} onBack={dismiss} onOpen={open} navigationContext={detailContext ?? undefined} onNavigate={navigateDetail} />}</SlideInScreen>;
  const screen = tab === 'home' ? <HomeScreen onOpen={open} onSearch={() => setTab('search')} onExplore={(collection) => goToExplore({ collection: collection ?? null })} /> : tab === 'explore' ? <ExploreScreen key={exploreSeedVersion} onOpen={open} initialCollection={exploreSeed.collection ?? undefined} initialGeoView={exploreSeed.geoView} initialDirectoryCategory={exploreSeed.directoryCategory} /> : tab === 'search' ? <SearchScreen onOpen={open} /> : tab === 'favorites' ? <FavoritesScreen onOpen={open} /> : <MoreScreen locale={locale} onLocale={setLocale} />;
  return <View style={styles.root}>{screen}<TabBar tab={tab} onChange={setTab} /></View>;
}
const TabBar = memo(function TabBar({ tab, onChange }: { tab: Tab; onChange: (tab: Tab) => void }) { const { t } = useI18n(); const { items } = useFavorites(); const { colors, shadow } = useTheme(); const insets = useSafeAreaInsets(); const styles = useMemo(() => makeTabBarStyles(colors, shadow, insets.bottom), [colors, shadow, insets.bottom]); return <View accessibilityRole="tablist" style={styles.tabBarWrap}><View style={styles.tabs}>{TABS.map((key) => { const active = tab === key; return <Pressable accessibilityRole="tab" accessibilityState={{ selected: active }} accessibilityLabel={t(key)} key={key} onPress={() => onChange(key)} style={styles.tab}><View style={[styles.tabIconWrap, active && styles.tabIconWrapActive]}><Icon name={key === 'favorites' && items.length > 0 && active ? 'heartFilled' : TAB_ICON[key]} size={20} color={active ? colors.terreStrong : colors.inkSoft} /></View><Text style={[styles.tabText, active && styles.tabTextActive]}>{t(key)}</Text></Pressable>; })}</View></View>; });
function makeStyles() { return StyleSheet.create({ root: { flex: 1 } }); }
function makeTabBarStyles(colors: ReturnType<typeof useTheme>['colors'], shadow: ReturnType<typeof useTheme>['shadow'], insetBottom: number) { return StyleSheet.create({ tabBarWrap: { backgroundColor: colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, ...shadow('floating') }, tabs: { flexDirection: 'row', paddingTop: 10, paddingBottom: 12 + insetBottom, paddingHorizontal: spacing.xs }, tab: { flex: 1, alignItems: 'center', gap: 3, minHeight: 44 }, tabIconWrap: { width: 40, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }, tabIconWrapActive: { backgroundColor: colors.surfaceSoft }, tabText: { fontSize: 10.5, color: colors.inkSoft, fontFamily: fonts.bodyMedium }, tabTextActive: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold } }); }
