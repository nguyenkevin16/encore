import { RECEIVE_ALL_TRACKS,
         RECEIVE_TRACK,
         REMOVE_TRACK } from '../actions/track_actions';
import { merge } from 'lodash';

const trackReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_TRACKS:
      return merge({}, action.tracks);
    case RECEIVE_TRACK:
      return merge({}, state, { [action.track.id]: action.track });
    case REMOVE_TRACK:
      let nextState = merge({}, state);
      delete nextState[action.track.id];
      return nextState;
    default:
      return state;
  }
};

export default trackReducer;
