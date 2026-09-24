import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories, type Category } from '../../config/categories';
import { Icon } from '../../components/icons/Icon';
import { DirectoryScreen } from '../directory/DirectoryScreen';
import { GeoExplorer, type GeoView } from './GeoExplorer';
import { CategoryContentScreen } from './CategoryContentScreen';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { useI18n } from '../../i18n/I18nProvider';
import type { ContentItem, ContentType } from '../../types/content';

/**
 * Accents de marque par univers — rotation savane / terre / safran pour
 * différencier la grille sans cacophonie (max 3 teintes de la palette).
 */
const ACCENT: Record<string, 'savane' | 'terre' | 'safran'> = {
  regions: 'savane',
  tourism: 'terre',
  heritage: 'safran',
  gastronomy: 'terre',
  history: 'safran',
  nature: 'savane',
  culture: 'safran',
  events: 'terre',
  people: 'savane',
  directory: 'terre',
  news: 'savane',
};

/**
 * Explorer = hub de découverte du Sénégal : grande grille de territoires et
 * d'univers éditoriaux. Tous les univers sont connectés à de vrais contenus
 * WordPress (voir config/categories.ts).
 */
export function ExploreScreen({
  onOpen,
  initialCollection,
  initialGeoView,
  initialDirectoryCategory,
}: {
  onOpen: (item: ContentItem) => void;
  initialCollection?: ContentType;
  initialGeoView?: GeoView;
  initialDirectoryCategory?: string;
}) {
  const { t } = useI18n();
  const { colors, shadow } = useTheme();
  const styles = useMemo(() => makeStyles(colors, shadow), [colors, shadow]);
  const [openCollection, setOpenCollection] = useState<ContentType | null>(initialCollection ?? null);

  if (openCollection === 'regions') {
    return <GeoExplorer onExit={() => setOpenCollection(null)} onOpenContent={onOpen} initialView={initialGeoView} />;
  }

  if (openCollection === 'directory') {
    return <DirectoryScreen onOpen={onOpen} initialCategory={initialDirectoryCategory} />;
  }

  const openCategory = categories.find((category) => category.id === openCollection && category.introKey);
  if (openCategory?.introKey) {
    return (
      <CategoryContentScreen
        type={openCategory.id}
        titleKey={openCategory.labelKey}
        introKey={openCategory.introKey}
        onOpen={onOpen}
        onExit={() => setOpenCollection(null)}
      />
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{t('explore')}</Text>
      <Text style={styles.intro}>{t('exploreIntro')}</Text>
      <View style={styles.grid}>
        {categories.map((category) => (
          <CategoryTile
            key={category.id}
            category={category}
            label={t(category.labelKey)}
            desc={t(category.descKey)}
            onPress={() => category.available && setOpenCollection(category.id)}
            styles={styles}
            colors={colors}
          />
        ))}
      </View>
    </ScrollView>
  );
}

function CategoryTile({
  category,
  label,
  desc,
  onPress,
  styles,
  colors,
}: {
  category: Category;
  label: string;
  desc: string;
  onPress: () => void;
  styles: ReturnType<typeof makeStyles>;
  colors: ReturnType<typeof useTheme>['colors'];
}) {
  const accent = ACCENT[category.id] ?? 'terre';
  const iconColor =
    accent === 'savane' ? colors.savane2 : accent === 'safran' ? colors.safranText : colors.terreStrong;
  const iconBg =
    accent === 'savane'
      ? colors.scheme === 'dark'
        ? 'rgba(27,74,50,0.45)'
        : 'rgba(18,51,34,0.08)'
      : accent === 'safran'
        ? colors.scheme === 'dark'
          ? 'rgba(240,194,94,0.18)'
          : 'rgba(229,163,36,0.16)'
        : colors.scheme === 'dark'
          ? 'rgba(227,138,76,0.18)'
          : 'rgba(190,90,33,0.12)';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: !category.available }}
      disabled={!category.available}
      onPress={onPress}
      style={({ pressed }) => [
        styles.tile,
        !category.available && styles.unavailable,
        pressed && category.available && styles.tilePressed,
      ]}
    >
      <View style={[styles.iconWrap, { backgroundColor: iconBg }]}>
        <Icon name={category.icon} size={22} color={iconColor} />
      </View>
      <View>
        <Text style={styles.name}>{label}</Text>
        <Text numberOfLines={2} style={styles.desc}>
          {desc}
        </Text>
      </View>
    </Pressable>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors'], shadow: ReturnType<typeof useTheme>['shadow']) {
  return StyleSheet.create({
    content: { padding: spacing.md, paddingBottom: 120, backgroundColor: colors.bg },
    title: {
      color: colors.ink,
      fontSize: type.display - 6,
      fontFamily: fonts.displayBold,
      marginTop: spacing.md,
      letterSpacing: 0.2,
    },
    intro: {
      color: colors.inkSoft,
      marginTop: 6,
      fontSize: type.bodyLg,
      fontFamily: fonts.body,
      lineHeight: 23,
    },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginVertical: spacing.lg },
    tile: {
      width: '48%',
      minHeight: 148,
      padding: spacing.md,
      backgroundColor: colors.surface,
      borderRadius: radii.lg,
      justifyContent: 'space-between',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.line,
      ...shadow('subtle'),
    },
    tilePressed: { opacity: 0.92, transform: [{ scale: 0.985 }] },
    unavailable: { opacity: 0.55 },
    iconWrap: {
      width: 42,
      height: 42,
      borderRadius: radii.pill,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.sm,
    },
    name: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 15, letterSpacing: 0.1 },
    desc: { color: colors.inkSoft, fontFamily: fonts.body, fontSize: 12.5, lineHeight: 17, marginTop: 3 },
  });
}
