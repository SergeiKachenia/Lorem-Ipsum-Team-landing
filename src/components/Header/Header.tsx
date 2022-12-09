import cn from 'classnames';

import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

interface PropsType {
  activePage: number;
}

const Header: React.FC<PropsType> = ({ activePage }) => {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.link}>
          <NavLink
            className={({ isActive }) => cn(styles.header__link, { [styles.header__link_active]: isActive })}
            to='/'
          >
            Страница 1
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            className={({ isActive }) => cn(styles.header__link, { [styles.header__link_active]: isActive })}
            to={'/projects'}
          >
            Страница 2
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
