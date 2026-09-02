import { useEffect, useMemo, useState } from 'react';
import { AccessibilityInfo, Animated, StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { radii, spacing } from '../theme/tokens';

/**
 * États de chargement « squelette » (plutôt qu'un simple spinner isolé) pour
 * les listes de fiches — pulsation discrète, désactivée si l'utilisateur a
 * demandé "réduire les animations" au niveau système.
 */
function usePulse() {
  const [value] = useState(() => new Animated.Value(0.45));
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    let mounted = true;
    AccessibilityInfo.isReduceMotionEnabled?.().then((enabled) => { if (mounted) setReduceMotion(Boolean(enabled)); }).catch(() => {});
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    if (reduceMotion) { value.setValue(0.6); return; }
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(value, { toValue: 1, duration: 750, useNativeDriver: true }),
        Animated.timing(value, { toValue: 0.45, duration: 750, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [reduceMotion, value]);

  return value;
}

function Bone({ style }: { style?: object }) {
  const { colors } = useTheme();
  const opacity = usePulse();
  return <Animated.View style={[{ backgroundColor: colors.line, opacity }, style]} />;
}

export function SkeletonCard() {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.card}>
      <Bone style={styles.image} />
      <View style={styles.body}>
        <Bone style={styles.kicker} />
        <Bone style={styles.title} />
        <Bone style={styles.line} />
      </View>
    </View>
  );
}

export function SkeletonList({ count = 3 }: { count?: number }) {
  return (
    <View>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </View>
  );
}

export function SkeletonRow() {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.row}>
      <View style={{ flex: 1, gap: 6 }}>
        <Bone style={styles.rowTitle} />
        <Bone style={styles.rowSubtitle} />
      </View>
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    card: { backgroundColor: colors.surface, overflow: 'hidden', borderRadius: radii.lg, marginBottom: spacing.md },
    image: { width: '100%', height: 168, borderRadius: 0 },
    body: { padding: spacing.md, gap: 8 },
    kicker: { width: 70, height: 10, borderRadius: 5 },
    title: { width: '85%', height: 16, borderRadius: 5 },
    line: { width: '60%', height: 12, borderRadius: 5 },
    row: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, borderRadius: radii.md, padding: spacing.md, marginBottom: spacing.sm },
    rowTitle: { width: '70%', height: 15, borderRadius: 5 },
    rowSubtitle: { width: '40%', height: 11, borderRadius: 5 },
  });
}
