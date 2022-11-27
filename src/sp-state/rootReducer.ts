import { combineReducers } from '@utils';
import { counterReducer } from './counter';
import { userReducer } from './user';

export const rootReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});
