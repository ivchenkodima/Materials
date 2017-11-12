'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';

import Layout from './components/Layout';

import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="contacts" component={ContactsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

window.onload = () => {
  ReactDOM.render(
    <Router
      history={browserHistory}
      routes={routes}
      onUpdate={() => window.scrollTo(0, 0)} />,
    document.getElementById('main'));
};
