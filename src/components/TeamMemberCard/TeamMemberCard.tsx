import React, { useMemo } from 'react';

import { ITeamMemberCardProps } from 'types/ITeamMemberCardProps';

import styles from './TeamMemberCard.module.scss';

import { StackLabel } from '../StackLabel/StackLabel';

export const TeamMemberCard: React.FC<ITeamMemberCardProps> = ({ name, stackList, desc, uuid }) => {
  const stackLabels = useMemo(() => {
    return stackList.map((stack) => <StackLabel key={stack.id} technology={stack.technology} />);
  }, [stackList, uuid]);
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <img className={styles.cardImage} src={require(`../../assets/images/${uuid}.png`)} alt={`Аватар ${name}`} />
        <div className={styles.cardNameStack}>
          <span className={styles.cardName}>{name}</span>
          <div className={styles.cardStackList}>{stackLabels}</div>
        </div>
      </div>
      <div className={styles.cardDescription}>{desc}</div>
    </div>
  );
};
