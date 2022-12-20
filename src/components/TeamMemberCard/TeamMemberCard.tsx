import { ReactComponent as GitHubIcon } from 'assets/icons/GitHubIcon.svg';
import { ReactComponent as TelegramIcon } from 'assets/icons/TelegramIcon.svg';
import React, { useMemo } from 'react';

import { ITeamMemberCardProps } from 'types/ITeamMemberCardProps';

import IconLink from './IconLink/IconLink';
import styles from './TeamMemberCard.module.scss';

import { StackLabel } from '../StackLabel/StackLabel';

export const TeamMemberCard: React.FC<ITeamMemberCardProps> = ({ name, stackList, desc, uuid, tgLink, ghLink }) => {
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
      <div className={styles.cardDescription}>
        <span>{desc}</span>
        <div className={styles.cardLinks}>
          {ghLink != null && ghLink !== '' && <IconLink IconEl={GitHubIcon} href={ghLink} />}
          {tgLink != null && tgLink !== '' && <IconLink IconEl={TelegramIcon} href={tgLink} />}
        </div>
      </div>
    </div>
  );
};
