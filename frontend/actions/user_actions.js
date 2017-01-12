import * as APIUtils from '../utils/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = id => dispatch => (
  APIUtils.fetchUser(id).then(
    user => { dispatch(receiveUser(user)); })
);

export const updateUser = user => dispatch => (
  APIUtils.updateUser(user).then(
    updatedUser => { dispatch(receiveUser(updatedUser)); })
);
