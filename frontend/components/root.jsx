import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AppContainer from './app_container.js';
import WelcomePage from './welcome/welcome';
import UserContainer from './user/user_container';
import DiscoverContainer from './discover/discover_container';

import { fetchUser } from '../actions/user_actions';
import { fetchTracks } from '../actions/track_actions';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={WelcomePage}/>
        <Route path='discover' component={DiscoverContainer} onEnter={ store.dispatch(fetchTracks()) }/>
        <Route path='users/:userId' component={UserContainer} onEnter={ _loadUser(store) }/>
      </Route>
    </Router>
  </Provider>
);

const _loadUser = store => (nextState) => {
  store.dispatch(fetchUser(nextState.params.userId));
  store.dispatch(fetchTracks());
};

export default Root;
