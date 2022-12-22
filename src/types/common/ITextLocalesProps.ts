import { LanguageType } from '../contexts/ILanguageContext';

export interface ITextLocalesProps {
  locale: (language: LanguageType) => string;
}
