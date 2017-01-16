import { RECEIVE_PLAYBAR_DATA } from '../actions/playbar_actions';
import { merge } from 'lodash';

const _defaultState = {
  track_url: null,
  display: false
};

const playbarReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_PLAYBAR_DATA:
      nextState = merge({}, state, {
        track_url: action.playbarInfo.track_url,
        display: action.playbarInfo.display
      });

      return nextState;
    default:
      return state;
  }
};

export default playbarReducer;
