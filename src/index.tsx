import React from 'react';
import ReactDOM from 'react-dom/client';

import './fonts/YS/stylesheet.css';
import { App } from './App';
import LanguageProvider from './providers/LanguageProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
);
