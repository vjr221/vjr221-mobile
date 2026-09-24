import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';
import { openExternalUrl, sanitizeExternalUrl } from '../../services/externalLinks';
import { parseRichContent } from '../../services/richText';
import { RichText } from '../../components/RichText';
import { openExternalNavigation } from '../../services/mapService';
import { Icon } from '../../components/icons/Icon';
import { useI18n } from '../../i18n/I18nProvider';
import { getWolofContentBySlug } from '../../i18n/contentWolof';
import type { GeoCta, GeoPoint, KeyInfos, RemoteImage, UsefulLink } from '../../types/geo';

export function GeoDetailCard({
  title,
  slug,
  excerpt,
  content,
  image,
  infos,
  breadcrumb,
  cta,
  gps,
  usefulLinks = [],
}: {
  title: string;
  slug?: string;
  excerpt: string | null;
  content: string | null;
  image: RemoteImage | null;
  infos: KeyInfos;
  breadcrumb?: string | null;
  cta?: GeoCta | null;
  gps?: GeoPoint | null;
  usefulLinks?: UsefulLink[];
}) {
  const { t, locale } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const wolof = useMemo(() => (locale === 'wo' && slug ? getWolofContentBySlug(slug) : undefined), [locale, slug]);
  const localizedTitle = locale === 'wo' ? (wolof?.titleWo ?? title) : title;
  const localizedExcerpt = locale === 'wo' ? (wolof?.excerptWo ?? excerpt) : excerpt;
  const localizedContent = locale === 'wo' ? (wolof?.contentWo ?? content) : content;
  const contentBlocks = useMemo(() => (localizedContent ? parseRichContent(localizedContent) : []), [localizedContent]);

  const infoRows: [string, string | null][] = [
    [t('infoChefLieu'), infos.chefLieu],
    [t('infoSuperficie'), infos.superficie],
    [t('infoPopulation'), infos.population],
    [t('infoGentile'), infos.gentile],
  ].filter(([, value]) => value !== null) as [string, string | null][];

  return (
    <View style={styles.card}>
      {image ? (
        <Image accessibilityIgnoresInvertColors source={{ uri: image.thumb }} style={styles.image} contentFit="cover" cachePolicy="memory-disk" transition={200} />
      ) : (
        <View style={styles.imageFallback}>
          <Icon name="territoires" size={30} color={colors.line} />
        </View>
      )}
      <View style={styles.body}>
        {breadcrumb ? <Badge tone="savane">{breadcrumb}</Badge> : null}
        <Text style={styles.title}>{localizedTitle}</Text>
        {localizedExcerpt ? <Text style={styles.excerpt}>{localizedExcerpt}</Text> : null}
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
        {contentBlocks.length ? <View style={styles.content}><RichText blocks={contentBlocks} /></View> : null}
        {gps ? (
          <Button
            variant="secondary"
            size="sm"
            onPress={() => void openExternalNavigation({ lat: gps.lat, lng: gps.lng }, localizedTitle)}
            style={styles.mapButton}
          >
            {t('openMap')}
          </Button>
        ) : null}
        {usefulLinks.map((link, index) => {
          const url = sanitizeExternalUrl(link.url, 'web');
          if (!url) return null;
          return (
            <Button
              key={link.label ? link.label + '-' + index : 'link-' + index}
              variant="secondary"
              size="sm"
              onPress={() => void openExternalUrl(url, 'web')}
              style={styles.mapButton}
            >
              {link.label?.trim() || t('website')}
            </Button>
          );
        })}
        {cta ? (
          <View style={styles.ctaBox}>
            <Text style={styles.ctaTitle}>{cta.title}</Text>
            <Text style={styles.ctaText}>{cta.text}</Text>
            <Button variant="secondary" size="sm" onPress={() => openExternalUrl(cta.buttonUrl)} style={styles.ctaButton}>
              {cta.buttonLabel}
            </Button>
          </View>
        ) : null}
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
    content: { marginTop: spacing.sm },
    mapButton: { marginTop: spacing.sm, alignSelf: 'flex-start' },
    ctaBox: { backgroundColor: colors.surfaceSoft, borderRadius: radii.lg, marginTop: spacing.md, padding: spacing.md, gap: 6 },
    ctaTitle: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: type.body },
    ctaText: { color: colors.inkSoft, fontFamily: fonts.body, fontSize: 13, lineHeight: 19 },
    ctaButton: { marginTop: spacing.xs, alignSelf: 'flex-start' },
  });
}
