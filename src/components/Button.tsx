import { useMemo } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, type StyleProp, type ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { fonts, radii, spacing } from '../theme/tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'md' | 'sm';

/**
 * Bouton pilule — jamais rectangulaire administratif.
 * primary = UNE action principale / écran ; secondary = second plan ; ghost = lien discret.
 */
export function Button({
  children,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  style,
  accessibilityLabel,
}: {
  children: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
}) {
  const { colors, shadow } = useTheme();
  const styles = useMemo(() => makeStyles(colors, shadow), [colors, shadow]);
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? children}
      accessibilityState={{ disabled: isDisabled }}
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        size === 'sm' && styles.sm,
        isDisabled && styles.disabled,
        pressed && !isDisabled && styles.pressed,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? colors.white : colors.terre} size="small" />
      ) : (
        <Text numberOfLines={1} style={[styles.text, styles[`${variant}Text` as const], size === 'sm' && styles.smText]}>
          {children}
        </Text>
      )}
    </Pressable>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors'], shadow: ReturnType<typeof useTheme>['shadow']) {
  return StyleSheet.create({
    base: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: radii.pill,
      paddingHorizontal: spacing.lg,
      paddingVertical: 14,
      minHeight: 48,
    },
    sm: { paddingHorizontal: spacing.md, paddingVertical: 10, minHeight: 38 },
    pressed: { opacity: 0.88, transform: [{ scale: 0.975 }] },
    disabled: { opacity: 0.42 },
    primary: {
      backgroundColor: colors.terre,
      ...shadow('subtle'),
    },
    secondary: {
      backgroundColor: colors.surfaceSoft,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.line,
    },
    ghost: { backgroundColor: 'transparent', paddingHorizontal: spacing.xs },
    text: { fontFamily: fonts.bodySemiBold, fontSize: 15, letterSpacing: 0.2 },
    smText: { fontSize: 13 },
    primaryText: { color: colors.white },
    secondaryText: { color: colors.ink },
    ghostText: { color: colors.terreStrong },
  });
}
