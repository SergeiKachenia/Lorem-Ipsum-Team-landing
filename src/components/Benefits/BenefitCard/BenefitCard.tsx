import React from 'react';
import { IBenefitCardProps } from 'types/BenefitsProps/BenefitCardProps/IBenefitCardProps';

import styles from './BenefitCard.module.scss';

/**
 * Компонент карточки преимущества
 */
export const BenefitCard: React.FC<IBenefitCardProps> = ({ Icon, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <Icon className={styles.icon} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
