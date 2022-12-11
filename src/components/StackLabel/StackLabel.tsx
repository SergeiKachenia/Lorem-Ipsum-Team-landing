import React from 'react';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import styles from './styles.module.scss';

interface PropsType {
  stackName: string;
}

export const StackLabel: React.FC<PropsType> = ({ stackName }) => {
  return <div className={styles.stackLabel}>{`${stackName}`}</div>;
};
