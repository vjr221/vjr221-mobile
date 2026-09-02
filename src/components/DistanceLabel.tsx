import { Text, StyleSheet } from 'react-native';
import { colors } from '../theme/tokens';
import { distanceKm, formatDistance, type Coordinates } from '../services/mapService';

/**
 * Affiche une distance à vol d'oiseau entre deux points fournis explicitement.
 * L'application ne géolocalise pas l'utilisateur automatiquement (aucune
 * dépendance de géolocalisation ajoutée) : `from` doit être fourni par
 * l'appelant lorsque disponible.
 */
export function DistanceLabel({ from, to }: { from: Coordinates | null; to: Coordinates | null }) {
  if (!from || !to) return null;
  return <Text style={styles.text}>{formatDistance(distanceKm(from, to))}</Text>;
}

const styles = StyleSheet.create({
  text: { color: colors.primary, fontWeight: '700', fontSize: 12, marginTop: 4 },
});
