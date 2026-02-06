import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEs from './es/common.json';
import landingEs from './es/landing.json';
import blogEs from './es/blog.json';
import commonEn from './en/common.json';
import landingEn from './en/landing.json';
import blogEn from './en/blog.json';

const STORAGE_KEY = 'verostock-locale';

const resources = {
  es: {
    common: commonEs as Record<string, unknown>,
    landing: landingEs as Record<string, unknown>,
    blog: blogEs as Record<string, unknown>,
  },
  en: {
    common: commonEn as Record<string, unknown>,
    landing: landingEn as Record<string, unknown>,
    blog: blogEn as Record<string, unknown>,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    defaultNS: 'common',
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    ns: ['common', 'landing', 'blog'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: STORAGE_KEY,
      caches: ['localStorage'],
    },
  });

export default i18n;
