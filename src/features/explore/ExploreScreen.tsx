import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { categories } from '../../config/categories';
import { EmptyState } from '../../components/ContentStates';
import { GeoExplorer } from './GeoExplorer';
import { colors, radii, spacing } from '../../theme/tokens';
import { useI18n } from '../../i18n/I18nProvider';
import type { TranslationKey } from '../../i18n/strings';
import type { ContentType } from '../../types/content';

export function ExploreScreen() {
  const { t } = useI18n();
  const [openCollection, setOpenCollection] = useState<ContentType | null>(null);

  if (openCollection === 'regions') {
    return <GeoExplorer onExit={() => setOpenCollection(null)} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>{t('explore')}</Text>
      <Text style={styles.intro}>Découvrez les univers éditoriaux de VJR 221.</Text>
      <View style={styles.grid}>
        {categories.map((category) => (
          <Pressable
            key={category.id}
            disabled={!category.available}
            onPress={() => category.available && setOpenCollection(category.id)}
            style={[styles.tile, !category.available && styles.unavailable]}
          >
            <Text style={styles.icon}>{category.emoji}</Text>
            <Text style={styles.name}>{t(category.labelKey as TranslationKey)}</Text>
            <Text style={styles.status}>{category.available ? 'Disponible' : 'À venir'}</Text>
          </Pressable>
        ))}
      </View>
      <EmptyState message={t('unavailable')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: spacing.md, paddingBottom: 105, backgroundColor: colors.surface },
  title: { color: colors.ink, fontSize: 30, fontWeight: '800', marginTop: spacing.md },
  intro: { color: colors.muted, marginTop: 6, fontSize: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginVertical: spacing.lg },
  tile: { width: '48%', minHeight: 124, padding: spacing.md, backgroundColor: colors.card, borderRadius: radii.md, justifyContent: 'space-between' },
  unavailable: { opacity: 0.68 },
  icon: { color: colors.primary, fontSize: 25 },
  name: { color: colors.ink, fontWeight: '700', fontSize: 16 },
  status: { color: colors.muted, fontSize: 12 },
});
