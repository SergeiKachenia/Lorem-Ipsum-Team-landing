import React, { useMemo } from 'react';

import { ProjectCard } from './ProjectCard/ProjectCard';
import styles from './ProjectCards.module.scss';

import { shortProjectsInfo } from '../../constants/projects';

export const ProjectCards: React.FC = () => {
  const mappedProjectCards = useMemo(
    () =>
      shortProjectsInfo.map((p) => (
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
      )),
    [shortProjectsInfo],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{mappedProjectCards}</div>
    </div>
  );
};
