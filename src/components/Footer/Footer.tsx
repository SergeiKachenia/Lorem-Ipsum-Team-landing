import React from 'react';

import styles from './Footer.module.scss';

import { locales } from '../../constants/localesModules/Footer';
import { TextLocales } from '../common/TextLocales/TextLocales';

const Footer: React.FC = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.text}>
          <TextLocales locale={(l) => locales.ProjectCreationTime[l]} />{' '}
          <time dateTime={'2022-11-30 19:45'}>19:45 30/11/2022</time>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
