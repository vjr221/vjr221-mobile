import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories } from '../../config/categories';
import { Badge } from '../../components/Badge';
import { Icon } from '../../components/icons/Icon';
import { DirectoryScreen } from '../directory/DirectoryScreen';
import { GeoExplorer, type GeoView } from './GeoExplorer';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { useI18n } from '../../i18n/I18nProvider';
import type { TranslationKey } from '../../i18n/strings';
import type { ContentItem, ContentType } from '../../types/content';

/**
 * Explorer = hub de découverte du Sénégal : grande grille de territoires et
 * d'univers éditoriaux, chacun avec son propre statut (disponible / à venir),
 * plutôt qu'une simple liste administrative de collections.
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
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [openCollection, setOpenCollection] = useState<ContentType | null>(initialCollection ?? null);

  if (openCollection === 'regions') {
    return <GeoExplorer onExit={() => setOpenCollection(null)} onOpenContent={onOpen} initialView={initialGeoView} />;
  }

  if (openCollection === 'directory') {
    return <DirectoryScreen onOpen={onOpen} initialCategory={initialDirectoryCategory} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>{t('explore')}</Text>
      <Text style={styles.intro}>{t('exploreIntro')}</Text>
      <View style={styles.grid}>
        {categories.map((category) => (
          <Pressable
            key={category.id}
            disabled={!category.available}
            onPress={() => category.available && setOpenCollection(category.id)}
            style={({ pressed }) => [styles.tile, !category.available && styles.unavailable, pressed && category.available && styles.tilePressed]}
          >
            <View style={styles.iconWrap}>
              <Icon name={category.icon} size={22} color={colors.terreStrong} />
            </View>
            <Text style={styles.name}>{t(category.labelKey as TranslationKey)}</Text>
            <Badge tone={category.available ? 'savane' : 'outline'}>{category.available ? t('available') : t('comingSoon')}</Badge>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    content: { padding: spacing.md, paddingBottom: 120, backgroundColor: colors.bg },
    title: { color: colors.ink, fontSize: type.display - 6, fontFamily: fonts.displayBold, marginTop: spacing.md },
    intro: { color: colors.inkSoft, marginTop: 6, fontSize: type.bodyLg, fontFamily: fonts.body, lineHeight: 22 },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginVertical: spacing.lg },
    tile: { width: '48%', minHeight: 140, padding: spacing.md, backgroundColor: colors.surface, borderRadius: radii.lg, justifyContent: 'space-between' },
    tilePressed: { opacity: 0.92 },
    unavailable: { opacity: 0.6 },
    iconWrap: { width: 40, height: 40, borderRadius: radii.pill, backgroundColor: colors.surfaceSoft, alignItems: 'center', justifyContent: 'center' },
    name: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 15 },
  });
}
