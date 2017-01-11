import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AppContainer from './app_container.js';
import SessionFormContainer from './session/session_form_container';
import WelcomePage from './welcome/welcome';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={WelcomePage}/>
        <Route path='/login' component={SessionFormContainer}/>
        <Route path='/signup' component={SessionFormContainer}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
