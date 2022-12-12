import cn from 'classnames';

import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <ul className={cn(styles.menu, { [styles.menu_active]: isOpen })}>
          <li>
            <NavLink className={({ isActive }) => cn(styles.link, { [styles.link_active]: isActive })} to='/'>
              Первая страница
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => cn(styles.link, { [styles.link_active]: isActive })} to={'/projects'}>
              Вторая страница
            </NavLink>
          </li>
        </ul>
      </nav>
      <BurgerMenu onClick={() => setOpen(!isOpen)}></BurgerMenu>
    </header>
  );
};

export default Header;
