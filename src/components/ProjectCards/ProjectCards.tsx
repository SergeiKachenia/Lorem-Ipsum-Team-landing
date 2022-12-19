import React, { useEffect, useState, useMemo } from 'react';
import { TfiReload } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'store';

import { loadProjects } from 'store/projects/loadProjects';

import { selectProjects, selectStatus, selectFull } from 'store/projects/selectors';

import { Statuses } from 'constants/statuses';

import { ProjectCard } from './ProjectCard/ProjectCard';
import styles from './ProjectCards.module.scss';

export const ProjectCards: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector(selectProjects);
  const isFull = useSelector(selectFull);
  const [loadMore, setLoad] = useState(false);

  useEffect(() => {
    void dispatch(loadProjects());
  }, []);

  if (loadMore) {
    setLoad(false);
    void dispatch(loadProjects());
  }
  console.log(isFull);
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
        <button className={styles.loadbtn} onClick={() => setLoad(true)}>
          Загрузить ещё проекты
        </button>
      )}
    </div>
  );
};
