import cn from 'classnames';
import React from 'react';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import styles from './RoundArrowButton.module.scss';

import { ReactComponent as RoundArrow } from '../../assets/icons/RoundArrow.svg';
import { IArrowButtonProps } from '../../types/IArrowButtonProps';

export const RoundArrowButton: React.FC<IArrowButtonProps> = ({ isLeft }) => {
  return (
    <div className={cn(styles.buttonContainer)}>
      {isLeft ? <RoundArrow className={styles.roundArrowLeft} /> : <RoundArrow className={styles.roundArrowRight} />}
    </div>
  );
};
