import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontSizes, radii, spacing } from '@/core/theme/tokens';

import { type ApiStatus, useApiStatusViewModel } from './useApiStatusViewModel';

const statusColor: Record<ApiStatus, string> = {
  loading: colors.boira,
  ok: colors.ras,
  error: colors.tap,
};

/** View de l'indicador d'estat de l'API: només pinta el que li dona el ViewModel. */
export function ApiStatusCard() {
  const vm = useApiStatusViewModel();
  return (
    <View style={styles.card} accessibilityLiveRegion="polite">
      <View style={[styles.dot, { backgroundColor: statusColor[vm.status] }]} />
      <View style={styles.texts}>
        <Text style={styles.title}>{vm.title}</Text>
        <Text style={styles.message}>{vm.message}</Text>
      </View>
      {vm.canRetry ? (
        <Pressable accessibilityRole="button" onPress={vm.retry} style={styles.retry}>
          <Text style={styles.retryText}>{vm.retryLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.linia,
    backgroundColor: colors.card,
  },
  dot: { width: spacing.sm, height: spacing.sm, borderRadius: radii.pill },
  texts: { flex: 1, gap: spacing.xs },
  title: { color: colors.lluna, fontSize: fontSizes.body },
  message: { color: colors.boira, fontSize: fontSizes.caption },
  retry: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: radii.pill,
    backgroundColor: colors.crep,
  },
  retryText: { color: colors.far, fontSize: fontSizes.caption },
});
