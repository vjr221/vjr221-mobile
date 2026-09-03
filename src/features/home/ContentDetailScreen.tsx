import { useMemo } from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import * as Haptics from 'expo-haptics';
import { useFavorites } from '../../stores/FavoritesProvider';
import type { ContentItem } from '../../types/content';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { useI18n } from '../../i18n/I18nProvider';
import { shareFiche } from '../../services/shareService';
import { LocationPreview } from '../../components/LocationPreview';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';
import { Icon } from '../../components/icons/Icon';

/** Fiche de contenu = véritable fiche encyclopédique premium : image en pleine largeur, typographie éditoriale, actions pratiques groupées. */
export function ContentDetailScreen({ item, onBack }: { item: ContentItem; onBack: () => void }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const { has, toggle } = useFavorites();
  const { practical } = item;
  const coordinates = practical?.coordinates ? { lat: practical.coordinates.latitude, lng: practical.coordinates.longitude } : null;
  const saved = has(item.id);

  const share = () => shareFiche({ title: item.title, summary: item.excerpt, url: item.url ?? item.title });
  const call = () => practical?.phone && Linking.openURL(`tel:${practical.phone.replace(/\s+/g, '')}`);
  const email = () => practical?.email && Linking.openURL(`mailto:${practical.email}`);
  const toggleSaved = () => {
    Haptics.impactAsync(saved ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
    toggle(item);
  };

  // `label` est le texte déjà traduit (sortie de `t(...)`), pas une clé : `string` est le bon type ici.
  const practicalRows: { icon: 'phone' | 'pin' | 'clock' | 'mail'; label: string; value: string; onPress?: () => void }[] = [];
  if (practical?.phone) practicalRows.push({ icon: 'phone', label: t('call'), value: practical.phone, onPress: call });
  if (practical?.address) practicalRows.push({ icon: 'pin', label: t('location'), value: practical.address });
  if (practical?.hours) practicalRows.push({ icon: 'clock', label: t('hours'), value: practical.hours });
  if (practical?.email) practicalRows.push({ icon: 'mail', label: t('email'), value: practical.email, onPress: email });

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {item.imageUrl ? (
        <Image accessibilityIgnoresInvertColors source={{ uri: item.imageUrl }} style={styles.hero} contentFit="cover" cachePolicy="memory-disk" transition={200} />
      ) : (
        <View style={[styles.hero, styles.heroFallback]}>
          <Icon name="image" size={38} color={colors.line} />
        </View>
      )}

      <View style={styles.body}>
        <Pressable onPress={onBack} accessibilityRole="button" style={styles.backRow}>
          <Icon name="chevronLeft" size={16} color={colors.terreStrong} />
          <Text style={styles.back}>{t('home')}</Text>
        </Pressable>

        <Badge tone="terre">{item.type.toUpperCase()}</Badge>
        <Text style={styles.title}>{item.title}</Text>
        {item.content || item.excerpt ? <Text style={styles.copy}>{item.content ?? item.excerpt}</Text> : null}

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
                key={row.label}
                accessibilityRole={row.onPress ? 'button' : undefined}
                onPress={row.onPress}
                disabled={!row.onPress}
                style={[styles.practicalRow, index === practicalRows.length - 1 && styles.practicalRowLast]}
              >
                <Icon name={row.icon} size={16} color={colors.inkSoft} />
                <Text style={styles.practicalLabel}>{row.label}</Text>
                <Text numberOfLines={1} style={styles.practicalValue}>{row.value}</Text>
              </Pressable>
            ))}
          </View>
        ) : null}

        <LocationPreview coordinates={coordinates} label={item.title} />

        {practical?.website ? (
          <Pressable accessibilityRole="link" style={styles.link} onPress={() => Linking.openURL(practical.website!)}>
            <Text style={styles.linkText}>{t('website')}</Text>
            <Icon name="chevronRight" size={13} color={colors.terreStrong} />
          </Pressable>
        ) : item.url ? (
          <Pressable accessibilityRole="link" style={styles.link} onPress={() => Linking.openURL(item.url!)}>
            <Text style={styles.linkText}>{t('website')}</Text>
            <Icon name="chevronRight" size={13} color={colors.terreStrong} />
          </Pressable>
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
    backRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginVertical: spacing.md, alignSelf: 'flex-start', minHeight: 44 },
    back: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 14 },
    title: { color: colors.ink, fontSize: type.display - 4, fontFamily: fonts.displayBold, marginTop: spacing.sm, lineHeight: 36 },
    copy: { color: colors.ink, lineHeight: 26, fontSize: type.bodyLg, marginTop: spacing.lg, fontFamily: fonts.body },
    actions: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.xl, flexWrap: 'wrap' },
    primaryAction: { flexGrow: 1 },
    practicalCard: { backgroundColor: colors.surface, borderRadius: radii.lg, marginTop: spacing.lg, paddingHorizontal: spacing.md },
    practicalRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.line },
    practicalRowLast: { borderBottomWidth: 0 },
    practicalLabel: { color: colors.inkSoft, fontFamily: fonts.bodySemiBold, fontSize: 13, width: 66 },
    practicalValue: { color: colors.ink, fontFamily: fonts.bodyMedium, fontSize: 14, flex: 1, textAlign: 'right' },
    link: { marginTop: spacing.lg, flexDirection: 'row', alignItems: 'center', gap: 4, alignSelf: 'flex-start' },
    linkText: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 14 },
  });
}
