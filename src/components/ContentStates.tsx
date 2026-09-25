import { useMemo } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../theme/tokens';
import { Button } from './Button';
import { Icon } from './icons/Icon';
import { useI18n } from '../i18n/I18nProvider';

export function LoadingState() {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.box} accessibilityRole="progressbar">
      <ActivityIndicator color={colors.terreStrong} size="large" />
    </View>
  );
}

export function ErrorState({ onRetry }: { onRetry: () => void }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.card}>
      <View style={styles.iconCircle}>
        <Icon name="info" size={22} color={colors.terreStrong} />
      </View>
      <Text style={styles.title}>{t('loadError')}</Text>
      <Button variant="secondary" size="sm" onPress={onRetry}>
        {t('retry')}
      </Button>
    </View>
  );
}

export function EmptyState({ message }: { message: string }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.card}>
      <View style={[styles.iconCircle, styles.iconSoft]}>
        <Icon name="search" size={22} color={colors.inkSoft} />
      </View>
      <Text style={styles.body}>{message}</Text>
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    box: {
      paddingVertical: spacing.xxl,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      marginTop: spacing.md,
      paddingVertical: spacing.xl,
      paddingHorizontal: spacing.lg,
      borderRadius: radii.lg,
      backgroundColor: colors.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.line,
      alignItems: 'center',
      gap: spacing.sm,
    },
    iconCircle: {
      width: 52,
      height: 52,
      borderRadius: 26,
      backgroundColor: colors.scheme === 'dark' ? 'rgba(227,138,76,0.16)' : 'rgba(196,95,36,0.1)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.xs,
    },
    iconSoft: {
      backgroundColor: colors.surfaceSoft,
    },
    title: {
      color: colors.ink,
      fontFamily: fonts.bodySemiBold,
      fontSize: type.body,
      textAlign: 'center',
      marginBottom: spacing.xs,
    },
    body: {
      color: colors.inkSoft,
      fontFamily: fonts.body,
      fontSize: type.body,
      lineHeight: 22,
      textAlign: 'center',
      maxWidth: 280,
    },
  });
}
