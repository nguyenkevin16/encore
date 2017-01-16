import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import userReducer from './user_reducer';
import trackReducer from './track_reducer';
import playbarReducer from './playbar_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
  tracks: trackReducer,
  playbar: playbarReducer
});

export default rootReducer;
