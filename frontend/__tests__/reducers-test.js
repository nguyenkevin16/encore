/* globals jest */

import UserReducer from '../reducers/user_reducer';

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

    
  })
})