/* globals jest */

import UserReducer from '../reducers/user_reducer';
import TrackReducer from '../reducers/track_reducer';

describe('Reducers', () => {
  describe('UserReducer', () => {
    it('exports a function', () => {
      expect(typeof UserReducer).toEqual('function');
    })

    it('should initialize with {} as default state', () => {
      expect(UserReducer(undefined, {})).toEqual({});
    })

    it('should return previous state if action is not matched', () => {
      const oldState = { 1: 'oldUser' }
      const newState = UserReducer(oldState, { type: 'bogusType' })
      expect(newState).toEqual(oldState);
    })

    describe('RECEIVE_USER action', () => {
      let action, testUser;

      beforeEach(() => {
        testUser = { id: 1, username: 'testUser' };
        action = {
          type: 'RECEIVE_USER',
          user: testUser
        };
      })

      it('should update state w/ testUser', () => {
        const state = UserReducer(undefined, action);
        expect(state).toEqual(testUser);
      })

      it('should not modify old state', () => {
        let oldState = { 1: 'old' };
        UserReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'old' }); 
      })
    })
  })

  describe('TrackReducer', () => {
    it('exports a function', () => {
      expect(typeof TrackReducer).toEqual('function');
    })

    it('should initialize with {} as default state', () => {
      expect(TrackReducer(undefined, {})).toEqual({});
    })

    it('should return previous state if action is not matched', () => {
      let oldState = { 1: 'old' };
      let newState = TrackReducer(oldState, { type: 'undefined_action' });
      expect(newState).toEqual(oldState);
    })
  })
})