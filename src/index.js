import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Index from './views/login/index';
import { HashRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import fastClick from 'fastclick';
require('es6-promise').polyfill();

if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function () {
      fastClick.attach(document.body);
    },
    false
  );
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route path="/login" exact component={Index} />
      <Route path="/" exact component={App} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
