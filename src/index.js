import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
