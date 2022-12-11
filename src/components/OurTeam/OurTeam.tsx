import React, { useMemo, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import styles from './styles.module.scss';

import { ArrowButton } from '../ArrowButton/ArrowButton';
import { TeamMemberCard } from '../TeamMemberCard/TeamMemberCard';

interface teamMember {
  name: string;
  stackList: string[];
  vkLink: string;
  gitHubLink: string;
  desc: string;
  uuid: string;
}

interface PropsType {
  teamList: teamMember[];
}

export const OurTeam: React.FC<PropsType> = ({ teamList }) => {
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
    880: { items: 2 },
    1300: { items: 3, itemsFit: 'contain' },
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <span className={styles.headerText}>Наша команда</span>
          <div className={styles.buttons}>
            <div
              onClick={(e) => {
                carousel?.current?.slidePrev(e);
              }}
            >
              <ArrowButton isLeft={true} />
            </div>
            <div
              onClick={(e) => {
                carousel?.current?.slideNext(e);
              }}
            >
              <ArrowButton isLeft={false} />
            </div>
          </div>
        </div>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          disableButtonsControls
          keyboardNavigation={true}
          responsive={responsive}
          items={teamListMapped}
          ref={carousel}
          infinite={true}
        />
      </div>
    </>
  );
};
