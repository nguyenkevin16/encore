import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer
});

export default rootReducer;
