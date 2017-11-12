import React from 'react';

import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from 'containers/layouts/App';
import Main from 'containers/layouts/Main';

import UsersPage from 'containers/pages/UsersPage';
import UserCreatePage from 'containers/pages/UserCreatePage';
import UserUpdatePage from 'containers/pages/UserUpdatePage';


export const configureRoutes = ({ store }) => { // eslint-disable-line
  return (
    <Route component={App}>
      <Route component={Main}>
        <Route path="/">
          <IndexRedirect to="/users" />
          <Route path="users">
            <IndexRoute component={UsersPage} />
            <Route path="create" component={UserCreatePage} />
            <Route path=":id" component={UserUpdatePage} />
          </Route>
        </Route>
      </Route>
    </Route>
  );
};
