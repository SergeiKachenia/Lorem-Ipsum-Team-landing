import { LanguageContext } from 'contexts/LanguageContext';
import React, { useContext, useMemo } from 'react';

import { benefits } from 'constants/benefits';

import { BenefitCard } from './BenefitCard/BenefitCard';

import styles from './Benefits.module.scss';

import { locales } from '../../constants/modulesLocales/Benefits';
import { TextLocales } from '../common/TextLocales/TextLocales';

export const Benefits: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  const mappedBenefitCards = useMemo(
    () =>
      benefits.map((b) => {
        return (
          <BenefitCard
            key={b.id}
            Icon={b.Icon}
            title={b[languageContext.language].title}
            description={b[languageContext.language].description}
          />
        );
      }),
    [languageContext.language],
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <TextLocales locale={(l) => locales.WhyUs[l]} />
      </h1>
      <div className={styles.items}>{mappedBenefitCards}</div>
    </div>
  );
};
