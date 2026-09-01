import { Text, View, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/tokens';
export function SectionHeader({ children }: { children: string }) { return <View style={styles.wrap}><Text style={styles.text}>{children}</Text></View>; }
const styles = StyleSheet.create({ wrap: { marginTop: spacing.xl, marginBottom: spacing.md }, text: { color: colors.ink, fontSize: 21, fontWeight: '700' } });
