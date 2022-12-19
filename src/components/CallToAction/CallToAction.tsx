import React from 'react';

import styles from './CallToAction.module.scss';

const CallToAction: React.FC = () => {
  return (
    <section className={styles.CTAContainer}>
      <div className={styles.CTAHeaderContainer}>
        <h2 className={styles.CTAHeaderText}>Lorem ipsum dolor sit.</h2>
        <span className={styles.CTADescription}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
        </span>
      </div>
      <button className={styles.CTAButton}>Заказать</button>
    </section>
  );
};

export default CallToAction;
