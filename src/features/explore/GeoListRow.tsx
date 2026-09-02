import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';
import { Icon } from '../../components/icons/Icon';

/** Ligne compacte réutilisable pour région / département / commune / village. */
export function GeoListRow({ title, subtitle, onPress }: { title: string; subtitle?: string | null; onPress: () => void }) {
  const { colors, shadow } = useTheme();
  const styles = useMemo(() => makeStyles(colors, shadow), [colors, shadow]);
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={title} onPress={onPress} style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text numberOfLines={1} style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <Icon name="chevronRight" size={18} color={colors.inkSoft} />
    </Pressable>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors'], shadow: ReturnType<typeof useTheme>['shadow']) {
  return StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, borderRadius: radii.md, padding: spacing.md, marginBottom: spacing.sm, ...shadow('subtle') },
    pressed: { opacity: 0.9 },
    body: { flex: 1, paddingRight: spacing.sm },
    title: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: type.bodyLg },
    subtitle: { color: colors.inkSoft, fontFamily: fonts.body, fontSize: type.caption, marginTop: 2 },
  });
}
