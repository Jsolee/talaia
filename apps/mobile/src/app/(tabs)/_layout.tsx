import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';

import { colors } from '@/core/theme/tokens';

// Icones provisionals: SF Symbols a iOS i les del template a Android/web.
// El design system (TG-113) hi posarà les icones de Talaia.
const mapIcon = require('@/assets/images/tabIcons/home.png');
const calendarIcon = require('@/assets/images/tabIcons/explore.png');

export default function TabsLayout() {
  const { t } = useTranslation();
  const ios = Platform.OS === 'ios';

  return (
    <NativeTabs
      backgroundColor={colors.card}
      indicatorColor={colors.crep}
      labelStyle={{ default: { color: colors.boira }, selected: { color: colors.lluna } }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>{t('tabs.map')}</NativeTabs.Trigger.Label>
        {ios ? (
          <NativeTabs.Trigger.Icon sf="map" />
        ) : (
          <NativeTabs.Trigger.Icon src={mapIcon} renderingMode="template" />
        )}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="calendari">
        <NativeTabs.Trigger.Label>{t('tabs.calendar')}</NativeTabs.Trigger.Label>
        {ios ? (
          <NativeTabs.Trigger.Icon sf="calendar" />
        ) : (
          <NativeTabs.Trigger.Icon src={calendarIcon} renderingMode="template" />
        )}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="perfil">
        <NativeTabs.Trigger.Label>{t('tabs.profile')}</NativeTabs.Trigger.Label>
        {ios ? (
          <NativeTabs.Trigger.Icon sf="person.crop.circle" />
        ) : (
          <NativeTabs.Trigger.Icon src={mapIcon} renderingMode="template" />
        )}
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
