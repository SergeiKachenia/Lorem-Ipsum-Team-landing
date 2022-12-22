import ProjectPopup from 'components/ProjectPopup/ProjectPopup';
import React from 'react';

import { useNavigate } from 'react-router-dom';

/**
 * Компонент страницы попапа проекта
 */
export const ProjectPopupPage: React.FC = () => {
  const navigate = useNavigate();

  const closePopup = (popupReset: () => void): void => {
    popupReset();
    navigate('/projects');
  };

  return (
    <>
      <ProjectPopup closePopup={closePopup} />
    </>
  );
};
