import { useCallback, useState } from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from '../features/home/HomeScreen';
import { ContentDetailScreen } from '../features/home/ContentDetailScreen';
import { ExploreScreen } from '../features/explore/ExploreScreen';
import { AccountScreen } from '../features/account/AccountScreen';
import { NotificationPreferencesScreen } from '../features/account/NotificationPreferencesScreen';
import type { GeoView } from '../features/explore/GeoExplorer';
import { SearchScreen } from '../features/search/SearchScreen';
import { useI18n } from '../i18n/I18nProvider';
import { useFavorites } from '../stores/FavoritesProvider';
import { colors, radii, spacing } from '../theme/tokens';
import type { ContentItem, ContentType } from '../types/content';
import { getContentDetail } from '../services/contentRepository';
import { getDirectoryEntry } from '../services/directoryRepository';
import { fallbackWebUrl, type DeepLinkDestination } from '../services/deepLinks';
import { useDeepLinkRouter } from '../hooks/useDeepLinkRouter';

type Tab = 'home' | 'explore' | 'search' | 'favorites' | 'more';

type ExploreSeed = { collection: ContentType | null; geoView?: GeoView; directoryCategory?: string };

export function AppNavigator() {
  const { locale, setLocale, t } = useI18n();
  const { items } = useFavorites();
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
      <View accessibilityRole="tablist" style={styles.tabs}>
        {tabs.map((key) => (
          <Pressable accessibilityRole="tab" accessibilityState={{ selected: tab === key }} key={key} onPress={() => setTab(key)} style={styles.tab}>
            <Text style={[styles.tabText, tab === key && styles.tabTextActive]}>{t(key)}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function FavoritesScreen({ items, onOpen }: { items: ContentItem[]; onOpen: (item: ContentItem) => void }) {
  const { t } = useI18n();
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.pageTitle}>{t('favorites')}</Text>
      {items.length ? (
        items.map((item) => (
          <Pressable key={item.id} onPress={() => onOpen(item)} style={styles.favorite}>
            <Text style={styles.favoriteTitle}>{item.title}</Text>
            <Text style={styles.favoriteType}>{item.type}</Text>
          </Pressable>
        ))
      ) : (
        <Text style={styles.message}>Aucun contenu enregistré pour le moment.</Text>
      )}
    </ScrollView>
  );
}

function MoreScreen({ locale, onLocale }: { locale: 'fr' | 'wo'; onLocale: (locale: 'fr' | 'wo') => void }) {
  const { t } = useI18n();
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.pageTitle}>{t('more')}</Text>
      <Text style={styles.sectionTitle}>{t('language')}</Text>
      {(['fr', 'wo'] as const).map((value) => (
        <Pressable key={value} onPress={() => onLocale(value)} style={[styles.option, locale === value && styles.optionActive]}>
          <Text style={styles.optionText}>{value === 'fr' ? t('french') : t('wolof')}</Text>
          <Text>{locale === value ? '✓' : ''}</Text>
        </Pressable>
      ))}
      <NotificationPreferencesScreen />
      <AccountScreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  tabs: { flexDirection: 'row', backgroundColor: colors.card, borderTopColor: colors.border, borderTopWidth: 1, paddingVertical: 10 },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 4 },
  tabText: { fontSize: 11, color: colors.muted, fontWeight: '600' },
  tabTextActive: { color: colors.primary, fontWeight: '800' },
  page: { padding: spacing.md, paddingBottom: 100, backgroundColor: colors.surface, flexGrow: 1 },
  pageTitle: { color: colors.ink, fontSize: 30, fontWeight: '800', marginTop: spacing.md, marginBottom: spacing.lg },
  message: { color: colors.muted },
  favorite: { backgroundColor: colors.card, padding: spacing.md, borderRadius: radii.md, marginBottom: spacing.sm },
  favoriteTitle: { color: colors.ink, fontWeight: '700', fontSize: 16 },
  favoriteType: { color: colors.primary, marginTop: 4, textTransform: 'uppercase', fontSize: 11 },
  sectionTitle: { color: colors.muted, fontWeight: '700', marginBottom: spacing.sm },
  option: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.card, borderRadius: radii.md, padding: spacing.md, marginBottom: spacing.sm, borderWidth: 1, borderColor: colors.border },
  optionActive: { borderColor: colors.primary, backgroundColor: colors.primarySoft },
  optionText: { color: colors.ink, fontWeight: '700' },
});
