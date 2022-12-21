import React, { memo } from 'react';

import Skeleton from 'react-loading-skeleton';

import styles from './InfoBlockLoader.module.scss';

import { ReactComponent as LinkIcon } from '../../../assets/icons/LinkIcon.svg';
import defaultAvatar from '../../../assets/images/avatar.png';
const InfoBlockLoader: React.FC = () => {
  return (
    <section className={styles.infoBlock}>
      <header className={styles.projectHeader}>
        <div className={styles.sceletonWrapper}>
          <Skeleton className={styles.projectHeaderText} />
        </div>
        <address className={styles.author}>
          <img className={styles.authorAvatar} src={defaultAvatar} alt='Аватар автора' />
          <Skeleton className={styles.authorName} />
        </address>
        <div className={styles.projectHeaderBottom}>
          <Skeleton className={styles.date} />|
          <Skeleton className={styles.target} />|
          <Skeleton className={styles.technologies} />
        </div>
      </header>
      <div className={styles.sceletonWrapper}>
        <Skeleton count={15} className={styles.description} />
      </div>
      <footer className={styles.projectFooter}>
        <LinkIcon />
        <Skeleton className={styles.projectFooterLink} />
      </footer>
    </section>
  );
};
export default memo(InfoBlockLoader);
