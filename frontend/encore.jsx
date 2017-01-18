import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';

import { createComment,
         updateComment,
         deleteComment } from './utils/comment_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

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
  window.createComment = createComment;
  window.updateComment = updateComment;
  window.deleteComment = deleteComment;
});
