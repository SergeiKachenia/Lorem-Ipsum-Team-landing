import { TextLocales } from 'components/common/TextLocales/TextLocales';
import React, { memo } from 'react';

import { locales } from 'constants/localesModules/ContactInfo';

import styles from './ContactInfoHeader.module.scss';

import FeedbackPopUp from '../../FeedbackPopUp/FeedbackPopUp';

/**
 * Компонент, возврашающий заглавную часть секции контактной информации
 */
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
