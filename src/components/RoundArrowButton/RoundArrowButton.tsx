import cn from 'classnames';
import React from 'react';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import styles from './RoundArrowButton.module.scss';

import { ReactComponent as RoundArrowLeft } from '../../assets/icons/RoundArrowLeft.svg';
import { ReactComponent as RoundArrowRight } from '../../assets/icons/RoundArrowRight.svg';
import { IArrowButtonProps } from '../../types/IArrowButtonProps';

export const RoundArrowButton: React.FC<IArrowButtonProps> = ({ isLeft }) => {
  return <div className={cn(styles.buttonContainer)}>{isLeft ? <RoundArrowLeft /> : <RoundArrowRight />}</div>;
};
