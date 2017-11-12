import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import { denormalize } from 'normalizr';
import * as schemas from 'schemas';

import loading from 'redux/loading';
import users from 'redux/users';


import Aside from 'containers/blocks/Aside/redux';

import UsersPage from 'containers/pages/UsersPage/redux';

const blocks = combineReducers({
  Aside,
});

const pages = combineReducers({
  UsersPage,
});

const data = combineReducers({
  users,
});

export default combineReducers({
  blocks,
  pages,
  data,
  // external libraries
  form,
  routing,
  loading,
});

export const getLocation = state => state.routing.locationBeforeTransitions;
export const getForm = (state, formName) => state.form[formName];

export const getUsers = (state, ids) => denormalize(ids, [schemas.user], state.data);
export const getAllUsers = state => getUsers(state, Object.keys(state.data.users));
export const getUser = (state, id) => denormalize(id, schemas.user, state.data);
