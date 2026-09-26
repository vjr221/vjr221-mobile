import { useMemo, useState } from 'react';
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
  titleWo,
  excerptWo,
  contentWo,
  image,
  infos,
  breadcrumb,
  cta,
  gps,
  usefulLinks = [],
  permalink,
}: {
  title: string;
  slug?: string;
  excerpt: string | null;
  content: string | null;
  /** Wolof fourni par l'API (prioritaire sur contentWolof local). */
  titleWo?: string | null;
  excerptWo?: string | null;
  contentWo?: string | null;
  image: RemoteImage | null;
  infos: KeyInfos;
  breadcrumb?: string | null;
  cta?: GeoCta | null;
  gps?: GeoPoint | null;
  usefulLinks?: UsefulLink[];
  permalink?: string | null;
}) {
  const { t, locale } = useI18n();
  const { colors, shadow } = useTheme();
  const styles = useMemo(() => makeStyles(colors, shadow), [colors, shadow]);
  // Vague 8 : API title_wo / excerpt_wo / content_wo prioritaire ;
  // couche locale contentWolof* = repli si le champ API est absent.
  const local = useMemo(() => (locale === 'wo' && slug ? getWolofContentBySlug(slug) : undefined), [locale, slug]);
  const localizedTitle =
    locale === 'wo' ? (titleWo?.trim() || local?.titleWo || title) : title;
  const localizedExcerpt =
    locale === 'wo' ? (excerptWo?.trim() || local?.excerptWo || excerpt) : excerpt;
  const localizedContent =
    locale === 'wo' ? (contentWo?.trim() || local?.contentWo || content) : content;
  const contentBlocks = useMemo(() => {
    if (!localizedContent) return [];
    try {
      return parseRichContent(localizedContent);
    } catch {
      return [];
    }
  }, [localizedContent]);
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(image?.thumb) && !imageFailed;

  const infoRows: [string, string | null][] = [
    [t('infoChefLieu'), infos.chefLieu],
    [t('infoSuperficie'), infos.superficie],
    [t('infoPopulation'), infos.population],
    [t('infoGentile'), infos.gentile],
  ].filter(([, value]) => value !== null) as [string, string | null][];

  return (
    <View style={styles.card}>
      {showImage ? (
        <Image
          accessibilityIgnoresInvertColors
          source={{ uri: image!.thumb }}
          style={styles.image}
          contentFit="cover"
          cachePolicy="memory-disk"
          transition={200}
          onError={() => setImageFailed(true)}
        />
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
            onPress={() => {
              void openExternalNavigation({ lat: gps.lat, lng: gps.lng }, localizedTitle);
            }}
            style={styles.mapButton}
          >
            {t('openMap')}
          </Button>
        ) : null}
        {usefulLinks.map((link) => {
          const url = sanitizeExternalUrl(link.url);
          const label = link.label?.trim();
          if (!url || !label) return null;
          return (
            <Button
              key={link.url + label}
              variant="secondary"
              size="sm"
              onPress={() => {
                void openExternalUrl(url, 'web');
              }}
              style={styles.mapButton}
            >
              {label}
            </Button>
          );
        })}
        {permalink ? (
          <Button
            variant="secondary"
            size="sm"
            onPress={() => {
              void openExternalUrl(permalink, 'web');
            }}
            style={styles.mapButton}
          >
            {t('website')}
          </Button>
        ) : null}
        {cta ? (
          <View style={styles.ctaBox}>
            <Text style={styles.ctaTitle}>{cta.title}</Text>
            <Text style={styles.ctaText}>{cta.text}</Text>
            <Button variant="secondary" size="sm" onPress={() => { void openExternalUrl(cta.buttonUrl, 'web'); }} style={styles.ctaButton}>
              {cta.buttonLabel}
            </Button>
          </View>
        ) : null}
      </View>
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors'], shadow: ReturnType<typeof useTheme>['shadow']) {
  return StyleSheet.create({
    card: {
      backgroundColor: colors.surface,
      borderRadius: radii.xl,
      overflow: 'hidden',
      marginBottom: spacing.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.line,
      ...shadow('subtle'),
    },
    image: { width: '100%', height: 190, backgroundColor: colors.surfaceSoft },
    imageFallback: { width: '100%', height: 190, backgroundColor: colors.surfaceSoft, alignItems: 'center', justifyContent: 'center' },
    body: { padding: spacing.lg, gap: 6 },
    title: { color: colors.ink, fontFamily: fonts.displayBold, fontSize: type.display - 4, marginTop: 6, lineHeight: 32, letterSpacing: 0.2 },
    excerpt: { color: colors.inkSoft, fontFamily: fonts.body, marginTop: spacing.sm, lineHeight: 22, fontSize: type.bodyLg },
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
