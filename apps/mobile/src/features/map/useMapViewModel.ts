import { useTranslation } from 'react-i18next';

export function useMapViewModel() {
  const { t } = useTranslation();
  return {
    title: t('map.title'),
    subtitle: t('map.subtitle'),
  };
}
