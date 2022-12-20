import React, { memo, useContext, useMemo } from 'react';

import styles from './InfoBlock.module.scss';

import { ReactComponent as LinkIcon } from '../../../assets/icons/LinkIcon.svg';
import defaultAvatar from '../../../assets/images/avatar.png';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { IInfoBlockProps } from '../../../types/IInfoBlockProps';
import { TextLocales } from '../../common/TextLocales/TextLocales';
import { StackLabel } from '../../StackLabel/StackLabel';

const InfoBlock: React.FC<IInfoBlockProps> = ({ details }) => {
  const languageContext = useContext(LanguageContext);

  const stackLabels = useMemo(() => {
    return details?.[languageContext.language].stack.map((s) => <StackLabel key={s.id} technology={s.technology} />);
  }, [details?.ru.stack]);

  const authorAvatarUrl = details?.[languageContext.language].author.avatarUrl;

  return (
    <section className={styles.infoBlock}>
      <header className={styles.projectHeader}>
        {details !== null ? (
          <>
            <h1 className={styles.projectHeaderText}>
              <TextLocales locale={(l) => details[l].title}></TextLocales>
            </h1>
            <address className={styles.author}>
              <img src={authorAvatarUrl !== null ? authorAvatarUrl : defaultAvatar} alt='Аватар автора' />
              <TextLocales locale={(l) => details[l].author.name}></TextLocales>
            </address>
            <div className={styles.projectHeaderBottom}>
              <time>
                <TextLocales locale={(l) => details[l].date}></TextLocales>
              </time>
              |
              <address className={styles.target}>
                <TextLocales locale={(l) => details[l].target}></TextLocales>
              </address>
              |<div className={styles.technologies}>{stackLabels}</div>
            </div>
          </>
        ) : null}
      </header>
      {details !== null ? <p className={styles.description}>{details.ru.description}</p> : null}
      <footer className={styles.projectFooter}>
        <LinkIcon />
        {details !== null ? (
          <a href={details.ru.link} className={styles.projectFooterLink}>
            <TextLocales locale={(l) => details[l].link}></TextLocales>
          </a>
        ) : null}
      </footer>
    </section>
  );
};
export default memo(InfoBlock);
