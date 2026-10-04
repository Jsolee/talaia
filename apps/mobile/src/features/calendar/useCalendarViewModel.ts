import { useTranslation } from 'react-i18next';

export function useCalendarViewModel() {
  const { t } = useTranslation();
  return {
    title: t('calendar.title'),
    subtitle: t('calendar.subtitle'),
  };
}
