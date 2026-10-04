import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fontSizes, radii, spacing } from '@/core/theme/tokens';
import { Screen } from '@/shared/ui/Screen';

import { useProfileViewModel } from './useProfileViewModel';

export function ProfileScreen() {
  const vm = useProfileViewModel();
  return (
    <Screen title={vm.title}>
      <Text style={styles.label}>{vm.languageLabel}</Text>
      <View style={styles.row}>
        {vm.languages.map((language) => (
          <Pressable
            key={language.code}
            accessibilityRole="button"
            accessibilityState={{ selected: language.selected }}
            onPress={() => void vm.selectLanguage(language.code)}
            style={[styles.chip, language.selected && styles.chipSelected]}>
            <Text style={[styles.chipText, language.selected && styles.chipTextSelected]}>
              {language.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  label: { color: colors.boira, fontSize: fontSizes.caption },
  row: { flexDirection: 'row', gap: spacing.sm, flexWrap: 'wrap' },
  chip: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.linia,
    backgroundColor: colors.card,
  },
  chipSelected: { backgroundColor: colors.crep, borderColor: colors.far },
  chipText: { color: colors.boira, fontSize: fontSizes.body },
  chipTextSelected: { color: colors.lluna },
});
