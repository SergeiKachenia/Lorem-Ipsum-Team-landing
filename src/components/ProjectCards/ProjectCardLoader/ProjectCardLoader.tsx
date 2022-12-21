import defaultAvatar from 'assets/images/avatar.png';
import defaultPreview from 'assets/images/defaultProjectImage.png';
import React from 'react';

import Skeleton from 'react-loading-skeleton';

import styles from './ProjectCardLoader.module.scss';

export const ProjectCardLoader: React.FC = () => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.preview}>
        <img className={styles.previewImage} src={defaultPreview} alt='Превью проекта' />
      </div>
      <div className={styles.info}>
        <Skeleton className={styles.title} />
        <address className={styles.author}>
          <img className={styles.authorAvatar} src={defaultAvatar} alt='Аватар автора' />
          <Skeleton className={styles.authorName} />
        </address>
        <div className={styles.subinfo}>
          <Skeleton className={styles.date} />|
          <Skeleton className={styles.target} />|
          <Skeleton className={styles.technologies} />
        </div>
        <Skeleton count={5} className={styles.description} />
      </div>
    </article>
  );
};
