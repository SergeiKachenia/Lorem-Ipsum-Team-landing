import React, { useMemo } from 'react';

import styles from './ProjectCard.module.scss';

import defaultAvatar from '../../../assets/images/avatar.png';
import defaultPreview from '../../../assets/images/defaultProjectImage.png';

import { IProjectCardProps } from '../../../types/IProject';
import { StackLabel } from '../../StackLabel/StackLabel';

export const ProjectCard: React.FC<IProjectCardProps> = ({
  imageUrl,
  title,
  author,
  date,
  target,
  stack,
  description,
}) => {
  const stackLabels = useMemo(() => {
    return stack.map((s) => <StackLabel key={s.id} technology={s.technology} />);
  }, [stack]);

  return (
    <article className={styles.wrapper}>
      <img className={styles.preview} src={imageUrl !== null ? imageUrl : defaultPreview} alt='Превью проекта' />
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <address className={styles.author}>
          <img
            className={styles.authorAvatar}
            src={author.avatarUrl !== null ? author.avatarUrl : defaultAvatar}
            alt='Аватар автора'
          />{' '}
          {author.name}
        </address>
        <div className={styles.subinfo}>
          <time className={styles.date}>{date}</time>|<address className={styles.target}>{target}</address>|
          <div className={styles.technologies}>{stackLabels}</div>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};
