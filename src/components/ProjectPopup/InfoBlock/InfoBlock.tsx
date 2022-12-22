import { ReactComponent as LinkIcon } from 'assets/icons/LinkIcon.svg';
import defaultAvatar from 'assets/images/avatar.png';
import { TextLocales } from 'components/common/TextLocales/TextLocales';
import { LanguageContext } from 'contexts/LanguageContext';
import React, { memo, useContext, useMemo } from 'react';
import { IInfoBlockProps } from 'types/PropjectPopupProps/InfoBlockProps/IInfoBlockProps';

import styles from './InfoBlock.module.scss';

import { StackLabel } from '../../StackLabel/StackLabel';

/**
 * Компонент c детальной ифнормацией о проекте
 */
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
              <img
                className={styles.authorAvatar}
                src={authorAvatarUrl !== null ? authorAvatarUrl : defaultAvatar}
                alt='Аватар автора'
              />
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
      {details !== null ? (
        <p className={styles.description}>
          <TextLocales locale={(l) => details[l].description}></TextLocales>
        </p>
      ) : null}
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
