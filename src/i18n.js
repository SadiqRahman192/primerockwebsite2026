import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enGlobal from '../src/Locales/en/global.json';
import arGlobal from '../src/Locales/ar/global.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { global: enGlobal },
      ar: { global: arGlobal },
    },
    fallbackLng: 'en',
    defaultNS: 'global',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18next;