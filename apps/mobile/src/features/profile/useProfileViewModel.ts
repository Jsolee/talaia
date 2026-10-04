import { useTranslation } from 'react-i18next';

import { isSupportedLanguage, SUPPORTED_LANGUAGES, type Language } from '@/core/i18n';

/**
 * ViewModel del perfil. De moment només gestiona l'idioma, que serveix per provar
 * l'i18n de punta a punta; HU36–HU38 hi afegiran el compte.
 */
export function useProfileViewModel() {
  const { t, i18n } = useTranslation();
  const current: Language = isSupportedLanguage(i18n.language) ? i18n.language : 'ca';

  return {
    title: t('profile.title'),
    languageLabel: t('profile.language'),
    currentLanguage: current,
    languages: SUPPORTED_LANGUAGES.map((code) => ({
      code,
      label: t(`profile.languages.${code}`),
      selected: code === current,
    })),
    selectLanguage: (code: Language) => i18n.changeLanguage(code),
  };
}
