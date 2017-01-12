import * as APIUtils from '../utils/track_api_util';

export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

// sync actions
export const receiveAllTracks = (tracks) => ({
  type: RECEIVE_ALL_TRACKS,
  tracks
});

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
});

export const removeTrack = (track) => ({
  type: REMOVE_TRACK,
  track
});

// async actions
export const fetchTracks = () => dispatch => {
  APIUtils.fetchTracks()
    .then(tracks => dispatch(receiveAllTracks(tracks)));
};

export const fetchTrack = (id) => dispatch => {
  APIUtils.fetchTrack(id)
    .then(track => dispatch(receiveTrack(track)));
};

export const createTrack = (track) => dispatch => {
  APIUtils.createTrack(track)
    .then(newTrack => dispatch(receiveTrack(newTrack)));
};

export const updateTrack = (track) => dispatch => {
  APIUtils.updateTrack(track)
    .then(updatedTrack => dispatch(receiveTrack(updatedTrack)));
};

export const deleteTrack = (id) => dispatch => {
  APIUtils.deleteTrack(id)
    .then(deletedTrack => dispatch(removeTrack(deletedTrack)));
};
