import cn from 'classnames';
import React from 'react';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import { IArrowButtonProps } from 'types/ArrowButtonProps/IArrowButtonProps';

import styles from './RoundArrowButton.module.scss';

import { ReactComponent as RoundArrow } from '../../assets/icons/RoundArrow.svg';

/**
 * Компонент, возврашающий иконку стрелочки
 */
export const RoundArrowButton: React.FC<IArrowButtonProps> = ({ isLeft }) => {
  return (
    <div className={cn(styles.buttonContainer)}>
      {isLeft ? <RoundArrow className={styles.roundArrowLeft} /> : <RoundArrow className={styles.roundArrowRight} />}
    </div>
  );
};
