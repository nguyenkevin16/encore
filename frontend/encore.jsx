import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// TODO: testing; remove later
import { login,
         logout,
         signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);

  // TODO: testing
  window.store = store;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
});
