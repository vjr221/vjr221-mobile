import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFavorites } from '../../stores/FavoritesProvider';
import type { ContentItem } from '../../types/content';
import { colors, radii, spacing } from '../../theme/tokens';
import { useI18n } from '../../i18n/I18nProvider';
import { shareFiche } from '../../services/shareService';
import { LocationPreview } from '../../components/LocationPreview';

export function ContentDetailScreen({ item, onBack }: { item: ContentItem; onBack: () => void }) {
  const { t } = useI18n();
  const { has, toggle } = useFavorites();
  const { practical } = item;
  const coordinates = practical?.coordinates ? { lat: practical.coordinates.latitude, lng: practical.coordinates.longitude } : null;

  const share = () => shareFiche({ title: item.title, summary: item.excerpt, url: item.url ?? item.title });
  const call = () => practical?.phone && Linking.openURL(`tel:${practical.phone.replace(/\s+/g, '')}`);
  const email = () => practical?.email && Linking.openURL(`mailto:${practical.email}`);

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Pressable onPress={onBack} accessibilityRole="button"><Text style={styles.back}>← {t('home')}</Text></Pressable>
      <Text style={styles.kicker}>{item.type.toUpperCase()}</Text>
      <Text style={styles.title}>{item.title}</Text>
      {item.content || item.excerpt ? <Text style={styles.copy}>{item.content ?? item.excerpt}</Text> : null}

      <View style={styles.actions}>
        <Pressable accessibilityRole="button" style={styles.primary} onPress={() => toggle(item)}>
          <Text style={styles.primaryText}>{has(item.id) ? t('saved') : t('save')}</Text>
        </Pressable>
        <Pressable accessibilityRole="button" style={styles.secondary} onPress={share}>
          <Text style={styles.secondaryText}>{t('share')}</Text>
        </Pressable>
      </View>

      {/* Actions pratiques : uniquement affichées si la donnée correspondante existe. */}
      {practical?.phone ? (
        <Pressable accessibilityRole="button" style={styles.practicalRow} onPress={call}>
          <Text style={styles.practicalLabel}>{t('call')}</Text>
          <Text style={styles.practicalValue}>{practical.phone}</Text>
        </Pressable>
      ) : null}
      {practical?.address ? (
        <View style={styles.practicalRow}>
          <Text style={styles.practicalLabel}>{t('location')}</Text>
          <Text style={styles.practicalValue}>{practical.address}</Text>
        </View>
      ) : null}
      {practical?.hours ? (
        <View style={styles.practicalRow}>
          <Text style={styles.practicalLabel}>{t('hours')}</Text>
          <Text style={styles.practicalValue}>{practical.hours}</Text>
        </View>
      ) : null}
      {practical?.email ? (
        <Pressable accessibilityRole="button" style={styles.practicalRow} onPress={email}>
          <Text style={styles.practicalLabel}>{t('email')}</Text>
          <Text style={styles.practicalValue}>{practical.email}</Text>
        </Pressable>
      ) : null}

      <LocationPreview coordinates={coordinates} label={item.title} />

      {practical?.website ? (
        <Pressable accessibilityRole="link" style={styles.link} onPress={() => Linking.openURL(practical.website!)}>
          <Text style={styles.linkText}>{t('website')} ↗</Text>
        </Pressable>
      ) : item.url ? (
        <Pressable accessibilityRole="link" style={styles.link} onPress={() => Linking.openURL(item.url!)}>
          <Text style={styles.linkText}>{t('website')} ↗</Text>
        </Pressable>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: spacing.md, paddingBottom: 60, backgroundColor: colors.surface },
  back: { color: colors.primary, fontWeight: '700', marginVertical: spacing.md },
  kicker: { color: colors.primary, fontWeight: '800', fontSize: 11, letterSpacing: 1.2, marginTop: spacing.lg },
  title: { color: colors.ink, fontSize: 30, fontWeight: '800', marginTop: spacing.sm },
  copy: { color: colors.ink, lineHeight: 25, fontSize: 17, marginTop: spacing.lg },
  actions: { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.xl },
  primary: { flex: 1, padding: spacing.md, borderRadius: radii.pill, backgroundColor: colors.primary, alignItems: 'center' },
  primaryText: { color: colors.white, fontWeight: '800' },
  secondary: { padding: spacing.md, borderRadius: radii.pill, backgroundColor: colors.primarySoft },
  secondaryText: { color: colors.primaryDark, fontWeight: '800' },
  practicalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.border, marginTop: spacing.sm },
  practicalLabel: { color: colors.muted, fontWeight: '700', fontSize: 13 },
  practicalValue: { color: colors.primary, fontWeight: '700', fontSize: 14, flexShrink: 1, textAlign: 'right' },
  link: { marginTop: spacing.md, alignSelf: 'flex-start' },
  linkText: { color: colors.primary, fontWeight: '700' },
});
