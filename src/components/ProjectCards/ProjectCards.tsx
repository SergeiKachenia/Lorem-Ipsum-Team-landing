import React, { useState, useMemo } from 'react';

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
  const [loadMore, setLoad] = useState(false);

  if (projects.length === 0 || loadMore) {
    void dispatch(loadProjects());
    setLoad(false);
  }

  const mappedProjectCards = useMemo(() => {
    if (projects.length === 0) {
      return;
    }

    return projects.map((p) => (
      <ProjectCard
        key={p.id}
        imageUrl={p.imageUrl}
        title={p.title}
        author={p.author}
        date={p.date}
        target={p.target}
        stack={p.stack}
        description={p.description}
      />
    ));
  }, [projects]);

  const status = useSelector(selectStatus);

  if (status !== Statuses.success) {
    return <div>Загрузка</div>; /* Тут прелоадер */
  }

  return (
    <div className={styles.container}>
      <div className={styles.cards}>{mappedProjectCards}</div>
      <button onClick={() => setLoad(true)}>Загрузить ещё...</button>
    </div>
  );
};
