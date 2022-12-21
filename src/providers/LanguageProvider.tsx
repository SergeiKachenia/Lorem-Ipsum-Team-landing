import { LanguageContext, locales } from 'contexts/LanguageContext';
import React from 'react';
import { LanguageType } from 'types/ILanguageContext';

export const getLocale = (): LanguageType => {
  const locale = `${window?.localStorage?.getItem('locale') as string}` as LanguageType;
  if (Object.keys(locales).includes(locale)) return locale;

  const userLanguage = window.navigator.language;
  const supportedLanguage = Object.keys(locales).find((l) => l.includes(userLanguage)) as LanguageType;

  return supportedLanguage !== undefined ? supportedLanguage : 'en';
};

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = React.useState<LanguageType>(getLocale);

  React.useEffect(() => {
    document.documentElement.dataset.language = language;
    document.documentElement.lang = language;
    localStorage.setItem('locale', language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
