// src/index.js

import React from 'react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

// Import createRoot from "react-dom/client" instead of "react-dom"
import { createRoot } from 'react-dom/client';

// Use createRoot function from react-dom/client
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
