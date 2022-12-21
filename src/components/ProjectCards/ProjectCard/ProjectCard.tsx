import { ReactComponent as RoundArrow } from 'assets/icons/RoundArrow.svg';
import defaultAvatar from 'assets/images/avatar.png';
import defaultPreview from 'assets/images/defaultProjectImage.png';
import React, { useMemo } from 'react';

import { Link } from 'react-router-dom';
import { IProjectCardProps } from 'types/IProject';

import styles from './ProjectCard.module.scss';

import { StackLabel } from '../../StackLabel/StackLabel';

export const ProjectCard: React.FC<IProjectCardProps> = ({
  id,
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
    <Link to={`/projects/${String(id)}`} className={styles.link}>
      <article className={styles.wrapper}>
        <div className={styles.preview}>
          <img
            className={styles.previewImage}
            src={imageUrl !== null ? imageUrl : defaultPreview}
            alt='Превью проекта'
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <address className={styles.author}>
            <img
              className={styles.authorAvatar}
              src={author.avatarUrl !== null ? author.avatarUrl : defaultAvatar}
              alt='Аватар автора'
            />
            {author.name}
          </address>
          <div className={styles.subinfo}>
            <time className={styles.date}>{date}</time>|<address className={styles.target}>{target}</address>|
            <div className={styles.technologies}>{stackLabels}</div>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.arrowWrapper}>
          <span className={styles.arrowRotate}>
            <RoundArrow className={styles.arrow} />
          </span>
        </div>
      </article>
    </Link>
  );
};
