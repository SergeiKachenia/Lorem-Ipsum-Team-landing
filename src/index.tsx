import React from 'react';
import ReactDOM from 'react-dom/client';

import './fonts/YS/stylesheet.css';
import { App } from './App';
import ThemeProvider from './providers/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
