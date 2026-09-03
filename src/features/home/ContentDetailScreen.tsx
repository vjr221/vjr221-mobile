import { useEffect, useMemo, useState } from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import * as Haptics from 'expo-haptics';
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

/** Fiche éditoriale premium avec navigation contextuelle et contenus associés réellement interactifs. */
export function ContentDetailScreen({ item, onBack, onOpen }: { item: ContentItem; onBack: () => void; onOpen?: (item: ContentItem) => void }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const { has, toggle } = useFavorites();
  const [related, setRelated] = useState<ContentItem[]>([]);
  const { practical } = item;
  const coordinates = practical?.coordinates ? { lat: practical.coordinates.latitude, lng: practical.coordinates.longitude } : null;
  const saved = has(item.id);

  useEffect(() => {
    let active = true;
    getRelatedContent(item).then((items) => active && setRelated(items)).catch(() => active && setRelated([]));
    return () => { active = false; };
  }, [item.id, item.type]);

  const share = () => shareFiche({ title: item.title, summary: item.excerpt, url: item.url ?? item.title });
  const call = () => practical?.phone && Linking.openURL(`tel:${practical.phone.replace(/\s+/g, '')}`);
  const email = () => practical?.email && Linking.openURL(`mailto:${practical.email}`);
  const toggleSaved = () => {
    Haptics.impactAsync(saved ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    toggle(item);
  };

  const practicalRows: { icon: 'phone' | 'pin' | 'clock' | 'mail'; label: string; value: string; onPress?: () => void }[] = [];
  if (practical?.phone) practicalRows.push({ icon: 'phone', label: t('call'), value: practical.phone, onPress: call });
  if (practical?.address) practicalRows.push({ icon: 'pin', label: t('location'), value: practical.address });
  if (practical?.hours) practicalRows.push({ icon: 'clock', label: t('hours'), value: practical.hours });
  if (practical?.email) practicalRows.push({ icon: 'mail', label: t('email'), value: practical.email, onPress: email });

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.heroWrap}>
        {item.imageUrl ? (
          <Image accessibilityIgnoresInvertColors source={{ uri: item.imageUrl }} style={styles.hero} contentFit="cover" cachePolicy="memory-disk" transition={200} />
        ) : (
          <View style={[styles.hero, styles.heroFallback]}><Icon name="image" size={38} color={colors.line} /></View>
        )}
        <Pressable onPress={onBack} accessibilityRole="button" accessibilityLabel={t('back')} hitSlop={8} style={styles.heroBack}>
          <Icon name="chevronLeft" size={22} color={colors.ink} />
        </Pressable>
      </View>

      <View style={styles.body}>
        <View style={styles.contextRow}>
          <Badge tone="terre">{item.type.toUpperCase()}</Badge>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        {item.excerpt ? <Text style={styles.lead}>{item.excerpt}</Text> : null}
        {item.content ? <Text style={styles.copy}>{item.content}</Text> : !item.excerpt ? null : null}

        <View style={styles.actions}>
          <Button variant="primary" onPress={toggleSaved} style={styles.primaryAction}>{saved ? t('saved') : t('save')}</Button>
          <Button variant="secondary" onPress={share}>{t('share')}</Button>
        </View>

        {practicalRows.length ? (
          <View style={styles.practicalCard}>
            {practicalRows.map((row, index) => (
              <Pressable key={row.label} accessibilityRole={row.onPress ? 'button' : undefined} accessibilityLabel={`${row.label}: ${row.value}`} onPress={row.onPress} disabled={!row.onPress} style={[styles.practicalRow, index === practicalRows.length - 1 && styles.practicalRowLast]}>
                <Icon name={row.icon} size={16} color={colors.inkSoft} />
                <Text style={styles.practicalLabel}>{row.label}</Text>
                <Text numberOfLines={1} style={styles.practicalValue}>{row.value}</Text>
              </Pressable>
            ))}
          </View>
        ) : null}

        <LocationPreview coordinates={coordinates} label={item.title} />

        {practical?.website ? (
          <Pressable accessibilityRole="link" accessibilityLabel={t('website')} style={styles.link} onPress={() => Linking.openURL(practical.website!)}>
            <Text style={styles.linkText}>{t('website')}</Text><Icon name="chevronRight" size={13} color={colors.terreStrong} />
          </Pressable>
        ) : item.url ? (
          <Pressable accessibilityRole="link" accessibilityLabel={t('website')} style={styles.link} onPress={() => Linking.openURL(item.url!)}>
            <Text style={styles.linkText}>{t('website')}</Text><Icon name="chevronRight" size={13} color={colors.terreStrong} />
          </Pressable>
        ) : null}

        {related.length ? (
          <View style={styles.relatedSection}>
            <Text style={styles.sectionTitle}>{t('related')}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.relatedList}>
              {related.map((candidate) => (
                <Pressable key={`${candidate.type}-${candidate.id}`} accessibilityRole="button" accessibilityLabel={candidate.title} onPress={() => onOpen?.(candidate)} style={styles.relatedCard}>
                  {candidate.thumbnailUrl || candidate.imageUrl ? <Image source={{ uri: candidate.thumbnailUrl ?? candidate.imageUrl }} style={styles.relatedImage} contentFit="cover" cachePolicy="memory-disk" /> : <View style={[styles.relatedImage, styles.relatedFallback]}><Icon name="image" size={20} color={colors.line} /></View>}
                  <Text numberOfLines={2} style={styles.relatedTitle}>{candidate.title}</Text>
                  <Text style={styles.relatedType}>{candidate.type.toUpperCase()}</Text>
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
    heroWrap: { position: 'relative' },
    hero: { width: '100%', height: 280, backgroundColor: colors.surfaceSoft },
    heroFallback: { alignItems: 'center', justifyContent: 'center' },
    heroBack: { position: 'absolute', top: 18, left: 16, width: 44, height: 44, borderRadius: 22, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center', opacity: 0.96 },
    body: { padding: spacing.md },
    contextRow: { marginTop: spacing.sm },
    title: { color: colors.ink, fontSize: type.display - 4, fontFamily: fonts.displayBold, marginTop: spacing.sm, lineHeight: 36 },
    lead: { color: colors.inkSoft, lineHeight: 24, fontSize: type.bodyLg, marginTop: spacing.md, fontFamily: fonts.bodyMedium },
    copy: { color: colors.ink, lineHeight: 26, fontSize: type.bodyLg, marginTop: spacing.lg, fontFamily: fonts.body },
    actions: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.xl, flexWrap: 'wrap' },
    primaryAction: { flexGrow: 1 },
    practicalCard: { backgroundColor: colors.surface, borderRadius: radii.lg, marginTop: spacing.lg, paddingHorizontal: spacing.md },
    practicalRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.line, minHeight: 52 },
    practicalRowLast: { borderBottomWidth: 0 },
    practicalLabel: { color: colors.inkSoft, fontFamily: fonts.bodySemiBold, fontSize: 13, width: 66 },
    practicalValue: { color: colors.ink, fontFamily: fonts.bodyMedium, fontSize: 14, flex: 1, textAlign: 'right' },
    link: { marginTop: spacing.lg, flexDirection: 'row', alignItems: 'center', gap: 4, alignSelf: 'flex-start', minHeight: 44 },
    linkText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 14 },
    relatedSection: { marginTop: spacing.xxl },
    sectionTitle: { color: colors.ink, fontFamily: fonts.displayBold, fontSize: 22, marginBottom: spacing.sm },
    relatedList: { gap: spacing.sm, paddingVertical: spacing.xs, paddingRight: spacing.md },
    relatedCard: { width: 190, backgroundColor: colors.surface, borderRadius: radii.lg, overflow: 'hidden', paddingBottom: spacing.sm },
    relatedImage: { width: '100%', height: 110, backgroundColor: colors.surfaceSoft },
    relatedFallback: { alignItems: 'center', justifyContent: 'center' },
    relatedTitle: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 14, lineHeight: 19, paddingHorizontal: spacing.sm, paddingTop: spacing.sm },
    relatedType: { color: colors.inkSoft, fontFamily: fonts.bodyMedium, fontSize: 9, letterSpacing: 0.6, paddingHorizontal: spacing.sm, paddingTop: 5 },
  });
}
