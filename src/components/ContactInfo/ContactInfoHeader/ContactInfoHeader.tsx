import React, { memo } from 'react';

import styles from './ContactInfoHeader.module.scss';

import { locales } from '../../../constants/localesModules/ContactInfo';
import { TextLocales } from '../../common/TextLocales/TextLocales';
import FeedbackPopUp from '../../FeedbackPopUp/FeedbackPopUp';

const ContactInfoHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <TextLocales locale={(l) => locales.ContactInformation[l]} />
      </h1>
      <FeedbackPopUp />
    </header>
  );
};

export const MemoizedContactInfoHeader = memo(ContactInfoHeader);
