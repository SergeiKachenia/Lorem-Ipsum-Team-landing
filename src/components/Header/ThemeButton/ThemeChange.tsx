import { ReactComponent as DarkThemeIcon } from 'assets/icons/DarkTheme.svg';
import { ReactComponent as LightThemeIcon } from 'assets/icons/LightTheme.svg';

import React, { useContext } from 'react';

import styles from './ThemeChange.module.scss';

import { ThemeContext, themes } from '../../../contexts/ThemeContext';

export const ThemeChange: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  const changeTheme = (): void => {
    if (themeContext?.theme === themes.light) themeContext?.setTheme(themes.dark);
    if (themeContext?.theme === themes.dark) themeContext?.setTheme(themes.light);
  };

  return (
    <button className={styles.button} onClick={changeTheme}>
      {themeContext?.theme === themes.light ? <DarkThemeIcon /> : <LightThemeIcon />}
    </button>
  );
};
