import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { fonts, spacing, type } from '../theme/tokens';

/**
 * Titre de section éditorial. `onSeeAll` ajoute un lien discret "Tout voir"
 * à droite — utilisé quand la section a une vue dédiée (jamais un bouton plein).
 */
export function SectionHeader({ children, onSeeAll, seeAllLabel = 'Tout voir' }: { children: string; onSeeAll?: () => void; seeAllLabel?: string }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>{children}</Text>
      {onSeeAll ? (
        <Pressable accessibilityRole="button" hitSlop={8} onPress={onSeeAll}>
          <Text style={styles.link}>{seeAllLabel} →</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    wrap: { marginTop: spacing.xl, marginBottom: spacing.md, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' },
    text: { color: colors.ink, fontSize: type.h1, fontFamily: fonts.displaySemiBold, letterSpacing: 0.1 },
    link: { color: colors.terreStrong, fontFamily: fonts.bodySemiBold, fontSize: 13 },
  });
}
