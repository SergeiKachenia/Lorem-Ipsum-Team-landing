import React, { memo } from 'react';

import styles from './ContactInfoHeader.module.scss';

import PopUp from '../../PopUp/PopUp';

const ContactInfoHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Контактная информация</h1>
      <PopUp />
    </header>
  );
};

export const MemoizedContactInfoHeader = memo(ContactInfoHeader);
