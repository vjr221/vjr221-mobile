import { useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { colors, radii, spacing } from '../../theme/tokens';
import { getNotificationPreferences, setNotificationPreferences, type NotificationPreferences } from '../../services/notificationService';
import { useI18n } from '../../i18n/I18nProvider';

/**
 * Préférences de notifications. Fonctionnent dès aujourd'hui (persistées
 * localement) même si aucune notification réelle n'est encore envoyée —
 * la mention l'indique explicitement à l'utilisateur (voir
 * `notificationPrefsCaption`), pour ne jamais laisser croire qu'activer un
 * interrupteur déclenche un envoi réel.
 */
export function NotificationPreferencesScreen() {
  const { t, locale } = useI18n();
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

  // Libellés dédiés (les clés génériques 'news'/'tourism'/'events' désignent des
  // univers de contenu, pas des catégories de notification à proprement parler) :
  const labels: Record<keyof NotificationPreferences, string> = {
    general: locale === 'fr' ? 'Notifications générales' : 'Yégle yu bàyyi',
    actualites: t('news'),
    evenements: t('events'),
    tourisme: t('tourism'),
    recommandations: locale === 'fr' ? 'Recommandations' : 'Jottali',
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{t('notificationPrefsTitle')}</Text>
      <Text style={styles.caption}>{t('notificationPrefsCaption')}</Text>
      {(Object.keys(labels) as (keyof NotificationPreferences)[]).map((key) => (
        <View key={key} style={styles.row}>
          <Text style={styles.label}>{labels[key]}</Text>
          <Switch value={preferences[key]} onValueChange={(value) => update(key, value)} trackColor={{ true: colors.primary }} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: radii.md, padding: spacing.md, marginTop: spacing.md },
  title: { color: colors.ink, fontWeight: '800', fontSize: 16, marginBottom: 4 },
  caption: { color: colors.muted, fontSize: 12, lineHeight: 17, marginBottom: spacing.sm },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: spacing.sm, borderTopWidth: 1, borderTopColor: colors.border },
  label: { color: colors.ink, fontWeight: '600' },
});
