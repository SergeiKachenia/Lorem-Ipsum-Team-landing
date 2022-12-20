import { LanguageContext } from 'contexts/LanguageContext';
import React, { useContext } from 'react';

import { LanguageType } from 'types/ILanguageContext';

interface ITextLocalesProps {
  locale: (language: LanguageType) => string;
}
export const TextLocales: React.FC<ITextLocalesProps> = ({ locale }) => {
  const languageContext = useContext(LanguageContext);
  const localizedText = locale(languageContext.language);

  return <>{localizedText}</>;
};
