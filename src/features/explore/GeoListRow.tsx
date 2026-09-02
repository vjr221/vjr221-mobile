import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radii, shadows, spacing } from '../../theme/tokens';

/** Ligne compacte réutilisable pour région / département / commune / village. */
export function GeoListRow({ title, subtitle, onPress }: { title: string; subtitle?: string | null; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={title} onPress={onPress} style={styles.row}>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text numberOfLines={1} style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, borderRadius: radii.md, padding: spacing.md, marginBottom: spacing.sm, ...shadows.card },
  body: { flex: 1, paddingRight: spacing.sm },
  title: { color: colors.ink, fontWeight: '700', fontSize: 16 },
  subtitle: { color: colors.muted, fontSize: 13, marginTop: 2 },
  chevron: { color: colors.muted, fontSize: 22, fontWeight: '300' },
});
