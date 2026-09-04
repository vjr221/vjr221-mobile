import { useEffect, useMemo, useState } from 'react';
import { AccessibilityInfo, Animated, Dimensions, PanResponder, StyleSheet } from 'react-native';
const SWIPE_EDGE_WIDTH = 24;
const DISMISS_DISTANCE_RATIO = 0.32;
const DISMISS_VELOCITY = 0.6;
const SLIDE_DURATION = 260;
export function SlideInScreen({ children, onDismiss }: { children: (dismiss: () => void) => React.ReactNode; onDismiss: () => void }) {
  const width = useMemo(() => Dimensions.get('window').width, []);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [translateX] = useState(() => new Animated.Value(width));
  useEffect(() => { let mounted = true; AccessibilityInfo.isReduceMotionEnabled?.().then((enabled) => { if (mounted) setReduceMotion(Boolean(enabled)); }).catch(() => {}); return () => { mounted = false; }; }, []);
  useEffect(() => { if (reduceMotion) { translateX.setValue(0); return; } Animated.timing(translateX, { toValue: 0, duration: SLIDE_DURATION, useNativeDriver: true }).start(); }, [reduceMotion, translateX]);
  const dismiss = () => { if (reduceMotion) { onDismiss(); return; } Animated.timing(translateX, { toValue: width, duration: SLIDE_DURATION, useNativeDriver: true }).start(() => onDismiss()); };
  const [panResponder] = useState(() => { const springBack = () => Animated.spring(translateX, { toValue: 0, useNativeDriver: true, bounciness: 4 }).start(); return PanResponder.create({ onStartShouldSetPanResponder: (event) => event.nativeEvent.pageX <= SWIPE_EDGE_WIDTH, onMoveShouldSetPanResponder: (event, gesture) => event.nativeEvent.pageX <= SWIPE_EDGE_WIDTH + 12 && gesture.dx > 6 && Math.abs(gesture.dy) < 24, onPanResponderMove: (_event, gesture) => { if (gesture.dx > 0) translateX.setValue(gesture.dx); }, onPanResponderRelease: (_event, gesture) => { const pastThreshold = gesture.dx > width * DISMISS_DISTANCE_RATIO || gesture.vx > DISMISS_VELOCITY; if (pastThreshold) Animated.timing(translateX, { toValue: width, duration: 200, useNativeDriver: true }).start(() => onDismiss()); else springBack(); }, onPanResponderTerminate: springBack }); });
  return <Animated.View style={[styles.fill, { transform: [{ translateX }] }]} {...panResponder.panHandlers}>{children(dismiss)}</Animated.View>;
}
const styles = StyleSheet.create({ fill: { flex: 1 } });
