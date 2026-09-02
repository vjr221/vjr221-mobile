import { useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { colors, radii, spacing } from '../../theme/tokens';
import { getNotificationPreferences, setNotificationPreferences, type NotificationPreferences } from '../../services/notificationService';

const LABELS: Record<keyof NotificationPreferences, string> = {
  general: 'Notifications générales',
  actualites: 'Actualités',
  evenements: 'Événements',
  tourisme: 'Tourisme',
  recommandations: 'Recommandations',
};

/**
 * Préférences de notifications. Fonctionnent dès aujourd'hui (persistées
 * localement) même si aucune notification réelle n'est encore envoyée —
 * elles seront lues par le futur fournisseur push sans modification.
 */
export function NotificationPreferencesScreen() {
  const [preferences, setPreferences] = useState<NotificationPreferences | null>(null);

  useEffect(() => {
    getNotificationPreferences().then(setPreferences);
  }, []);

  if (!preferences) return null;

  const update = (key: keyof NotificationPreferences, value: boolean) => {
    const next = { ...preferences, [key]: value };
    setPreferences(next);
    setNotificationPreferences(next).catch(() => {});
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Préférences de notifications</Text>
      {(Object.keys(LABELS) as (keyof NotificationPreferences)[]).map((key) => (
        <View key={key} style={styles.row}>
          <Text style={styles.label}>{LABELS[key]}</Text>
          <Switch value={preferences[key]} onValueChange={(value) => update(key, value)} trackColor={{ true: colors.primary }} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: radii.md, padding: spacing.md, marginTop: spacing.md },
  title: { color: colors.ink, fontWeight: '800', fontSize: 16, marginBottom: spacing.sm },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: spacing.sm, borderTopWidth: 1, borderTopColor: colors.border },
  label: { color: colors.ink, fontWeight: '600' },
});
