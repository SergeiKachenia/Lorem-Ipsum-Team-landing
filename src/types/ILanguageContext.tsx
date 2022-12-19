import { locales } from '../contexts/LanguageContext';

export type LanguageType = keyof typeof locales;

export interface ILanguageContext {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}
