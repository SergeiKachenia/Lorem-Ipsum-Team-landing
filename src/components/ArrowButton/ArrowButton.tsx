import cn from 'classnames';
import React from 'react';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import styles from './styles.module.scss';

import { ReactComponent as ArrowLeft } from '../../assets/icons/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/ArrowRight.svg';
import { IArrowButtonProps } from '../../types/IArrowButtonProps';

export const ArrowButton: React.FC<IArrowButtonProps> = ({ isLeft }) => {
  return <div className={cn(styles.buttonContainer)}>{isLeft ? <ArrowLeft /> : <ArrowRight />}</div>;
};
