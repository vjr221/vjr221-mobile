import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ContentCard } from '../../components/ContentCard';
import { Icon } from '../../components/icons/Icon';
import { useI18n } from '../../i18n/I18nProvider';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import type { ContentItem } from '../../types/content';

/** Favoris = expérience soignée : mêmes fiches que partout dans l'app, jamais une liste texte à part. */
export function FavoritesScreen({ items, onOpen }: { items: ContentItem[]; onOpen: (item: ContentItem) => void }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.pageTitle}>{t('favorites')}</Text>
      <Text style={styles.intro}>{t('favoritesIntro')}</Text>
      {items.length ? (
        items.map((item) => <ContentCard key={item.id} item={item} onPress={onOpen} />)
      ) : (
        <View style={styles.empty}>
          <View style={styles.emptyIcon}>
            <Icon name="heart" size={24} color={colors.terreStrong} />
          </View>
          <Text style={styles.emptyText}>{t('favoritesEmpty')}</Text>
        </View>
      )}
    </ScrollView>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    page: { padding: spacing.md, paddingBottom: 120, backgroundColor: colors.bg, flexGrow: 1 },
    pageTitle: { color: colors.ink, fontSize: type.display - 4, fontFamily: fonts.displayBold, marginTop: spacing.md },
    intro: { color: colors.inkSoft, marginTop: 4, marginBottom: spacing.lg, fontFamily: fonts.body, fontSize: type.bodyLg, lineHeight: 22 },
    empty: { alignItems: 'center', paddingVertical: spacing.xxl, backgroundColor: colors.surfaceSoft, borderRadius: radii.xl, gap: spacing.sm },
    emptyIcon: { width: 52, height: 52, borderRadius: radii.pill, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' },
    emptyText: { color: colors.inkSoft, fontFamily: fonts.body, fontSize: type.body, textAlign: 'center', paddingHorizontal: spacing.xl, lineHeight: 20 },
  });
}
