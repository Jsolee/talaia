import { DarkTheme, Stack, ThemeProvider } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';

import { AppProviders } from '@/core/providers/AppProviders';
import { colors } from '@/core/theme/tokens';

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.nit,
    card: colors.card,
    text: colors.lluna,
    border: colors.linia,
    primary: colors.far,
  },
};

function RootStack() {
  const { t } = useTranslation();
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.nit } }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="punt/[id]"
        options={{ headerShown: true, title: t('point.title'), headerTintColor: colors.lluna }}
      />
      <Stack.Screen name="benvinguda" options={{ presentation: 'modal' }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AppProviders>
      <ThemeProvider value={navigationTheme}>
        <StatusBar style="light" />
        <RootStack />
      </ThemeProvider>
    </AppProviders>
  );
}
