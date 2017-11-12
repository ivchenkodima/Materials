import { handleActions, combineActions } from 'redux-actions';
import { API_URL } from 'config';
import { invoke } from './api';
import { normalize } from 'normalizr';
import { user } from 'schemas';
import { createUrl } from 'helpers/url';

export const fetchUsersList = params => invoke({
  endpoint: createUrl(`${API_URL}/admin/users/`, params),
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
  types: ['users/FETCH_USERS_LIST_REQUEST', {
    type: 'users/FETCH_USERS_LIST_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, [user])
    ),
  }, 'users/FETCH_USER_LIST_FAILURE'],
});

export const getUserByToken = token => invoke({
  endpoint: `${API_URL}/admin/tokens/${token}/user`,
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
  types: ['users/FETCH_USER_BY_TOKEN_REQUEST', {
    type: 'users/FETCH_USER_BY_TOKEN_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, user)
    ),
  }, 'users/FETCH_USER_BY_TOKEN_FAILURE'],
});

export const getUserByID = id => invoke({
  endpoint: `${API_URL}/admin/users/${id}`,
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
  types: ['users/FETCH_USER_BY_ID_REQUEST', {
    type: 'users/FETCH_USER_BY_ID_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, user)
    ),
  }, 'users/FETCH_USER_BY_ID_FAILURE'],
});

export const createUser = body => invoke({
  endpoint: `${API_URL}/admin/users`,
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  types: ['users/CREATE_USER_REQUEST', {
    type: 'users/CREATE_USER_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, user)
    ),
  }, 'users/CREATE_USER_FAILURE'],
  body: {
    user: {
      ...body,
    },
  },
});

export const updateUser = (body, id) => invoke({
  endpoint: `${API_URL}/admin/users/${id}`,
  method: 'PATCH',
  headers: {
    'content-type': 'application/json',
  },
  types: ['users/UPDATE_USER_REQUEST', {
    type: 'users/UPDATE_USER_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, user)
    ),
  }, 'users/UPDATE_USER_FAILURE'],
  body: {
    user: {
      ...body,
    },
  },
});
export const deleteUser = id => invoke({
  endpoint: `${API_URL}/admin/users/${id}`,
  method: 'DELETE',
  headers: {
    'content-type': 'application/json',
  },
  types: ['users/DELETE_USER_REQUEST',
    'users/DELETE_USER_SUCCESS',
    'users/DELETE_USER_FAILURE'],
});

export default handleActions({
  [combineActions(
    'users/FETCH_USERS_LIST_SUCCESS',
    'users/CREATE_USER_SUCCESS',
    'users/UPDATE_USER_SUCCESS',
    'users/FETCH_USER_BY_ID_SUCCESS'
  )]: (state, action) =>
    Object.entries(action.payload.entities.users)
      .reduce((prev, [key, value]) => ({
        ...prev,
        [key]: {
          roles: [],
          ...state[key],
          ...value,
        },
      }), state),
  'userRoles/FETCH_USER_ROLES_SUCCESS': (state, action) => ({
    ...state,
    [action.meta.userId]: {
      ...state[action.meta.userId],
      roles: action.payload.result,
    },
  }),
  'userRoles/DELETE_USER_ROLE_SUCCESS': (state, action) => ({
    ...state,
    [action.meta.userId]: {
      ...state[action.meta.userId],
      roles: state[action.meta.userId].roles.filter(i => i !== action.meta.userRoleId),
    },
  }),
}, {});
