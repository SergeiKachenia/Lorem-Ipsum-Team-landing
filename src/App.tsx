import MainPage from 'pages/MainPage/MainPage';
import ProjectsPage from 'pages/ProjectsPage/ProjectsPage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/projects' element={<ProjectsPage></ProjectsPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
