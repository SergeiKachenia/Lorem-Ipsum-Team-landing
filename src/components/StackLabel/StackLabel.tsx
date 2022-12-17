import React from 'react';

import styles from './StackLabel.module.scss';

import { IStackLabelProps } from '../../types/IStack';

export const StackLabel: React.FC<IStackLabelProps> = ({ technology }) => {
  return <div className={styles.stackLabel}>{`${technology}`}</div>;
};
