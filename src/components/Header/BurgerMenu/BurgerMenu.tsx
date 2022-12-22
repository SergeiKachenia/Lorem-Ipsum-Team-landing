import cn from 'classnames';

import { Divide } from 'hamburger-react';
import React from 'react';

import { IBurgerProps } from 'types/HeaderProps/BurgerMenuProps/IBurgerProps';

import styles from './BurgerMenu.module.scss';

/**
 * Компонент бургер-меню для мобильной версии сайта
 */
const BurgerMenu: React.FC<IBurgerProps> = ({ onClick, toggled }) => {
  return (
    <div className={cn(styles.menu)}>
      <Divide color='#e7ecf7' onToggle={onClick} toggled={toggled}></Divide>
    </div>
  );
};

export default BurgerMenu;
