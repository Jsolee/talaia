import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, fontSizes, spacing } from '@/core/theme/tokens';

type ScreenProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
}>;

/**
 * Esquelet comú d'una pantalla: fons de nit, títol i subtítol.
 * Provisional fins al design system (TG-113), que hi posarà la tipografia de la marca.
 */
export function Screen({ title, subtitle, children }: ScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text accessibilityRole="header" style={styles.title}>
          {title}
        </Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.body}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.nit,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    gap: spacing.sm,
  },
  title: {
    color: colors.lluna,
    fontSize: fontSizes.title,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.boira,
    fontSize: fontSizes.body,
    lineHeight: fontSizes.body * 1.4,
  },
  body: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.md,
  },
});
