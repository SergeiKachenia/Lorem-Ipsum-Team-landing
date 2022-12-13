import cn from 'classnames';

import React, { useMemo, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import styles from './OurTeam.module.scss';
import './AliceCarousel.scss';

import { IOurTeamProps } from '../../types/IOurTeamProps';
import { ArrowButton } from '../ArrowButton/ArrowButton';
import { TeamMemberCard } from '../TeamMemberCard/TeamMemberCard';

export const OurTeam: React.FC<IOurTeamProps> = ({ teamList }) => {
  const teamListMapped = useMemo(() => {
    return teamList.map((member) => (
      <div key={member.uuid} className={styles.carouselItem}>
        <TeamMemberCard
          key={member.uuid}
          name={member.name}
          stackList={member.stackList}
          desc={member.desc}
          uuid={member.uuid}
          data-value={member.uuid}
        />
      </div>
    ));
  }, [teamList]);
  const carousel = useRef<AliceCarousel>(null);
  const responsive = {
    0: { items: 1 },
    650: { items: 2 },
    1024: { items: 3 },
    1300: { items: 3, itemsFit: 'contain' },
  };
  const nextSlideHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    carousel?.current?.slideNext(e);
  };
  const prevSlideHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    carousel?.current?.slidePrev(e);
  };
  const renderDotsItem = ({ isActive }: { isActive: boolean }): React.ReactNode => {
    return <div className={cn([styles.currentPageItem, { [styles.active]: isActive }])} />;
  };

  return (
    <section className={styles.ourTeam}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <span className={styles.headerText}>Наша команда</span>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={prevSlideHandler}>
              <ArrowButton isLeft={true} />
            </button>
            <button className={styles.button} onClick={nextSlideHandler}>
              <ArrowButton isLeft={false} />
            </button>
          </div>
        </div>
        <AliceCarousel
          disableButtonsControls
          responsive={responsive}
          items={teamListMapped}
          ref={carousel}
          renderDotsItem={renderDotsItem}
          infinite={true}
          mouseTracking
        />
      </div>
    </section>
  );
};
