import React from 'react';

import { ProjectCard } from './ProjectCard/ProjectCard';
import styles from './ProjectCards.module.scss';

export const ProjectCards: React.FC = () => {
  return (
    <div>
      <ProjectCard
        imageUrl={null}
        title={'Название проекта #1'}
        authorName={'Роман Николаев'}
        date={'21:32 21/11/2022'}
        company={'Академия Яндекс'}
        stack={[
          { id: 1, technology: 'HTML' },
          { id: 2, technology: 'CSS' },
        ]}
        description={
          'Краткое описание проекта. Lorem ipsum dolor sit amet consectetur. Senectus sed velit libero urna sem vivamus senectus penatibus turpis. Ut enim neque malesuada quam velit diam ipsum sagittis nec. Ut consequat tempus ullamcorper vivamus. Amet neque aenean gravida maecenas...'
        }
      />
    </div>
  );
};
