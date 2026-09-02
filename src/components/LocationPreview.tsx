import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { fonts, radii, spacing } from '../theme/tokens';
import { Icon } from './icons/Icon';
import { useI18n } from '../i18n/I18nProvider';
import type { Coordinates } from '../services/mapService';
import { openExternalNavigation } from '../services/mapService';
import { DistanceLabel } from './DistanceLabel';

/**
 * Aperçu de localisation, sans dépendance carte embarquée : affiche les
 * coordonnées et propose l'ouverture de la navigation externe. N'affiche
 * jamais rien si les coordonnées sont absentes (aucun emplacement inventé).
 */
export function LocationPreview({ coordinates, label, fromCoordinates }: { coordinates: Coordinates | null; label?: string; fromCoordinates?: Coordinates | null }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  if (!coordinates) return null;

  return (
    <View style={styles.card}>
      <View style={styles.iconWrap}>
        <Icon name="pin" size={18} color={colors.terreStrong} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{label ?? t('location')}</Text>
        <Text style={styles.coords}>{coordinates.lat.toFixed(5)}, {coordinates.lng.toFixed(5)}</Text>
        {fromCoordinates ? <DistanceLabel from={fromCoordinates} to={coordinates} /> : null}
      </View>
      <OpenDirectionsAction coordinates={coordinates} label={label} />
    </View>
  );
}

export function OpenDirectionsAction({ coordinates, label }: { coordinates: Coordinates | null; label?: string }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  if (!coordinates) return null;
  return (
    <Pressable accessibilityRole="button" style={styles.button} onPress={() => openExternalNavigation(coordinates, label)}>
      <Text style={styles.buttonText}>{t('location')}</Text>
      <Icon name="chevronRight" size={14} color={colors.white} />
    </Pressable>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    card: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surfaceSoft, borderRadius: radii.lg, padding: spacing.md, marginTop: spacing.sm, gap: spacing.sm },
    iconWrap: { width: 36, height: 36, borderRadius: radii.pill, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center' },
    info: { flex: 1 },
    title: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 14 },
    coords: { color: colors.inkSoft, fontFamily: fonts.mono, fontSize: 11.5, marginTop: 2 },
    button: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: colors.terre, borderRadius: radii.pill, paddingHorizontal: spacing.md, paddingVertical: 10 },
    buttonText: { color: colors.white, fontFamily: fonts.bodySemiBold, fontSize: 13 },
  });
}
