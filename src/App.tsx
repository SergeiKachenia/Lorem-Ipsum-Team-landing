import AboutUsPage from 'pages/AboutUsPage';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { store } from './store';

export const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index element={<AboutUsPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};
