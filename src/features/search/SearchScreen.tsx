import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, RefreshControl, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ContentCard } from '../../components/ContentCard';
import { EmptyState, ErrorState, LoadingState } from '../../components/ContentStates';
import { Icon } from '../../components/icons/Icon';
import { searchContent } from '../../services/contentRepository';
import type { ContentItem } from '../../types/content';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { useI18n } from '../../i18n/I18nProvider';
import { useLatestRequest } from '../../hooks/useLatestRequest';

type DetailContext = { items: ContentItem[]; index: number };
type OpenContent = (item: ContentItem, context?: DetailContext) => void;

export function SearchScreen({ onOpen }: { onOpen: OpenContent }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [term, setTerm] = useState('');
  const [items, setItems] = useState<ContentItem[]>([]);
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle');
  const [cached, setCached] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { start, isCurrent } = useLatestRequest();

  const load = useCallback((query = term, opts: { silent?: boolean } = {}) => {
    if (!query.trim()) return;
    const id = start();
    if (!opts.silent) setState('loading');
    searchContent(query)
      .then((result) => {
        if (!isCurrent(id)) return;
        setItems(result.items);
        setCached(result.fromCache);
        setState('idle');
      })
      .catch(() => { if (isCurrent(id)) setState('error'); })
      .finally(() => { if (isCurrent(id)) setRefreshing(false); });
  }, [term, start, isCurrent]);

  useEffect(() => {
    if (!term.trim()) return;
    const timer = setTimeout(() => load(term), 350);
    return () => clearTimeout(timer);
  }, [term, load]);

  const onRefresh = useCallback(() => {
    if (!term.trim()) return;
    setRefreshing(true);
    load(term, { silent: true });
  }, [load, term]);

  return (
    <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.terreStrong} colors={[colors.terreStrong]} />}>
      <Text style={styles.title}>{t('search')}</Text>
      {cached ? <View style={styles.offline}><Text style={styles.offlineText}>{t('offline')}</Text></View> : null}
      <View style={styles.inputWrap}>
        <Icon name="search" size={18} color={colors.inkSoft} />
        <TextInput accessibilityLabel={t('search')} value={term} onChangeText={setTerm} placeholder={t('searchPlaceholder')} placeholderTextColor={colors.inkSoft} style={styles.input} autoCapitalize="none" returnKeyType="search" onSubmitEditing={() => load()} />
        {term ? <Pressable accessibilityRole="button" accessibilityLabel={t('close')} hitSlop={12} onPress={() => setTerm('')}><Icon name="close" size={16} color={colors.inkSoft} /></Pressable> : null}
      </View>
      {state === 'loading' ? <LoadingState /> : null}
      {state === 'error' ? <ErrorState onRetry={() => load()} /> : null}
      {state === 'idle' && term && !items.length ? <EmptyState message={t('noResults')} /> : null}
      {items.map((item, index) => <ContentCard key={`${item.type}-${item.id}`} item={item} onPress={() => onOpen(item, { items, index })} />)}
    </ScrollView>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    content: { padding: spacing.md, paddingBottom: 120, backgroundColor: colors.bg },
    title: { color: colors.ink, fontSize: type.display - 6, fontFamily: fonts.displayBold, marginTop: spacing.md, marginBottom: spacing.md },
    offline: { backgroundColor: colors.surfaceSoft, borderRadius: radii.sm, padding: spacing.sm, marginBottom: spacing.md },
    offlineText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 12 },
    inputWrap: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, backgroundColor: colors.surface, borderRadius: radii.pill, height: 52, paddingHorizontal: spacing.md, marginBottom: spacing.lg },
    input: { flex: 1, color: colors.ink, fontFamily: fonts.body, fontSize: 16 },
  });
}
