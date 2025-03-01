import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* Must change for production. Commented to avoid double renders in development
  <React.StrictMode>
    <App />
  </React.StrictMode>
  */
  <App />
);
