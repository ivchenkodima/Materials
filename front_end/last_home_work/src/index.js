import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Router, browserHistory } from 'react-router'

import Layout from './Layout';
import Main from './Main';
import Detail from './Detail';
import Dropdown from './Dropdown';

const routes = (
  <Route path="/" component={Layout}>
    <Route path="main" component={Main} />
    <Route path="detail/:date" component={Detail} />
    <Route path="dropdown" component={Dropdown} />
  </Route>
);
const initial = [
  {
    trackName: "1",
    date: '1000',
  },
  {
    trackName: "2",
    date: '2000',
  },
  {
    trackName: "27",
    date: '456743423434345',
  }
];

function playlist(state = initial, action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload,
    ];
  }

  if (action.type === 'ON_EDIT_TASK') {
    state.map(item=>{
      if (item.date === action.payload.date){
        item.trackName = action.payload.trackValue;
      }
      return item;
    })

    return [
      ...state,
    ];
  }

  return state;
}



const store = createStore(playlist);

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
     />
  </Provider>,
  document.getElementById('root')
);
