import cn from 'classnames';

import { TextLocales } from 'components/common/TextLocales/TextLocales';
import { LanguageContext } from 'contexts/LanguageContext';
import React, { useContext, useMemo, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import { IOurTeamProps } from 'types/OurTeamProps/IOurTeamProps';

import { locales } from 'constants/localesModules/OurTeam';

import styles from './OurTeam.module.scss';
import './AliceCarousel.scss';

import { ArrowButton } from '../ArrowButton/ArrowButton';

import { TeamMemberCard } from '../TeamMemberCard/TeamMemberCard';

/**
 * Компонент слайдера участников команды
 */
export const OurTeam: React.FC<IOurTeamProps> = ({ teamList }) => {
  const languageContext = useContext(LanguageContext);

  const teamListMapped = useMemo(() => {
    return teamList.map((member) => (
      <div key={member.uuid} className={styles.carouselItem}>
        <TeamMemberCard
          key={member.uuid}
          name={member[languageContext.language].name}
          stackList={member[languageContext.language].stackList}
          desc={member[languageContext.language].desc}
          uuid={member.uuid}
          tgLink={member.tgLink}
          ghLink={member.gitHubLink}
          data-value={member.uuid}
        />
      </div>
    ));
  }, [teamList, languageContext.language]);

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
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <span className={styles.headerText}>
            <TextLocales locale={(l) => locales.OurTeam[l]} />
          </span>
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
    </div>
  );
};
