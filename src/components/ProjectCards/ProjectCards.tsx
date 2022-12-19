import React, { useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';

import { loadProjects } from 'store/projects/loadProjects';

import { selectProjects, selectStatus } from 'store/projects/selectors';

import { Statuses } from 'constants/statuses';

import { ProjectCard } from './ProjectCard/ProjectCard';
import styles from './ProjectCards.module.scss';

export const ProjectCards: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector(selectProjects);

  useEffect(() => {
    void dispatch(loadProjects());
  }, []);

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
    return <div>Загрузка</div>; /* Тут прелоадер */
  }

  return <div className={styles.container}>{mappedProjectCards}</div>;
};
