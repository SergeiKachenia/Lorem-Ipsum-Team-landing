import AboutUsPage from 'pages/AboutUsPage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AboutUsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
