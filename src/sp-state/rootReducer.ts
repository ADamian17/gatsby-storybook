import { combineReducers } from '@utils';
import { counterReducer } from './counter';
import { todosReducer } from './todos';
import { userReducer } from './user';

export const rootReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  todos: todosReducer,
});
