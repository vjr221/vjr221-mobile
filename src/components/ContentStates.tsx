import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useI18n } from '../i18n/I18nProvider';
import { useTheme } from '../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../theme/tokens';
import { Button } from './Button';
import { SkeletonList } from './Skeleton';

/** État de chargement : squelettes de fiches plutôt qu'un spinner isolé. */
export function LoadingState() {
  return <SkeletonList count={3} />;
}

export function EmptyState({ message }: { message: string }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.box}>
      <View style={styles.mark} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export function ErrorState({ onRetry }: { onRetry: () => void }) {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{t('loadError')}</Text>
      <Button variant="secondary" size="sm" onPress={onRetry} style={styles.retry}>
        {t('retry')}
      </Button>
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    box: { padding: spacing.xl, backgroundColor: colors.surfaceSoft, borderRadius: radii.lg, alignItems: 'center', gap: spacing.sm },
    mark: { width: 34, height: 3, borderRadius: 2, backgroundColor: colors.terre, marginBottom: 2 },
    text: { color: colors.inkSoft, textAlign: 'center', fontFamily: fonts.body, fontSize: type.body, lineHeight: 21 },
    retry: { marginTop: spacing.xs, alignSelf: 'center' },
  });
}
