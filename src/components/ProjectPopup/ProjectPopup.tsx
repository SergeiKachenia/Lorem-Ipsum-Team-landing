import cn from 'classnames';
import React, { memo, useEffect } from 'react';

import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IProjectPopupProps } from 'types/IProjectPopupProps';

import InfoBlock from './InfoBlock/InfoBlock';
import InfoBlockLoader from './InfoBlockLoader/InfoBlockLoader';
import PhotoBlock from './PhotoBlock/PhotoBlock';
import styles from './ProjectPopup.module.scss';

import { AppDispatch } from '../../store';

import { projectsSlice } from '../../store/projects';
import { loadDetails } from '../../store/projects/loadDetails';
import { selectDetails } from '../../store/projects/selectors';

const ProjectPopup: React.FC<IProjectPopupProps> = ({ closePopup }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { projectId } = useParams();
  const details = useSelector(selectDetails);

  useEffect(() => {
    void dispatch(loadDetails(Number(projectId)));
  }, [projectId]);

  const popupReset = (): void => {
    dispatch(projectsSlice.actions.resetDetails());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} onClick={() => closePopup(popupReset)} />
      <div className={styles.popupWrapper}>
        <article className={cn(styles.container, styles.popupContainer)}>
          {details !== null ? (
            <>
              <InfoBlock details={details} />
              <PhotoBlock imagesUrls={details?.imagesUrls != null ? details.imagesUrls : null} />
            </>
          ) : (
            <InfoBlockLoader />
          )}
          <MdClose className={styles.closeBtn} onClick={() => closePopup(popupReset)} />
        </article>
      </div>
    </div>
  );
};

export default memo(ProjectPopup);
