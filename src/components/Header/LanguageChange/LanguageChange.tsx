import React, { useContext } from 'react';

import styles from './LanguageChange.module.scss';

import { LanguageContext, locales } from '../../../contexts/LanguageContext';
import { LanguageType } from '../../../types/ILanguageContext';

export const LanguageChange: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  const onLanguageClick = ({ target }: React.MouseEvent<HTMLDivElement>): void => {
    const menu = (target as HTMLElement).querySelector(`.${styles.languagesList}`) as HTMLElement;

    const closeMenu = ({ target }: MouseEvent): void => {
      if (![styles.currentLanguage, styles.languagesList].includes((target as HTMLElement).className)) {
        menu.classList.remove(styles.active);
        document.body.removeEventListener('click', closeMenu);
      }
    };

    if (menu != null) {
      menu.classList.add(styles.active);
      document.body.addEventListener('click', closeMenu);
    }
  };

  const changeLanguage = (language: LanguageType) => () => languageContext.setLanguage(language);

  const otherLanguages = Object.keys(locales).filter((l) => l !== languageContext.language) as LanguageType[];
  const mappedOtherLanguages = otherLanguages.map((l) => (
    <div key={l} className={styles.language} onClick={changeLanguage(l)}>
      {locales[l]}
    </div>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.currentLanguage} onClick={onLanguageClick}>
        {locales[languageContext.language]}
        <div className={styles.languagesList}>{mappedOtherLanguages}</div>
      </div>
    </div>
  );
};
