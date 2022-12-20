import { TextLocales } from 'components/common/TextLocales/TextLocales';

import { ProjectCards } from 'components/ProjectCards/ProjectCards';
import ProjectPopup from 'components/ProjectPopup/ProjectPopup';
import React from 'react';

import { locales } from 'constants/modulesLocales/ProjectsPage';
import { projectsInfo } from 'constants/projects';

import styles from './ProjectsPage.module.scss';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <TextLocales locale={(l) => locales.OurProjects[l]} />
        </h1>
        <h1 className={styles.title}>Наши проекты</h1>
        <ProjectCards />
      </div>
      <ProjectPopup
        author={projectsInfo[0].author}
        date={projectsInfo[0].date}
        target={projectsInfo[0].target}
        stack={projectsInfo[0].stack}
        description={projectsInfo[0].description}
        imagesUrls={projectsInfo[0].imagesUrls}
        title={projectsInfo[0].title}
        link={projectsInfo[0].link}
        closePopup={() => {
          alert('insert handler there');
        }}
      />
    </>
  );
};

export default ProjectsPage;
