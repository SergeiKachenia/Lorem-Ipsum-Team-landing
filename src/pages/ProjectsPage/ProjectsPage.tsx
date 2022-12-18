import React from 'react';

import styles from './ProjectsPage.module.scss';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Наши проекты</h1>
      </div>
    </>
  );
};

export default ProjectsPage;
