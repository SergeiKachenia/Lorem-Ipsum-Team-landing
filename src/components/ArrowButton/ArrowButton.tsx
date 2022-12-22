import { ReactComponent as Arrow } from 'assets/icons/Arrow.svg';

import cn from 'classnames';
import React from 'react';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import { IArrowButtonProps } from 'types/ArrowButtonProps/IArrowButtonProps';

import styles from './ArrowButton.module.scss';

/**
 * Компонент, возврашающий иконку стрелочки с палочкой
 */
export const ArrowButton: React.FC<IArrowButtonProps> = ({ isLeft }) => {
  return (
    <div className={cn(styles.buttonContainer)}>
      {isLeft ? <Arrow className={styles.arrowLeft} /> : <Arrow className={styles.arrowRight} />}
    </div>
  );
};
