// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // আপনার Tailwind CSS/Base CSS
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Reloading Error Fix: BrowserRouter is essential */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);