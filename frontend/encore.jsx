import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';

// TODO: testing; remove later
import { login,
         logout,
         signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  const root = document.getElementById('root');

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store}/>, root);

  // TODO: testing
  window.store = store;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
});
