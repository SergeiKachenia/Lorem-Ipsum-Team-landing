import cn from 'classnames';
import React, { memo, useMemo, useRef } from 'react';

import AliceCarousel from 'react-alice-carousel';

import styles from './styles.module.scss';

import { IPhotoBlockProps } from '../../../types/IPhotoBlockProps';
import { RoundArrowButton } from '../../RoundArrowButton/RoundArrowButton';

const PhotoBlock: React.FC<IPhotoBlockProps> = ({ imagesUrls }) => {
  const imgList = useMemo(() => {
    if (imagesUrls === null || imagesUrls.length === 0) {
      return undefined;
    }
    return imagesUrls.map((url: string) => (
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
  );
};

export default memo(PhotoBlock);
