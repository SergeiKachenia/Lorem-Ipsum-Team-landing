import React, { memo, useMemo } from 'react';

import styles from './InfoBlock.module.scss';

import { ReactComponent as LinkIcon } from '../../../assets/icons/LinkIcon.svg';
import defaultAvatar from '../../../assets/images/avatar.png';
import { IInfoBlockProps } from '../../../types/IInfoBlockProps';
import { StackLabel } from '../../StackLabel/StackLabel';

const InfoBlock: React.FC<IInfoBlockProps> = ({ author, description, link, target, stack, title, date }) => {
  const stackLabels = useMemo(() => {
    return stack.map((s) => <StackLabel key={s.id} technology={s.technology} />);
  }, [stack]);
  return (
    <section className={styles.infoBlock}>
      <header className={styles.projectHeader}>
        <h1 className={styles.projectHeaderText}>{title}</h1>
        <address className={styles.author}>
          <img src={author.avatarUrl !== null ? author.avatarUrl : defaultAvatar} alt='Аватар автора' />
          {author.name}
        </address>
        <div className={styles.projectHeaderBottom}>
          <time>{date}</time>|<address className={styles.target}>{target}</address>|
          <div className={styles.technologies}>{stackLabels}</div>
        </div>
      </header>
      <p className={styles.description}>{description}</p>
      <footer className={styles.projectFooter}>
        <LinkIcon />
        <a href={link} className={styles.projectFooterLink}>
          {link}
        </a>
      </footer>
    </section>
  );
};
export default memo(InfoBlock);
