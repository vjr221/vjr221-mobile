import { useMemo } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { ContentItem, ContentType } from '../types/content';
import { useTheme } from '../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../theme/tokens';
import { Badge, type BadgeTone } from './Badge';
import { Icon } from './icons/Icon';
import { useI18n } from '../i18n/I18nProvider';
import type { TranslationKey } from '../i18n/strings';

// Seuls ces types ont une traduction dédiée dans i18n/strings.ts ; les autres
// (regions/departments/communes/practical/media/diaspora/community...) n'ont
// pas de fiche ContentCard dédiée dans l'app (pas de liste nationale dédiée),
// donc pas de kicker traduit — ils retombent sur item.type en majuscules.
const KICKER_KEY: Partial<Record<ContentType, TranslationKey>> = {
  news: 'news', tourism: 'tourism', heritage: 'heritage', gastronomy: 'gastronomy', people: 'people', directory: 'directory',
  history: 'history', nature: 'nature', culture: 'culture', events: 'events',
};

const KICKER_TONE: Partial<Record<ContentType, BadgeTone>> = {
  news: 'terre', tourism: 'savane', heritage: 'safran', gastronomy: 'terre', people: 'savane', directory: 'neutral',
  history: 'safran', nature: 'savane', culture: 'safran', events: 'terre',
};

/**
 * Fiche encyclopédique premium : image pleine largeur, kicker en badge,
 * titre éditorial, extrait. Sans image, garde une bande de couleur sobre
 * plutôt qu'un vide — jamais de placeholder générique bruyant.
 */
export function ContentCard({ item, onPress, size = 'default' }: { item: ContentItem; onPress: (item: ContentItem) => void; size?: 'default' | 'compact' }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const kickerKey = KICKER_KEY[item.type];
  const kicker = kickerKey ? t(kickerKey).toUpperCase() : item.type.toUpperCase();
  const tone = KICKER_TONE[item.type] ?? 'neutral';
  const compact = size === 'compact';

  return (
    <Pressable accessibilityRole="button" accessibilityLabel={item.title} onPress={() => onPress(item)} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      {item.imageUrl ? (
        <Image accessibilityIgnoresInvertColors source={{ uri: item.imageUrl }} style={[styles.image, compact && styles.imageCompact]} />
      ) : (
        <View style={[styles.imageFallback, compact && styles.imageCompact]}>
          <Icon name="image" size={26} color={colors.line} />
        </View>
      )}
      <View style={styles.body}>
        <Badge tone={tone}>{kicker}</Badge>
        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
        {item.excerpt && !compact ? <Text numberOfLines={2} style={styles.excerpt}>{item.excerpt}</Text> : null}
      </View>
    </Pressable>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    card: { backgroundColor: colors.surface, overflow: 'hidden', borderRadius: radii.lg, marginBottom: spacing.md },
    pressed: { opacity: 0.92 },
    image: { width: '100%', height: 168, backgroundColor: colors.surfaceSoft },
    imageFallback: { width: '100%', height: 168, backgroundColor: colors.surfaceSoft, alignItems: 'center', justifyContent: 'center' },
    imageCompact: { height: 128 },
    body: { padding: spacing.md, gap: 6 },
    title: { color: colors.ink, fontFamily: fonts.displaySemiBold, fontSize: type.h2, lineHeight: 25 },
    excerpt: { color: colors.inkSoft, fontFamily: fonts.body, fontSize: type.body, lineHeight: 20 },
  });
}
