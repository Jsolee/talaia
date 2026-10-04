import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ca from './locales/ca.json';
import en from './locales/en.json';
import es from './locales/es.json';

export const SUPPORTED_LANGUAGES = ['ca', 'es', 'en'] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: Language = 'ca';

export const resources = {
  ca: { translation: ca },
  es: { translation: es },
  en: { translation: en },
} as const;

export function isSupportedLanguage(code: string | null | undefined): code is Language {
  return SUPPORTED_LANGUAGES.includes(code as Language);
}

/** Idioma inicial: el del dispositiu si el suportem; si no, català. */
export function detectLanguage(): Language {
  const deviceLanguage = getLocales()[0]?.languageCode;
  return isSupportedLanguage(deviceLanguage) ? deviceLanguage : DEFAULT_LANGUAGE;
}

void i18n.use(initReactI18next).init({
  resources,
  lng: detectLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
  returnNull: false,
});

export default i18n;
