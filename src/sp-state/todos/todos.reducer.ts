import { ActionType } from '@types';
import { INITIAL_STATE } from '../initialState';
import todosTypes from './todos.types';

const todosReducer = (state = INITIAL_STATE.todos, action: ActionType) => {
  switch (action.type) {
    case todosTypes.ADD_TODO: {
      state.set(action.payload.id, action.payload);

      return state;
    }
    case todosTypes.REMOVE_TODO: {
      state.delete(action.payload);

      return state;
    }
    case todosTypes.TODO_IS_COMPLETED: {
      state.get(action.payload).completed = true;
      return state;
    }
    default:
      return state;
  }
};

export default todosReducer;
