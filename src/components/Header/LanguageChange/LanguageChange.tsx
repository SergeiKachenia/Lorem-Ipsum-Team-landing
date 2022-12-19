import React from 'react';

import styles from './LanguageChange.module.scss';

export const LanguageChange: React.FC = () => {
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.currentLanguage} onClick={onLanguageClick}>
        Русский
      </div>
      <div className={styles.languagesList}>
        <div className={styles.language}>English</div>
      </div>
    </div>
  );
};
