import cn from 'classnames';

import { Divide } from 'hamburger-react';
import React from 'react';

import styles from './BurgerMenu.module.scss';

import { IBurgerProps } from '../../../types/HeaderProps/BurgerMenuProps/IBurgerProps';

const BurgerMenu: React.FC<IBurgerProps> = ({ onClick, toggled }) => {
  return (
    <div className={cn(styles.menu)}>
      <Divide color='#e7ecf7' onToggle={onClick} toggled={toggled}></Divide>
    </div>
  );
};

export default BurgerMenu;
