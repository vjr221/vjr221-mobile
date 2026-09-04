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
import type { DetailNavigationContext } from '../../app/AppNavigator';

/** Fiche éditoriale premium : lecture, actions, navigation contextuelle et contenus associés. */
export function ContentDetailScreen({
  item,
  onBack,
  onOpen,
  navigationContext,
  onNavigate,
}: {
  item: ContentItem;
  onBack: () => void;
  onOpen?: (item: ContentItem) => void;
  navigationContext?: DetailNavigationContext;
  onNavigate?: (item: ContentItem, context: DetailNavigationContext) => void;
}) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const { has, toggle } = useFavorites();
  const itemKey = `${item.id}:${item.type}`;
  const [relatedKey, setRelatedKey] = useState(itemKey);
  const [related, setRelated] = useState<ContentItem[]>([]);
  // Réinitialisation pendant le rendu (pas dans un effet) quand la fiche change :
  // évite un rendu intermédiaire avec les "contenus associés" de la fiche précédente.
  if (relatedKey !== itemKey) {
    setRelatedKey(itemKey);
    setRelated([]);
  }
  const { practical } = item;
  const coordinates = practical?.coordinates ? { lat: practical.coordinates.latitude, lng: practical.coordinates.longitude } : null;
  const saved = has(item.id);
  const navIndex = navigationContext?.index ?? -1;
  const navItems = navigationContext?.items ?? [];
  const canPrevious = navIndex > 0;
  const canNext = navIndex >= 0 && navIndex < navItems.length - 1;

  useEffect(() => {
    let active = true;
    getRelatedContent(item)
      .then((items) => active && setRelated(items))
      .catch(() => active && setRelated([]));
    return () => {
      active = false;
    };
    // Volontaire : seuls id/type déterminent le contenu associé, éviter un
    // refetch sur chaque changement de référence de `item`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id, item.type]);

  const share = () => shareFiche({ title: item.title, summary: item.excerpt, url: item.url ?? item.title });
  const call = () => practical?.phone && Linking.openURL(`tel:${practical.phone.replace(/\s+/g, '')}`);
  const email = () => practical?.email && Linking.openURL(`mailto:${practical.email}`);
  const toggleSaved = () => {
    Haptics.impactAsync(saved ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    toggle(item);
  };
  const navigate = (offset: number) => {
    const nextIndex = navIndex + offset;
    const nextItem = navItems[nextIndex];
    if (nextItem && onNavigate) {
      Haptics.selectionAsync().catch(() => {});
      onNavigate(nextItem, { items: navItems, index: nextIndex });
    }
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
          <Image
            accessibilityIgnoresInvertColors
            source={{ uri: item.imageUrl }}
            style={styles.hero}
            contentFit="cover"
            cachePolicy="memory-disk"
            transition={220}
          />
        ) : (
          <View style={[styles.hero, styles.heroFallback]}>
            <Icon name="image" size={38} color={colors.line} />
          </View>
        )}
        <View style={styles.heroShade} pointerEvents="none" />
        <Pressable onPress={onBack} accessibilityRole="button" accessibilityLabel={t('back')} hitSlop={8} style={styles.heroBack}>
          <Icon name="chevronLeft" size={22} color={colors.ink} />
        </Pressable>
      </View>

      <View style={styles.body}>
        <View style={styles.contextRow}>
          <Badge tone="terre">{item.type.toUpperCase()}</Badge>
        </View>
        <Text selectable style={styles.title}>
          {item.title}
        </Text>
        {item.excerpt ? (
          <Text selectable style={styles.lead}>
            {item.excerpt}
          </Text>
        ) : null}

        {navigationContext && navItems.length > 1 ? (
          <View style={styles.navigationCard}>
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ disabled: !canPrevious }}
              disabled={!canPrevious}
              onPress={() => navigate(-1)}
              style={[styles.navButton, !canPrevious && styles.navDisabled]}
            >
              <Icon name="chevronLeft" size={17} color={canPrevious ? colors.terreStrong : colors.inkSoft} />
              <Text style={[styles.navText, !canPrevious && styles.navTextDisabled]}>{t('back')}</Text>
            </Pressable>
            <Text style={styles.position}>
              {navIndex + 1} / {navItems.length}
            </Text>
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ disabled: !canNext }}
              disabled={!canNext}
              onPress={() => navigate(1)}
              style={[styles.navButton, !canNext && styles.navDisabled]}
            >
              <Text style={[styles.navText, !canNext && styles.navTextDisabled]}>{t('next')}</Text>
              <Icon name="chevronRight" size={17} color={canNext ? colors.terreStrong : colors.inkSoft} />
            </Pressable>
          </View>
        ) : null}

        {item.content ? (
          <Text selectable style={styles.copy}>
            {item.content}
          </Text>
        ) : null}

        <View style={styles.actions}>
          <Button variant="primary" onPress={toggleSaved} style={styles.primaryAction}>
            {saved ? t('saved') : t('save')}
          </Button>
          <Button variant="secondary" onPress={share}>
            {t('share')}
          </Button>
        </View>

        {practicalRows.length ? (
          <View style={styles.practicalCard}>
            {practicalRows.map((row, index) => (
              <Pressable
                key={`${row.label}-${row.value}`}
                accessibilityRole={row.onPress ? 'button' : undefined}
                accessibilityLabel={`${row.label}: ${row.value}`}
                onPress={row.onPress}
                disabled={!row.onPress}
                style={[styles.practicalRow, index === practicalRows.length - 1 && styles.practicalRowLast]}
              >
                <Icon name={row.icon} size={16} color={colors.inkSoft} />
                <Text style={styles.practicalLabel}>{row.label}</Text>
                <Text selectable numberOfLines={2} style={styles.practicalValue}>
                  {row.value}
                </Text>
              </Pressable>
            ))}
          </View>
        ) : null}

        <LocationPreview coordinates={coordinates} label={item.title} />

        {practical?.website ? (
          <Pressable accessibilityRole="link" accessibilityLabel={t('website')} style={styles.link} onPress={() => Linking.openURL(practical.website!)}>
            <Text style={styles.linkText}>{t('website')}</Text>
            <Icon name="chevronRight" size={13} color={colors.terreStrong} />
          </Pressable>
        ) : item.url ? (
          <Pressable accessibilityRole="link" accessibilityLabel={t('website')} style={styles.link} onPress={() => Linking.openURL(item.url!)}>
            <Text style={styles.linkText}>{t('website')}</Text>
            <Icon name="chevronRight" size={13} color={colors.terreStrong} />
          </Pressable>
        ) : null}

        {related.length ? (
          <View style={styles.relatedSection}>
            <View style={styles.sectionHeadingRow}>
              <Text style={styles.sectionTitle}>{t('related')}</Text>
              <Text style={styles.sectionHint}>{related.length}</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.relatedList}>
              {related.map((candidate) => (
                <Pressable
                  key={`${candidate.type}-${candidate.id}`}
                  accessibilityRole="button"
                  accessibilityLabel={candidate.title}
                  onPress={() => onOpen?.(candidate)}
                  style={({ pressed }) => [styles.relatedCard, pressed && styles.relatedPressed]}
                >
                  {candidate.thumbnailUrl || candidate.imageUrl ? (
                    <Image
                      source={{ uri: candidate.thumbnailUrl ?? candidate.imageUrl }}
                      style={styles.relatedImage}
                      contentFit="cover"
                      cachePolicy="memory-disk"
                      transition={160}
                    />
                  ) : (
                    <View style={[styles.relatedImage, styles.relatedFallback]}>
                      <Icon name="image" size={20} color={colors.line} />
                    </View>
                  )}
                  <Text numberOfLines={2} style={styles.relatedTitle}>
                    {candidate.title}
                  </Text>
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
    content: { paddingBottom: 70, backgroundColor: colors.bg },
    heroWrap: { position: 'relative' },
    hero: { width: '100%', height: 290, backgroundColor: colors.surfaceSoft },
    heroFallback: { alignItems: 'center', justifyContent: 'center' },
    heroShade: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 72, backgroundColor: 'rgba(0,0,0,0.10)' },
    heroBack: {
      position: 'absolute',
      top: 18,
      left: 16,
      width: 46,
      height: 46,
      borderRadius: 23,
      backgroundColor: colors.surface,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.97,
    },
    body: { paddingHorizontal: spacing.md, paddingTop: spacing.md },
    contextRow: { marginBottom: spacing.xs },
    title: { color: colors.ink, fontSize: type.display - 4, fontFamily: fonts.displayBold, marginTop: spacing.xs, lineHeight: 36 },
    lead: { color: colors.inkSoft, lineHeight: 24, fontSize: type.bodyLg, marginTop: spacing.md, fontFamily: fonts.bodyMedium },
    navigationCard: {
      marginTop: spacing.lg,
      padding: spacing.xs,
      minHeight: 52,
      borderRadius: radii.lg,
      backgroundColor: colors.surface,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    navButton: {
      minHeight: 44,
      minWidth: 82,
      paddingHorizontal: spacing.sm,
      borderRadius: radii.md,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 3,
    },
    navDisabled: { opacity: 0.42 },
    navText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 13 },
    navTextDisabled: { color: colors.inkSoft },
    position: { color: colors.inkSoft, fontFamily: fonts.bodySemiBold, fontSize: 12 },
    copy: { color: colors.ink, lineHeight: 27, fontSize: type.bodyLg, marginTop: spacing.lg, fontFamily: fonts.body },
    actions: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.xl, flexWrap: 'wrap' },
    primaryAction: { flexGrow: 1 },
    practicalCard: { backgroundColor: colors.surface, borderRadius: radii.lg, marginTop: spacing.lg, paddingHorizontal: spacing.md },
    practicalRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      paddingVertical: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.line,
      minHeight: 54,
    },
    practicalRowLast: { borderBottomWidth: 0 },
    practicalLabel: { color: colors.inkSoft, fontFamily: fonts.bodySemiBold, fontSize: 13, width: 66 },
    practicalValue: { color: colors.ink, fontFamily: fonts.bodyMedium, fontSize: 14, flex: 1, textAlign: 'right' },
    link: { marginTop: spacing.lg, flexDirection: 'row', alignItems: 'center', gap: 4, alignSelf: 'flex-start', minHeight: 44 },
    linkText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 14 },
    relatedSection: { marginTop: spacing.xxl },
    sectionHeadingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.sm },
    sectionTitle: { color: colors.ink, fontFamily: fonts.displayBold, fontSize: 22 },
    sectionHint: { color: colors.inkSoft, fontFamily: fonts.bodyMedium, fontSize: 12 },
    relatedList: { gap: spacing.sm, paddingVertical: spacing.xs, paddingRight: spacing.md },
    relatedCard: { width: 190, backgroundColor: colors.surface, borderRadius: radii.lg, overflow: 'hidden', paddingBottom: spacing.sm },
    relatedPressed: { opacity: 0.88, transform: [{ scale: 0.985 }] },
    relatedImage: { width: '100%', height: 110, backgroundColor: colors.surfaceSoft },
    relatedFallback: { alignItems: 'center', justifyContent: 'center' },
    relatedTitle: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 14, lineHeight: 19, paddingHorizontal: spacing.sm, paddingTop: spacing.sm },
    relatedType: { color: colors.inkSoft, fontFamily: fonts.bodyMedium, fontSize: 9, letterSpacing: 0.6, paddingHorizontal: spacing.sm, paddingTop: 5 },
  });
}
