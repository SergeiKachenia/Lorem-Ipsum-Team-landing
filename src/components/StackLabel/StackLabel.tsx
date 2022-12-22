import React from 'react';

import { IStackLabelProps } from 'types/IStack';

import styles from './StackLabel.module.scss';

/**
 * Компонент технологии чего-либо
 */
export const StackLabel: React.FC<IStackLabelProps> = ({ technology }) => {
  return <div className={styles.stackLabel}>{`${technology}`}</div>;
};
