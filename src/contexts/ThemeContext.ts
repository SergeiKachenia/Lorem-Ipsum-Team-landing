import React from 'react';
import { IThemeContext } from 'types/contexts/IThemeContext';

export const themes = {
  dark: 'dark',
  light: 'light',
};

export const ThemeContext = React.createContext<IThemeContext | null>(null);
