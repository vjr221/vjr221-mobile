import { useCallback, useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { ContentCard } from '../../components/ContentCard';
import { EmptyState, ErrorState, LoadingState } from '../../components/ContentStates';
import { useI18n } from '../../i18n/I18nProvider';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { colors, radii, spacing } from '../../theme/tokens';
import { getDirectoryCategories, getDirectoryEntries, type DirectoryCategory } from '../../services/directoryRepository';
import type { ContentItem } from '../../types/content';

type LoadState = 'loading' | 'ready' | 'error';

/**
 * Annuaire national VJR 221 : catégories, recherche, filtres, fiches.
 * Réutilise le système de fiches existant (ContentItem / ContentCard /
 * ContentDetailScreen) plutôt que de dupliquer une seconde UI.
 */
export function DirectoryScreen({ onOpen, initialCategory }: { onOpen: (item: ContentItem) => void; initialCategory?: string }) {
  const { t } = useI18n();
  const online = useOnlineStatus();

  const [categories, setCategories] = useState<DirectoryCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | undefined>(initialCategory);
  const [term, setTerm] = useState('');
  const [items, setItems] = useState<ContentItem[]>([]);
  const [state, setState] = useState<LoadState>('loading');
  const [cached, setCached] = useState(false);

  useEffect(() => {
    getDirectoryCategories().then(setCategories).catch(() => setCategories([]));
  }, []);

  const load = useCallback((categorie: string | undefined, q: string) => {
    setState('loading');
    getDirectoryEntries({ categorie, q: q || undefined, perPage: 30 })
      .then((result) => { setItems(result.items); setCached(result.fromCache); setState('ready'); })
      .catch(() => setState('error'));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => load(activeCategory, term), term ? 350 : 0);
    return () => clearTimeout(timer);
  }, [activeCategory, term, load]);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('directory')}</Text>
        {(!online || cached) ? <View style={styles.offline}><Text style={styles.offlineText}>{t('offline')}</Text></View> : null}
        <TextInput value={term} onChangeText={setTerm} placeholder={t('searchPlaceholder')} placeholderTextColor={colors.muted} style={styles.input} autoCapitalize="none" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[{ id: 0, slug: undefined as string | undefined, name: t('directory'), count: 0 }, ...categories.map((c) => ({ ...c, slug: c.slug as string | undefined }))]}
          keyExtractor={(item) => String(item.slug ?? 'all')}
          contentContainerStyle={styles.chips}
          renderItem={({ item }) => (
            <Pressable onPress={() => setActiveCategory(item.slug)} style={[styles.chip, activeCategory === item.slug && styles.chipActive]}>
              <Text style={[styles.chipText, activeCategory === item.slug && styles.chipTextActive]}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <ContentCard item={item} onPress={onOpen} />}
        ListEmptyComponent={
          state === 'loading' ? <LoadingState /> :
          state === 'error' ? <ErrorState onRetry={() => load(activeCategory, term)} /> :
          <EmptyState message={t('noResults')} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.surface },
  header: { paddingHorizontal: spacing.md, paddingTop: spacing.md },
  title: { color: colors.ink, fontSize: 28, fontWeight: '800' },
  offline: { backgroundColor: colors.sand, borderRadius: radii.sm, padding: spacing.sm, marginTop: spacing.sm },
  offlineText: { color: colors.primaryDark, fontWeight: '600', fontSize: 12 },
  input: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: radii.sm, height: 46, paddingHorizontal: spacing.md, color: colors.ink, marginTop: spacing.md },
  chips: { gap: spacing.xs, paddingVertical: spacing.md },
  chip: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: radii.pill, paddingHorizontal: spacing.md, paddingVertical: 8 },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { color: colors.ink, fontWeight: '600', fontSize: 13 },
  chipTextActive: { color: colors.white },
  list: { padding: spacing.md, paddingTop: 0, paddingBottom: 105 },
});
