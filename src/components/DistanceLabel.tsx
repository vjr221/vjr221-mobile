import { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { fonts } from '../theme/tokens';
import { distanceKm, formatDistance, type Coordinates } from '../services/mapService';

/**
 * Affiche une distance à vol d'oiseau entre deux points fournis explicitement.
 * L'application ne géolocalise pas l'utilisateur automatiquement (aucune
 * dépendance de géolocalisation ajoutée) : `from` doit être fourni par
 * l'appelant lorsque disponible.
 */
export function DistanceLabel({ from, to }: { from: Coordinates | null; to: Coordinates | null }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  if (!from || !to) return null;
  return <Text style={styles.text}>{formatDistance(distanceKm(from, to))}</Text>;
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    text: { color: colors.terreStrong, fontFamily: fonts.monoSemiBold, fontSize: 12, marginTop: 4 },
  });
}
