import React from 'react';

import { ILanguageContext, LanguageType } from '../types/contexts/ILanguageContext';

export const locales = {
  ru: 'Русский',
  en: 'English',
};

export const LanguageContext = React.createContext<ILanguageContext>({
  language: Object.keys(locales)[0] as LanguageType,
  setLanguage: (language: LanguageType) => null,
});
