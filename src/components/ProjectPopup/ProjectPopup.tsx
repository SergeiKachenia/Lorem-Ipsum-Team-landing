import cn from 'classnames';
import React, { memo } from 'react';

import { MdClose } from 'react-icons/md';
import { IProjectPopupProps } from 'types/IProjectPopupProps';

import InfoBlock from './InfoBlock/InfoBlock';
import PhotoBlock from './PhotoBlock/PhotoBlock';
import styles from './ProjectPopup.module.scss';

const ProjectPopup: React.FC<IProjectPopupProps> = ({
  imagesUrls,
  title,
  author,
  date,
  target,
  stack,
  description,
  link,
  closePopup,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} onClick={closePopup} />
      <div className={styles.popupWrapper}>
        <article className={cn(styles.container, styles.popupContainer)}>
          <InfoBlock
            author={author}
            description={description}
            link={link}
            target={target}
            stack={stack}
            title={title}
            date={date}
          />
          <PhotoBlock imagesUrls={imagesUrls} />
          <MdClose className={styles.closeBtn} onClick={closePopup} />
        </article>
      </div>
    </div>
  );
};

export default memo(ProjectPopup);
