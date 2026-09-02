import { useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { Badge } from '../../components/Badge';
import { Icon } from '../../components/icons/Icon';
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
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const infoRows: [string, string | null][] = [
    [t('infoChefLieu'), infos.chefLieu],
    [t('infoSuperficie'), infos.superficie],
    [t('infoPopulation'), infos.population],
    [t('infoGentile'), infos.gentile],
  ].filter(([, value]) => value !== null) as [string, string | null][];

  return (
    <View style={styles.card}>
      {image ? (
        <Image accessibilityIgnoresInvertColors source={{ uri: image.thumb }} style={styles.image} />
      ) : (
        <View style={styles.imageFallback}>
          <Icon name="territoires" size={30} color={colors.line} />
        </View>
      )}
      <View style={styles.body}>
        {breadcrumb ? <Badge tone="savane">{breadcrumb}</Badge> : null}
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

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    card: { backgroundColor: colors.surface, borderRadius: radii.xl, overflow: 'hidden', marginBottom: spacing.lg },
    image: { width: '100%', height: 190, backgroundColor: colors.surfaceSoft },
    imageFallback: { width: '100%', height: 190, backgroundColor: colors.surfaceSoft, alignItems: 'center', justifyContent: 'center' },
    body: { padding: spacing.lg, gap: 6 },
    title: { color: colors.ink, fontFamily: fonts.displayBold, fontSize: type.display - 6, marginTop: 4 },
    excerpt: { color: colors.inkSoft, fontFamily: fonts.body, marginTop: spacing.xs, lineHeight: 21, fontSize: type.bodyLg },
    infoGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginTop: spacing.md },
    infoCell: { minWidth: '46%', backgroundColor: colors.surfaceSoft, borderRadius: radii.md, padding: spacing.sm },
    infoLabel: { color: colors.inkSoft, fontSize: 10.5, fontFamily: fonts.monoSemiBold, letterSpacing: 0.6, textTransform: 'uppercase' },
    infoValue: { color: colors.ink, fontSize: type.body, fontFamily: fonts.bodySemiBold, marginTop: 3 },
    content: { color: colors.ink, lineHeight: 24, marginTop: spacing.md, fontSize: type.bodyLg, fontFamily: fonts.body },
  });
}
