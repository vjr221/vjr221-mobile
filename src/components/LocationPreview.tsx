import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing } from '../theme/tokens';
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
  if (!coordinates) return null;

  return (
    <View style={styles.card}>
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
  if (!coordinates) return null;
  return (
    <Pressable accessibilityRole="button" style={styles.button} onPress={() => openExternalNavigation(coordinates, label)}>
      <Text style={styles.buttonText}>{t('location')} ↗</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.sand, borderRadius: radii.md, padding: spacing.md, marginTop: spacing.sm },
  info: { flex: 1, paddingRight: spacing.sm },
  title: { color: colors.ink, fontWeight: '700', fontSize: 14 },
  coords: { color: colors.muted, fontSize: 12, marginTop: 2 },
  button: { backgroundColor: colors.primary, borderRadius: radii.pill, paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  buttonText: { color: colors.white, fontWeight: '700', fontSize: 13 },
});
