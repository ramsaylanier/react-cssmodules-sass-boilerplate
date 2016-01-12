import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import { Router, browserHistory, IndexRoute, Route } from 'react-router';

import App from './App.js';
import HomePage from './components/Page/_homePage.js';


render((
  <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={HomePage}/>
      </Route>
  </Router>
), document.getElementById('root'))
