import { useTranslation } from 'react-i18next';

export function usePointDetailViewModel(pointId: string) {
  const { t } = useTranslation();
  return {
    title: t('point.title'),
    subtitle: t('point.subtitle', { id: pointId }),
  };
}
