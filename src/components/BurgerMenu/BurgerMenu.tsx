import cn from 'classnames';

import { Divide } from 'hamburger-react';
import React from 'react';

import styles from './BurgerMenu.module.scss';

interface BurgerComponents {
  onClick: () => void;
}

const BurgerMenu: React.FC<BurgerComponents> = ({ onClick }) => {
  return (
    <div className={cn(styles.menu)}>
      <Divide color='#e7ecf7' onToggle={onClick}></Divide>
    </div>
  );
};

export default BurgerMenu;
