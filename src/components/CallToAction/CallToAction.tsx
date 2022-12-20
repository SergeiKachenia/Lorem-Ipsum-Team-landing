import React from 'react';

import styles from './CallToAction.module.scss';

import { ICallToActionProps } from '../../types/ICallToActionProps';

const CallToAction: React.FC<ICallToActionProps> = ({ scrollContactInfo, scrollDown }) => {
  return (
    <section className={styles.CTAContainer}>
      <div className={styles.CTAHeaderContainer}>
        <h2 className={styles.CTAHeaderText}>Lorem ipsum dolor sit.</h2>
        <span className={styles.CTADescription}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
        </span>
      </div>
      <button onClick={scrollContactInfo} className={styles.CTAButton}>
        Заказать
      </button>
      <button onClick={scrollDown} className={styles.CTAScrollButton}>
        <div className={styles.icon} />
        <span className={styles.caption}>SCROLL DOWN</span>
      </button>
    </section>
  );
};

export default CallToAction;
