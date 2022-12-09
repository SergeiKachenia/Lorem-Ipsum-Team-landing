import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};
