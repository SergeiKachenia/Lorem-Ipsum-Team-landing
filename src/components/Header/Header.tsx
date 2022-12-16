import cn from 'classnames';

import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <ul className={cn(styles.menu, { [styles.menu_active]: isOpen })}>
            <li>
              <NavLink className={({ isActive }) => cn(styles.link, { [styles.link_active]: isActive })} to='/'>
                О нас
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => cn(styles.link, { [styles.link_active]: isActive })}
                to={'/projects'}
              >
                Наши проекты
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <BurgerMenu onClick={() => setOpen(!isOpen)}></BurgerMenu>
    </header>
  );
};

export default Header;
