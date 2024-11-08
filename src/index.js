import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

// Check if document is ready before hydrating with React Snap
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  // If there is content already, React Snap pre-rendered it, so hydrate it
  ReactDOM.hydrateRoot(rootElement, <App />);
} else {
  // Otherwise, render normally
  ReactDOM.createRoot(rootElement).render(<App />);
}

// Optional: Measuring performance
reportWebVitals();
