import { TextLocales } from 'components/common/TextLocales/TextLocales';
import React from 'react';

import { ICallToActionProps } from 'types/CallToActionProps/ICallToActionProps';

import { locales } from 'constants/localesModules/CallToAction';

import styles from './CallToAction.module.scss';

/**
 * Компонент CallToAction секции
 */
const CallToAction: React.FC<ICallToActionProps> = ({ scrollContactInfo, scrollDown }) => {
  return (
    <section className={styles.CTAWrapper}>
      <div className={styles.container}>
        <div className={styles.CTAHeaderContainer}>
          <h2 className={styles.CTAHeaderText}>
            <TextLocales locale={(l) => locales.HeaderText[l]} />
          </h2>
          <span className={styles.CTADescription}>
            <TextLocales locale={(l) => locales.Description[l]} />
          </span>
        </div>
        <button onClick={scrollContactInfo} className={styles.CTAButton}>
          <TextLocales locale={(l) => locales.Order[l]} />
        </button>
        <button onClick={scrollDown} className={styles.CTAScrollButton}>
          <div className={styles.icon} />
          <span className={styles.caption}>SCROLL DOWN</span>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
