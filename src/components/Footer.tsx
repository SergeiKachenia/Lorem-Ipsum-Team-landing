import React from 'react';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer_text}>Время создания проекта 19:45 30/11/2022</p>
    </div>
  );
};

export default Footer;
