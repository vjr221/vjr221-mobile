import { useEffect, useMemo, useState } from 'react';
import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFavorites } from '../../stores/FavoritesProvider';
import type { ContentItem } from '../../types/content';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { useI18n } from '../../i18n/I18nProvider';
import { shareFiche } from '../../services/shareService';
import { getRelatedContent } from '../../services/relatedContent';
import { LocationPreview } from '../../components/LocationPreview';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';
import { Icon } from '../../components/icons/Icon';

type DetailNavigationContext = { items: ContentItem[]; index: number };

type Props = {
  item: ContentItem;
  onBack: () => void;
  navigationContext?: DetailNavigationContext;
  onNavigate?: (item: ContentItem) => void;
};

/** Fiche encyclopédique premium : contenu, actions, navigation séquentielle et suggestions réelles. */
export function ContentDetailScreen({ item, onBack, navigationContext, onNavigate }: Props) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const { has, toggle } = useFavorites();
  const { practical } = item;
  const coordinates = practical?.coordinates ? { lat: practical.coordinates.latitude, lng: practical.coordinates.longitude } : null;
  const saved = has(item.id);
  const [related, setRelated] = useState<ContentItem[]>([]);

  useEffect(() => {
    let mounted = true;
    getRelatedContent(item).then((items) => mounted && setRelated(items)).catch(() => mounted && setRelated([]));
    return () => { mounted = false; };
  }, [item.id]);

  const share = () => shareFiche({ title: item.title, summary: item.excerpt, url: item.url ?? item.title });
  const call = () => practical?.phone && Linking.openURL(`tel:${practical.phone.replace(/\s+/g, '')}`);
  const email = () => practical?.email && Linking.openURL(`mailto:${practical.email}`);
  const canPrevious = !!navigationContext && navigationContext.index > 0;
  const canNext = !!navigationContext && navigationContext.index < navigationContext.items.length - 1;
  const previous = () => canPrevious && onNavigate?.(navigationContext!.items[navigationContext!.index - 1]);
  const next = () => canNext && onNavigate?.(navigationContext!.items[navigationContext!.index + 1]);

  const practicalRows: { icon: 'phone' | 'pin' | 'clock' | 'mail'; label: string; value: string; onPress?: () => void }[] = [];
  if (practical?.phone) practicalRows.push({ icon: 'phone', label: t('call'), value: practical.phone, onPress: call });
  if (practical?.address) practicalRows.push({ icon: 'pin', label: t('location'), value: practical.address });
  if (practical?.hours) practicalRows.push({ icon: 'clock', label: t('hours'), value: practical.hours });
  if (practical?.email) practicalRows.push({ icon: 'mail', label: t('email'), value: practical.email, onPress: email });

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {item.imageUrl ? <Image accessibilityIgnoresInvertColors source={{ uri: item.imageUrl }} style={styles.hero} /> : <View style={[styles.hero, styles.heroFallback]}><Icon name="image" size={38} color={colors.line} /></View>}
      <View style={styles.body}>
        <Pressable onPress={onBack} accessibilityRole="button" style={styles.backRow}>
          <Icon name="chevronLeft" size={16} color={colors.terreStrong} />
          <Text style={styles.back}>{t('back')}</Text>
        </Pressable>

        <Badge tone="terre">{item.type.toUpperCase()}</Badge>
        <Text style={styles.title}>{item.title}</Text>
        {item.content || item.excerpt ? <Text style={styles.copy}>{item.content ?? item.excerpt}</Text> : null}

        <View style={styles.actions}>
          <Button variant="primary" onPress={() => toggle(item)} style={styles.primaryAction}>{saved ? t('saved') : t('save')}</Button>
          <Button variant="secondary" onPress={share}>{t('share')}</Button>
        </View>

        {(canPrevious || canNext) ? (
          <View style={styles.sequence}>
            <Button variant="secondary" onPress={previous} disabled={!canPrevious} style={styles.sequenceButton}>{t('previous')}</Button>
            <Button variant="secondary" onPress={next} disabled={!canNext} style={styles.sequenceButton}>{t('next')}</Button>
          </View>
        ) : null}

        {practicalRows.length ? (
          <View style={styles.practicalCard}>
            {practicalRows.map((row, index) => (
              <Pressable key={`${row.icon}-${row.value}`} accessibilityRole={row.onPress ? 'button' : undefined} onPress={row.onPress} disabled={!row.onPress} style={[styles.practicalRow, index === practicalRows.length - 1 && styles.practicalRowLast]}>
                <Icon name={row.icon} size={16} color={colors.inkSoft} />
                <Text style={styles.practicalLabel}>{row.label}</Text>
                <Text numberOfLines={1} style={styles.practicalValue}>{row.value}</Text>
              </Pressable>
            ))}
          </View>
        ) : null}

        <LocationPreview coordinates={coordinates} label={item.title} />

        {practical?.website ? <Pressable accessibilityRole="link" style={styles.link} onPress={() => Linking.openURL(practical.website!)}><Text style={styles.linkText}>{t('website')}</Text><Icon name="chevronRight" size={13} color={colors.terreStrong} /></Pressable> : item.url ? <Pressable accessibilityRole="link" style={styles.link} onPress={() => Linking.openURL(item.url!)}><Text style={styles.linkText}>{t('website')}</Text><Icon name="chevronRight" size={13} color={colors.terreStrong} /></Pressable> : null}

        {related.length ? (
          <View style={styles.relatedBlock}>
            <Text style={styles.relatedTitle}>{t('relatedContent')}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.relatedList}>
              {related.map((candidate) => (
                <Pressable key={candidate.id} onPress={() => onNavigate ? onNavigate(candidate) : null} accessibilityRole="button" style={styles.relatedCard}>
                  {candidate.imageUrl ? <Image accessibilityIgnoresInvertColors source={{ uri: candidate.imageUrl }} style={styles.relatedImage} /> : <View style={[styles.relatedImage, styles.relatedFallback]}><Icon name="image" size={22} color={colors.line} /></View>}
                  <Text numberOfLines={2} style={styles.relatedCardTitle}>{candidate.title}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    content: { paddingBottom: 60, backgroundColor: colors.bg },
    hero: { width: '100%', height: 260, backgroundColor: colors.surfaceSoft },
    heroFallback: { alignItems: 'center', justifyContent: 'center' },
    body: { padding: spacing.md },
    backRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginVertical: spacing.md, alignSelf: 'flex-start' },
    back: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 14 },
    title: { color: colors.ink, fontSize: type.display - 4, fontFamily: fonts.displayBold, marginTop: spacing.sm, lineHeight: 36 },
    copy: { color: colors.ink, lineHeight: 26, fontSize: type.bodyLg, marginTop: spacing.lg, fontFamily: fonts.body },
    actions: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.xl, flexWrap: 'wrap' },
    primaryAction: { flexGrow: 1 },
    sequence: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.md },
    sequenceButton: { flex: 1 },
    practicalCard: { backgroundColor: colors.surface, borderRadius: radii.lg, marginTop: spacing.lg, paddingHorizontal: spacing.md },
    practicalRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.line },
    practicalRowLast: { borderBottomWidth: 0 },
    practicalLabel: { color: colors.inkSoft, fontFamily: fonts.bodySemiBold, fontSize: 13, width: 66 },
    practicalValue: { color: colors.ink, fontFamily: fonts.bodyMedium, fontSize: 14, flex: 1, textAlign: 'right' },
    link: { marginTop: spacing.lg, flexDirection: 'row', alignItems: 'center', gap: 4, alignSelf: 'flex-start' },
    linkText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 14 },
    relatedBlock: { marginTop: spacing.xl },
    relatedTitle: { color: colors.ink, fontFamily: fonts.displayBold, fontSize: 20, marginBottom: spacing.sm },
    relatedList: { gap: spacing.sm, paddingRight: spacing.md },
    relatedCard: { width: 180, backgroundColor: colors.surface, borderRadius: radii.lg, overflow: 'hidden' },
    relatedImage: { width: '100%', height: 100, backgroundColor: colors.surfaceSoft },
    relatedFallback: { alignItems: 'center', justifyContent: 'center' },
    relatedCardTitle: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 14, lineHeight: 19, padding: spacing.sm },
  });
}
