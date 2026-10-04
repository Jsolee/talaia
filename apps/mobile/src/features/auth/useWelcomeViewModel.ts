import { useTranslation } from 'react-i18next';

export function useWelcomeViewModel() {
  const { t } = useTranslation();
  return {
    title: t('welcome.title'),
    subtitle: t('welcome.subtitle'),
  };
}
