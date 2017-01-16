export const RECEIVE_PLAYBAR_DATA = 'RECEIVE_PLAYBAR_DATA';

export const receivePlaybarData = (playbarInfo) => ({
  type: RECEIVE_PLAYBAR_DATA,
  playbarInfo
});
