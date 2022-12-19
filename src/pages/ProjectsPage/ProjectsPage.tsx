import React from 'react';

import styles from './ProjectsPage.module.scss';

import { TextLocales } from '../../components/common/TextLocales/TextLocales';
import { locales } from '../../constants/modulesLocales/ProjectsPage';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <TextLocales locale={(l) => locales.OurProjects[l]} />
        </h1>
      </div>
    </>
  );
};

export default ProjectsPage;
