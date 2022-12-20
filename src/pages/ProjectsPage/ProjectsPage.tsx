import { TextLocales } from 'components/common/TextLocales/TextLocales';

import { ProjectCards } from 'components/ProjectCards/ProjectCards';
import React from 'react';

import { locales } from 'constants/modulesLocales/ProjectsPage';

import styles from './ProjectsPage.module.scss';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <TextLocales locale={(l) => locales.OurProjects[l]} />
        </h1>
      </div>
      <ProjectCards />
    </>
  );
};

export default ProjectsPage;
