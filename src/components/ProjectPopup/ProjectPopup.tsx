import { ReactComponent as LinkIcon } from 'assets/icons/LinkIcon.svg';
import defaultAvatar from 'assets/images/avatar.png';
import cn from 'classnames';
import React, { useMemo, useRef } from 'react';

import AliceCarousel from 'react-alice-carousel';
import { MdClose } from 'react-icons/md';
import { IProjectPopupProps } from 'types/IProjectPopupProps';

import styles from './styles.module.scss';

import { RoundArrowButton } from '../RoundArrowButton/RoundArrowButton';
import { StackLabel } from '../StackLabel/StackLabel';

export const ProjectPopup: React.FC<IProjectPopupProps> = ({
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
  const stackLabels = useMemo(() => {
    return stack.map((s) => <StackLabel key={s.id} technology={s.technology} />);
  }, [stack]);
  const imgList = useMemo(() => {
    if (imagesUrls === null || imagesUrls.length === 0) {
      return undefined;
    }
    return imagesUrls.map((url) => (
      <img className={styles.carouselItem} key={url} src={url} alt={'Фотография проекта'} />
    ));
  }, [imagesUrls]);
  const responsive = {
    0: { items: 1 },
  };
  const nextSlideHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    carousel?.current?.slideNext(e);
  };
  const prevSlideHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    carousel?.current?.slidePrev(e);
  };
  const carousel = useRef<AliceCarousel>(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} onClick={closePopup} />
      <div className={styles.popupWrapper}>
        <article className={cn(styles.container, styles.popupContainer)}>
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
          <section className={cn(styles.photoBlock, { [styles.hidden]: typeof imgList === 'undefined' })}>
            <div className={styles.buttons}>
              <button className={styles.button} onClick={prevSlideHandler}>
                <RoundArrowButton isLeft={true} />
              </button>
              <button className={styles.button} onClick={nextSlideHandler}>
                <RoundArrowButton isLeft={false} />
              </button>
            </div>
            <AliceCarousel
              disableButtonsControls
              disableDotsControls
              responsive={responsive}
              items={imgList}
              ref={carousel}
              infinite={true}
              paddingLeft={0}
              paddingRight={0}
              mouseTracking
            />
          </section>
          <MdClose className={styles.closeBtn} onClick={closePopup} />
        </article>
      </div>
    </div>
  );
};
