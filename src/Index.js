import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

ReactDOM.render(
  <App source="/dist/resume.json" />, document.getElementById('content')
);
