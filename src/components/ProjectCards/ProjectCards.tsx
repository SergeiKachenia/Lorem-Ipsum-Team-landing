import React, { useContext, useMemo } from 'react';
import { TfiReload } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';

import { loadProjects } from 'store/projects/loadProjects';

import { selectProjects, selectStatus, selectFull } from 'store/projects/selectors';

import { Statuses } from 'constants/statuses';

import { ProjectCard } from './ProjectCard/ProjectCard';
import styles from './ProjectCards.module.scss';

import { locales } from '../../constants/modulesLocales/ProjectCards';
import { LanguageContext } from '../../contexts/LanguageContext';
import { TextLocales } from '../common/TextLocales/TextLocales';

export const ProjectCards: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector(selectProjects);
  const isFull = useSelector(selectFull);

  const languageContext = useContext(LanguageContext);

  const loadMoreProjects = (): void => {
    void dispatch(loadProjects());
  };

  if (projects.length === 0) {
    loadMoreProjects();
  }

  const mappedProjectCards = useMemo(() => {
    if (projects.length === 0) {
      return;
    }

    return projects.map((p) => (
      <ProjectCard
        key={p.id}
        imageUrl={p.imageUrl}
        title={p[languageContext.language].title}
        author={p[languageContext.language].author}
        date={p[languageContext.language].date}
        target={p[languageContext.language].target}
        stack={p[languageContext.language].stack}
        description={p[languageContext.language].description}
      />
    ));
  }, [projects, languageContext.language]);

  const status = useSelector(selectStatus);

  if (status !== Statuses.success) {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.cards}>{mappedProjectCards}</div>
          <div>
            <TfiReload className={styles.loader} />
          </div>
        </div>
      </div>
    ); /* Тут прелоадер */
  }

  return (
    <div className={styles.container}>
      <div className={styles.cards}>{mappedProjectCards}</div>
      {!isFull && (
        <button className={styles.loadbtn} onClick={loadMoreProjects}>
          <TextLocales locale={(l) => locales.LoadMoreProjects[l]} />
        </button>
      )}
    </div>
  );
};
