import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing } from '../../theme/tokens';
import { useI18n } from '../../i18n/I18nProvider';
import type { KeyInfos, RemoteImage } from '../../types/geo';

/** Bloc « fiche » réutilisable pour région / département / commune / village. */
export function GeoDetailCard({
  title,
  excerpt,
  content,
  image,
  infos,
  breadcrumb,
}: {
  title: string;
  excerpt: string | null;
  content: string | null;
  image: RemoteImage | null;
  infos: KeyInfos;
  breadcrumb?: string | null;
}) {
  const { t } = useI18n();
  const infoRows: [string, string | null][] = [
    [t('infoChefLieu'), infos.chefLieu],
    [t('infoSuperficie'), infos.superficie],
    [t('infoPopulation'), infos.population],
    [t('infoGentile'), infos.gentile],
  ].filter(([, value]) => value !== null) as [string, string | null][];

  return (
    <View style={styles.card}>
      {image ? <Image accessibilityIgnoresInvertColors source={{ uri: image.thumb }} style={styles.image} /> : null}
      <View style={styles.body}>
        {breadcrumb ? <Text style={styles.breadcrumb}>{breadcrumb}</Text> : null}
        <Text style={styles.title}>{title}</Text>
        {excerpt ? <Text style={styles.excerpt}>{excerpt}</Text> : null}
        {infoRows.length ? (
          <View style={styles.infoGrid}>
            {infoRows.map(([label, value]) => (
              <View key={label} style={styles.infoCell}>
                <Text style={styles.infoLabel}>{label}</Text>
                <Text style={styles.infoValue}>{value}</Text>
              </View>
            ))}
          </View>
        ) : null}
        {content ? <Text style={styles.content}>{content}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: radii.lg, overflow: 'hidden', marginBottom: spacing.lg },
  image: { width: '100%', height: 170, backgroundColor: colors.sand },
  body: { padding: spacing.md },
  breadcrumb: { color: colors.primary, fontWeight: '700', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase' },
  title: { color: colors.ink, fontSize: 24, fontWeight: '800', marginTop: 4 },
  excerpt: { color: colors.muted, marginTop: spacing.sm, lineHeight: 20 },
  infoGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginTop: spacing.md },
  infoCell: { minWidth: '46%', backgroundColor: colors.sand, borderRadius: radii.sm, padding: spacing.sm },
  infoLabel: { color: colors.muted, fontSize: 11, fontWeight: '700', textTransform: 'uppercase' },
  infoValue: { color: colors.ink, fontSize: 15, fontWeight: '700', marginTop: 2 },
  content: { color: colors.ink, lineHeight: 22, marginTop: spacing.md, fontSize: 15 },
});
