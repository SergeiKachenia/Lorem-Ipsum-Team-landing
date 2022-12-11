import React, { useMemo } from 'react';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import styles from './styles.module.scss';

import { StackLabel } from '../StackLabel/StackLabel';

interface PropsType {
  name: string;
  stackList: string[];
  desc: string;
  uuid: string;
}

export const TeamMemberCard: React.FC<PropsType> = ({ name, stackList, desc, uuid }) => {
  const stackLabels = useMemo(() => {
    return stackList.map((stack) => <StackLabel key={uuid + stack} stackName={stack} />);
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
