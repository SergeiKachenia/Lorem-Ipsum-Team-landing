import React, { memo } from 'react';

import styles from './ContactInfoHeader.module.scss';

import FeedbackPopUp from '../../FeedbackPopUp/FeedbackPopUp';

const ContactInfoHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Контактная информация</h1>
      <FeedbackPopUp />
    </header>
  );
};

export const MemoizedContactInfoHeader = memo(ContactInfoHeader);
