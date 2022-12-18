import React from 'react';

import styles from './ProjectsPage.module.scss';

import { ProjectCards } from '../../components/ProjectCards/ProjectCards';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Наши проекты</h1>
        <ProjectCards />
      </div>
    </>
  );
};

export default ProjectsPage;
