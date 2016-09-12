import React from 'react';
import ReactDOM from 'react-dom';
import { polyfill } from 'es6-promise';
import App from './containers/App';

polyfill();
ReactDOM.render(
  <App source="/dist/resume.json" />, document.getElementById('content')
);
