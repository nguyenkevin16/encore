import * as APIUtils from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

// Sync
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// Async
export const signup = user => dispatch => (
  APIUtils.signup(user).then(
    currentUser => { dispatch(receiveCurrentUser(currentUser)); }
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = user => dispatch => (
  APIUtils.login(user).then(
    currentUser => { dispatch(receiveCurrentUser(currentUser)); }
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtils.logout().then(
    () => { dispatch(receiveCurrentUser(null)); }
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);
