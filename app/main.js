import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import { Router, browserHistory, IndexRoute, Route } from 'react-router';

import App from './App.js';
import * as Page from './components/Page/Pages.js';


render((
  <Router history={browserHistory}>
      <Route
        path="/"
      >
        <IndexRoute
          component={Page.HomePage}
        />
        <Route
          path=":page" component={Page.WordpressPage}
        />
      </Route>
  </Router>
), document.getElementById('root'))
