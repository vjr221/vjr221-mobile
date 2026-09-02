import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { ContentCard } from '../../components/ContentCard';
import { EmptyState, ErrorState, LoadingState } from '../../components/ContentStates';
import { Icon } from '../../components/icons/Icon';
import { useI18n } from '../../i18n/I18nProvider';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { getDirectoryCategories, getDirectoryEntries, getDirectoryEntry, type DirectoryCategory } from '../../services/directoryRepository';
import type { ContentItem } from '../../types/content';

type LoadState = 'loading' | 'ready' | 'error';

/**
 * Annuaire national VJR 221 : expérience professionnelle — filtres en chips,
 * recherche en évidence, fiches à deux colonnes visuelles. Réutilise le
 * système de fiches existant plutôt que de dupliquer une seconde UI.
 */
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
  const requestId = useRef(0);

  useEffect(() => {
    let mounted = true;
    getDirectoryCategories()
      .then((result) => { if (mounted) setCategories(result); })
      .catch(() => { if (mounted) setCategories([]); });
    return () => { mounted = false; };
  }, []);

  const load = useCallback((categorie: string | undefined, q: string) => {
    const id = ++requestId.current;
    setState('loading');
    getDirectoryEntries({ categorie, q: q || undefined, perPage: 30 })
      .then((result) => {
        if (id !== requestId.current) return;
        setItems(result.items);
        setCached(result.fromCache);
        setState('ready');
      })
      .catch(() => {
        if (id !== requestId.current) return;
        setState('error');
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => load(activeCategory, term), term ? 350 : 0);
    return () => clearTimeout(timer);
  }, [activeCategory, term, load]);

  const openEntry = (item: ContentItem) => {
    getDirectoryEntry(item.id).then(onOpen).catch(() => onOpen(item));
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('directory')}</Text>
        {(!online || cached) ? <View style={styles.offline}><Text style={styles.offlineText}>{t('offline')}</Text></View> : null}
        <View style={styles.inputWrap}>
          <Icon name="search" size={17} color={colors.inkSoft} />
          <TextInput accessibilityLabel={t('search')} value={term} onChangeText={setTerm} placeholder={t('searchPlaceholder')} placeholderTextColor={colors.inkSoft} style={styles.input} autoCapitalize="none" />
        </View>
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
              hitSlop={8}
              onPress={() => setActiveCategory(item.slug)}
              style={[styles.chip, activeCategory === item.slug && styles.chipActive]}
            >
              <Text style={[styles.chipText, activeCategory === item.slug && styles.chipTextActive]}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <ContentCard item={item} onPress={openEntry} />}
        ListEmptyComponent={
          state === 'loading' ? <LoadingState /> :
          state === 'error' ? <ErrorState onRetry={() => load(activeCategory, term)} /> :
          <EmptyState message={t('noResults')} />
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
    inputWrap: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, backgroundColor: colors.surface, borderRadius: radii.pill, height: 48, paddingHorizontal: spacing.md, marginTop: spacing.md },
    input: { flex: 1, color: colors.ink, fontFamily: fonts.body, fontSize: 15 },
    chips: { gap: spacing.xs, paddingVertical: spacing.md },
    chip: { backgroundColor: colors.surface, borderRadius: radii.pill, paddingHorizontal: spacing.md, paddingVertical: 9 },
    chipActive: { backgroundColor: colors.savane },
    chipText: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 13 },
    chipTextActive: { color: colors.onSavane },
    list: { padding: spacing.md, paddingTop: 0, paddingBottom: 120 },
  });
}
