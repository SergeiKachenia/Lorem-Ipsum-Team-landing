import React, { useMemo } from 'react';

import styles from './ProjectCard.module.scss';

import avatar from '../../../assets/images/avatar.png';
import defaultImage from '../../../assets/images/defaultProjectImage.png';
import { StackLabel } from '../../StackLabel/StackLabel';

interface IStackItem {
  id: number;
  technology: string;
}

interface IProjectCardProps {
  imageUrl: string | null;
  title: string;
  authorName: string;
  date: string;
  company: string;
  stack: IStackItem[];
  description: string;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({
  imageUrl,
  title,
  authorName,
  date,
  company,
  stack,
  description,
}) => {
  const stackLabels = useMemo(() => {
    return stack.map((s) => <StackLabel key={s.id} stackName={s.technology} />);
  }, [stack]);

  return (
    <article className={styles.wrapper}>
      <img className={styles.preview} src={imageUrl !== null ? imageUrl : defaultImage} alt='Превью проекта' />
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <address className={styles.author}>
          <img className={styles.authorAvatar} src={avatar} alt='Аватар' /> {authorName}
        </address>
        <div className={styles.subinfo}>
          <time className={styles.date}>{date}</time>|<address className={styles.company}>{company}</address>|
          <div className={styles.technologies}>{stackLabels}</div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};
