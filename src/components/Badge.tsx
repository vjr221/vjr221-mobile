import { memo, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { fonts, radii, spacing } from '../theme/tokens';

export type BadgeTone = 'savane' | 'terre' | 'safran' | 'neutral' | 'outline';

/**
 * Étiquette courte (kicker, statut, catégorie). Cinq tons sobres — jamais de
 * couleur criarde plaquée telle quelle : `savane`/`terre`/`safran` utilisent
 * la teinte en fond légèrement transparent avec le texte dans la teinte pleine,
 * jamais en aplat saturé sur toute la surface.
 */
export const Badge = memo(function Badge({ children, tone = 'neutral', style }: { children: string; tone?: BadgeTone; style?: object }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const toneStyle = styles[tone];
  return (
    <View style={[styles.base, toneStyle.wrap, style]}>
      <Text style={[styles.text, toneStyle.text]} numberOfLines={1}>{children}</Text>
    </View>
  );
});

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  const tint = (hex: string, alpha: number) => hexToRgba(hex, alpha);
  const base = StyleSheet.create({
    base: { alignSelf: 'flex-start' as const, borderRadius: radii.pill, paddingHorizontal: spacing.sm + 2, paddingVertical: 5 },
    text: { fontFamily: fonts.monoSemiBold, fontSize: 10.5, letterSpacing: 0.9, textTransform: 'uppercase' as const },
  });
  const tones: Record<BadgeTone, { wrap: object; text: object }> = {
    savane: { wrap: { backgroundColor: tint(colors.savane, colors.scheme === 'dark' ? 0.32 : 0.1) }, text: { color: colors.scheme === 'dark' ? colors.onSavane : colors.savane2 } },
    terre: { wrap: { backgroundColor: tint(colors.terre, colors.scheme === 'dark' ? 0.28 : 0.13) }, text: { color: colors.terreStrong } },
    safran: { wrap: { backgroundColor: tint(colors.safran, colors.scheme === 'dark' ? 0.24 : 0.16) }, text: { color: colors.safranText } },
    neutral: { wrap: { backgroundColor: colors.surfaceSoft }, text: { color: colors.inkSoft } },
    outline: { wrap: { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.line }, text: { color: colors.inkSoft } },
  };
  return { ...base, ...tones };
}

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
