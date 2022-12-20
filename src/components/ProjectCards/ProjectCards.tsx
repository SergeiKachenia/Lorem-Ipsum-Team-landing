import React, { useMemo } from 'react';
import { TfiReload } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';

import { loadProjects } from 'store/projects/loadProjects';

import { selectProjects, selectStatus, selectFull } from 'store/projects/selectors';

import { Statuses } from 'constants/statuses';

import { ProjectCard } from './ProjectCard/ProjectCard';
import styles from './ProjectCards.module.scss';

import { IShortProjectInfo } from '../../types/IProject';

export const ProjectCards: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects: IShortProjectInfo[] = useSelector(selectProjects);
  const isFull: boolean = useSelector(selectFull);

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
        title={p.ru.title}
        author={p.ru.author}
        date={p.ru.date}
        target={p.ru.target}
        stack={p.ru.stack}
        description={p.ru.description}
      />
    ));
  }, [projects]);

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
          Загрузить ещё проекты
        </button>
      )}
    </div>
  );
};
