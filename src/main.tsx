import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from "react-redux";
import { configureStore } from './app/store'
import App from './app/App';

import './index.scss';

const store = configureStore()

const container = document.getElementById('App');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);