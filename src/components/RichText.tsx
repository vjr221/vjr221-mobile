import { useMemo } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { fonts, spacing, type } from '../theme/tokens';
import type { RichBlock, RichRun } from '../services/richText';

export function RichText({ blocks }: { blocks: RichBlock[] }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View>
      {blocks.map((block, index) => {
        switch (block.kind) {
          case 'heading':
            return <Text key={index} selectable style={[styles.heading, block.level === 2 ? styles.h2 : block.level === 3 ? styles.h3 : styles.h4]}>{renderRuns(block.runs, styles, colors)}</Text>;
          case 'quote':
            return <View key={index} style={styles.quoteWrap}><View style={styles.quoteBar} /><Text selectable style={styles.quote}>{renderRuns(block.runs, styles, colors)}</Text></View>;
          case 'listItem':
            return <View key={index} style={styles.listRow}><Text style={styles.listMarker}>{block.ordered ? `${block.index}.` : '•'}</Text><Text selectable style={styles.listText}>{renderRuns(block.runs, styles, colors)}</Text></View>;
          case 'paragraph':
          default:
            return <Text key={index} selectable style={styles.paragraph}>{renderRuns(block.runs, styles, colors)}</Text>;
        }
      })}
    </View>
  );
}

function renderRuns(runs: RichRun[], styles: ReturnType<typeof makeStyles>, colors: ReturnType<typeof useTheme>['colors']) {
  return runs.map((run, i) => {
    if (run.text === '\n') return '\n';
    const runStyle = [run.bold && styles.bold, run.italic && styles.italic, run.href && { color: colors.terreStrong, textDecorationLine: 'underline' as const }];
    if (run.href) {
      const url = run.href;
      return <Text key={i} style={runStyle} onPress={() => Linking.openURL(url).catch(() => {})}>{run.text}</Text>;
    }
    return <Text key={i} style={runStyle}>{run.text}</Text>;
  });
}

function makeStyles(colors: ReturnType<typeof useTheme>['colors']) {
  return StyleSheet.create({
    paragraph: { color: colors.ink, lineHeight: 27, fontSize: type.bodyLg, marginTop: spacing.lg, fontFamily: fonts.body },
    heading: { color: colors.ink, fontFamily: fonts.displaySemiBold, marginTop: spacing.xl },
    h2: { fontSize: 22, lineHeight: 28 },
    h3: { fontSize: 19, lineHeight: 25 },
    h4: { fontSize: 16, lineHeight: 22 },
    bold: { fontFamily: fonts.bodyBold },
    italic: { fontFamily: fonts.serifItalic },
    quoteWrap: { flexDirection: 'row', marginTop: spacing.lg, gap: spacing.sm },
    quoteBar: { width: 3, borderRadius: 2, backgroundColor: colors.safran, marginTop: 3 },
    quote: { flex: 1, color: colors.inkSoft, fontFamily: fonts.serifItalic, fontSize: type.bodyLg, lineHeight: 26 },
    listRow: { flexDirection: 'row', marginTop: spacing.sm, gap: spacing.sm, paddingRight: spacing.xs },
    listMarker: { color: colors.terreStrong, fontFamily: fonts.bodyBold, fontSize: type.bodyLg, lineHeight: 26, minWidth: 18 },
    listText: { flex: 1, color: colors.ink, fontFamily: fonts.body, fontSize: type.bodyLg, lineHeight: 26 },
  });
}
