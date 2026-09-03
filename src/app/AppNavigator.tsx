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

export function AppNavigator() {
  const { locale, setLocale } = useI18n();
  const styles = useMemo(() => makeStyles(), []);
  const [tab, setTab] = useState<Tab>('home');
  const [detail, setDetail] = useState<ContentItem | null>(null);
  const [exploreSeed, setExploreSeed] = useState<ExploreSeed>({ collection: null });
  const [exploreSeedVersion, setExploreSeedVersion] = useState(0);

  const open = (item: ContentItem) => setDetail(item);
  const closeDetail = useCallback(() => setDetail(null), []);

  const goToExplore = (seed: ExploreSeed) => {
    setDetail(null);
    setExploreSeed(seed);
    setExploreSeedVersion((v) => v + 1);
    setTab('explore');
  };

  // ---- Bouton retour matériel Android (et geste retour) : sans ce gestionnaire,
  // la navigation par onglets "maison" (pas de librairie de routing) n'a aucune
  // notion de pile, et le comportement par défaut du système est de QUITTER
  // L'APP -- que l'on soit sur la fiche d'un contenu ou sur n'importe quel
  // onglet autre que Accueil. On adopte la convention standard des apps à
  // onglets : retour ferme d'abord la fiche ouverte, puis ramène à l'onglet
  // Accueil, et seulement alors laisse le système gérer (quitter l'app).
  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (detail) {
        closeDetail();
        return true;
      }
      if (tab !== 'home') {
        setTab('home');
        return true;
      }
      return false;
    });
    return () => subscription.remove();
  }, [detail, tab, closeDetail]);

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

  if (detail) return <ContentDetailScreen item={detail} onBack={closeDetail} />;

  const screen =
    tab === 'home' ? (
      <HomeScreen onOpen={open} onSearch={() => setTab('search')} onExplore={(collection) => goToExplore({ collection: collection ?? null })} />
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
      <FavoritesScreen onOpen={open} />
    ) : (
      <MoreScreen locale={locale} onLocale={setLocale} />
    );

  return (
    <View style={styles.root}>
      {screen}
      <TabBar tab={tab} onChange={setTab} />
    </View>
  );
}

/**
 * Barre d'onglets isolée dans son propre composant mémoïsé : elle est la
 * SEULE partie de l'app qui lit `useFavorites()` au niveau racine (pour son
 * badge « cœur plein »). En gardant cette lecture hors du corps d'AppNavigator,
 * ajouter/retirer un favori ne re-rend plus tout l'écran actif (Accueil,
 * Explorer...) à chaque appui sur "Favori" -- seule la barre elle-même se
 * met à jour.
 */
const TabBar = memo(function TabBar({ tab, onChange }: { tab: Tab; onChange: (tab: Tab) => void }) {
  const { t } = useI18n();
  const { items } = useFavorites();
  const { colors, shadow } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => makeTabBarStyles(colors, shadow, insets.bottom), [colors, shadow, insets.bottom]);

  return (
    <View accessibilityRole="tablist" style={styles.tabBarWrap}>
      <View style={styles.tabs}>
        {TABS.map((key) => {
          const active = tab === key;
          return (
            <Pressable accessibilityRole="tab" accessibilityState={{ selected: active }} accessibilityLabel={t(key)} key={key} onPress={() => onChange(key)} style={styles.tab}>
              <View style={[styles.tabIconWrap, active && styles.tabIconWrapActive]}>
                <Icon name={key === 'favorites' && items.length > 0 && active ? 'heartFilled' : TAB_ICON[key]} size={20} color={active ? colors.terreStrong : colors.inkSoft} />
              </View>
              <Text style={[styles.tabText, active && styles.tabTextActive]}>{t(key)}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
});

function makeStyles() {
  return StyleSheet.create({
    root: { flex: 1 },
  });
}

function makeTabBarStyles(colors: ReturnType<typeof useTheme>['colors'], shadow: ReturnType<typeof useTheme>['shadow'], insetBottom: number) {
  return StyleSheet.create({
    tabBarWrap: { backgroundColor: colors.surface, borderTopLeftRadius: 22, borderTopRightRadius: 22, ...shadow('floating') },
    // paddingBottom inclut l'inset de sécurité de l'appareil (geste Android /
    // home indicator iOS) : sans lui, les boutons collés au bord bas de
    // l'écran tombent parfois dans la zone que le système réserve à son
    // propre geste et le tap n'atteint jamais l'app. On agrandit la barre
    // plutôt que de décaler les icônes, pour rester visuellement identique
    // sur les appareils qui n'ont pas cette zone (barre de nav 3 boutons).
    tabs: { flexDirection: 'row', paddingTop: 10, paddingBottom: 12 + insetBottom, paddingHorizontal: spacing.xs },
    tab: { flex: 1, alignItems: 'center', gap: 3, minHeight: 44 },
    tabIconWrap: { width: 40, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
    tabIconWrapActive: { backgroundColor: colors.surfaceSoft },
    tabText: { fontSize: 10.5, color: colors.inkSoft, fontFamily: fonts.bodyMedium },
    tabTextActive: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold },
  });
}
