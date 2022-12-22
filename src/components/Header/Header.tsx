import cn from 'classnames';

import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import { TextLocales } from 'components/common/TextLocales/TextLocales';
import React, { RefObject, useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { locales } from 'constants/localesModules/Header';

import styles from './Header.module.scss';
import { LanguageChange } from './LanguageChange/LanguageChange';

import { ThemeChange } from './ThemeButton/ThemeChange';

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const closeMenu = (): void => {
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <nav className={styles.navigation}>
            <ul className={cn(styles.menu, { [styles.menu_active]: isOpen })}>
              <li>
                <NavLink
                  className={({ isActive }) => cn(styles.link, { [styles.link_active]: isActive })}
                  to='/'
                  onClick={closeMenu}
                >
                  <TextLocales locale={(l) => locales.aboutUs[l]} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => cn(styles.link, { [styles.link_active]: isActive })}
                  to={'/projects'}
                  onClick={closeMenu}
                >
                  <TextLocales locale={(l) => locales.ourProjects[l]} />
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.settings}>
            <LanguageChange />
            <ThemeChange />
          </div>
        </div>
        <BurgerMenu onClick={() => setOpen(!isOpen)} toggled={isOpen}></BurgerMenu>
      </div>
    </header>
  );
};

export default Header;
