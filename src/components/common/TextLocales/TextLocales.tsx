import { LanguageContext } from 'contexts/LanguageContext';
import React, { useContext } from 'react';

import { ITextLocalesProps } from 'types/common/ITextLocalesProps';

/**
 * Компонент, в который передается callback и возвращается текст, в зависимости от текущего языка
 */
export const TextLocales: React.FC<ITextLocalesProps> = ({ locale }) => {
  const languageContext = useContext(LanguageContext);
  const localizedText = locale(languageContext.language);

  return <>{localizedText}</>;
};
