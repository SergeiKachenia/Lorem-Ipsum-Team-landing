import React from 'react';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import styles from './styles.module.scss';

import { IStackLabelProps } from '../../types/IStackLabelProps';

export const StackLabel: React.FC<IStackLabelProps> = ({ stackName }) => {
  return <div className={styles.stackLabel}>{`${stackName}`}</div>;
};
