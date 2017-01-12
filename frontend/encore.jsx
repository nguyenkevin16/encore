import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';

import { fetchTracks,
         fetchTrack,
         createTrack,
         updateTrack,
         deleteTrack } from './actions/track_actions';

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
  window.fetchTracks = fetchTracks;
  window.fetchTrack = fetchTrack;
  window.createTrack = createTrack;
  window.updateTrack = updateTrack;
  window.deleteTrack = deleteTrack;
});

// TODO: Testing
// Track.create!(title: 'title', track_url: 'track_url', user_id: 1)
