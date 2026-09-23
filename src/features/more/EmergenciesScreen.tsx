import { useMemo } from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from '../../components/icons/Icon';
import { useI18n } from '../../i18n/I18nProvider';
import { openExternalUrl } from '../../services/externalLinks';
import { useTheme } from '../../theme/ThemeProvider';
import { fonts, radii, spacing, type } from '../../theme/tokens';

type EmergencyEntry = {
  id: string;
  labelKey: 'emergencySamu' | 'emergencyPolice' | 'emergencyFire' | 'emergencyVjr';
  detailKey: 'emergencySamuDetail' | 'emergencyPoliceDetail' | 'emergencyFireDetail' | 'emergencyVjrDetail';
  phoneDisplay: string;
  phoneTel: string;
  kind: 'phone' | 'web';
  webPath?: string;
};

const ENTRIES: EmergencyEntry[] = [
  {
    id: 'samu',
    labelKey: 'emergencySamu',
    detailKey: 'emergencySamuDetail',
    phoneDisplay: '15',
    phoneTel: 'tel:15',
    kind: 'phone',
  },
  {
    id: 'police',
    labelKey: 'emergencyPolice',
    detailKey: 'emergencyPoliceDetail',
    phoneDisplay: '17',
    phoneTel: 'tel:17',
    kind: 'phone',
  },
  {
    id: 'fire',
    labelKey: 'emergencyFire',
    detailKey: 'emergencyFireDetail',
    phoneDisplay: '18',
    phoneTel: 'tel:18',
    kind: 'phone',
  },
  {
    id: 'vjr',
    labelKey: 'emergencyVjr',
    detailKey: 'emergencyVjrDetail',
    phoneDisplay: '+221 76 559 74 74',
    phoneTel: 'tel:+221765597474',
    kind: 'phone',
  },
];

export function EmergenciesScreen() {
  const { t } = useI18n();
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const call = async (entry: EmergencyEntry) => {
    if (entry.kind === 'phone') {
      const opened = await openExternalUrl(entry.phoneTel, 'phone');
      if (!opened) {
        try {
          await Linking.openURL(entry.phoneTel);
        } catch {
          /* ignore */
        }
      }
    }
  };

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{t('emergenciesTitle')}</Text>
      <Text style={styles.caption}>{t('emergenciesCaption')}</Text>
      <View style={styles.list}>
        {ENTRIES.map((entry, index) => (
          <Pressable
            key={entry.id}
            accessibilityRole="button"
            accessibilityLabel={`${t(entry.labelKey)} ${entry.phoneDisplay}`}
            onPress={() => void call(entry)}
            style={[styles.row, index === ENTRIES.length - 1 && styles.rowLast]}
          >
            <View style={styles.iconWrap}>
              <Icon name="phone" size={18} color={colors.terreStrong} />
            </View>
            <View style={styles.body}>
              <Text style={styles.label}>{t(entry.labelKey)}</Text>
              <Text style={styles.detail}>{t(entry.detailKey)}</Text>
            </View>
            <Text style={styles.number}>{entry.phoneDisplay}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.note}>{t('emergenciesNote')}</Text>
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    wrap: { marginTop: spacing.lg },
    title: {
      color: colors.ink,
      fontFamily: fonts.bodySemiBold,
      fontSize: type.bodyLg,
      marginBottom: 4,
    },
    caption: {
      color: colors.inkSoft,
      fontFamily: fonts.body,
      fontSize: 13,
      lineHeight: 19,
      marginBottom: spacing.sm,
    },
    list: {
      backgroundColor: colors.surface,
      borderRadius: radii.lg,
      overflow: 'hidden',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      minHeight: 64,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.line,
    },
    rowLast: { borderBottomWidth: 0 },
    iconWrap: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: colors.surfaceSoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: { flex: 1 },
    label: { color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 14 },
    detail: { color: colors.inkSoft, fontFamily: fonts.body, fontSize: 12, marginTop: 2 },
    number: {
      color: colors.terreStrong,
      fontFamily: fonts.monoSemiBold,
      fontSize: 15,
    },
    note: {
      color: colors.inkSoft,
      fontFamily: fonts.body,
      fontSize: 12,
      lineHeight: 18,
      marginTop: spacing.sm,
    },
  });
}
