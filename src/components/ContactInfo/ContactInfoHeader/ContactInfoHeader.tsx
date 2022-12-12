import React, { memo } from 'react';

import styles from './ContactInfoHeader.module.scss';

const ContactInfoHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Контактная информация</h1>
      <button className={styles.feedbackFormBtn}>Форма обратной связи</button>
    </header>
  );
};

export const MemoizedContactInfoHeader = memo(ContactInfoHeader);
