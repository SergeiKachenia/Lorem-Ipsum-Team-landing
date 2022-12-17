import AboutUsPage from 'pages/AboutUsPage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index element={<AboutUsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
