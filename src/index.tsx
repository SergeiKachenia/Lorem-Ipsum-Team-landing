import LanguageProvider from 'providers/LanguageProvider';
import ThemeProvider from 'providers/ThemeProvider';

import React from 'react';
import ReactDOM from 'react-dom/client';

import './fonts/YS/stylesheet.css';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
