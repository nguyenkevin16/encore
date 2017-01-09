import { RECEIVE_CURRENT_USER,
         RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = merge({}, state, {
        currentUser: action.currentUser,
        errors: []
      });

      return nextState;
    case RECEIVE_SESSION_ERRORS:
      nextState = merge({}, state, {
        currentUser: {},
        errors: action.errors
      });

      return nextState;
    default:
      return state;
  }
};

export default sessionReducer;
