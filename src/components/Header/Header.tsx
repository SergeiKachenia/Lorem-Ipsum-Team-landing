import cn from 'classnames';

import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <ul className={styles.list}>
            <li>
              <NavLink className={({ isActive }) => cn(styles.link, { [styles.link_active]: isActive })} to='/'>
                Первая страница
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => cn(styles.link, { [styles.link_active]: isActive })}
                to={'/projects'}
              >
                Вторая страница
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
