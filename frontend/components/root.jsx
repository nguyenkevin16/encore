import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AppContainer from './app_container.js';
import WelcomePage from './welcome/welcome';
import UserContainer from './user/user_container';
import DiscoverContainer from './discover/discover_container';
import TrackShowContainer from './track/track_show_container';
import About from './about/about';
import Credits from './credits/credits';

import { fetchUser } from '../actions/user_actions';
import { fetchTracks } from '../actions/track_actions';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer} onEnter={ store.dispatch(fetchTracks()) }>
        <IndexRoute component={WelcomePage}/>
        <Route path='discover' component={DiscoverContainer}/>
        <Route path='users/:userId' component={UserContainer} onEnter={ _loadUser(store) }/>
        <Route path='tracks/:trackId' component={TrackShowContainer} />
        <Route path='about' component={About} />
        <Route path='credits' component={Credits} />
      </Route>
    </Router>
  </Provider>
);

const _loadUser = store => (nextState) => {
  store.dispatch(fetchUser(nextState.params.userId));
};

export default Root;
