import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import ProjectsPage from 'pages/ProjectsPage/ProjectsPage';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ProjectPopupPage } from './pages/ProjectPopupPage/ProjectPopupPage';
import { store } from './store';
import 'react-loading-skeleton/dist/skeleton.css';

export const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index element={<AboutUsPage />} />
            <Route path={'/projects/'}>
              <Route path={''} element={<ProjectsPage />} />
              <Route
                path={':projectId'}
                element={
                  <>
                    <ProjectPopupPage />
                    <ProjectsPage />
                  </>
                }
              />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};
