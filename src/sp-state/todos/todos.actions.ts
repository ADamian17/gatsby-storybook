import { SpActionFC } from '@types';
import todosTypes from './todos.types';

const addTodo: SpActionFC = (todo) => ({
  type: todosTypes.ADD_TODO,
  payload: todo,
});

const removeTodo: SpActionFC = (todoId) => ({
  type: todosTypes.REMOVE_TODO,
  payload: todoId,
});

const completeTodo: SpActionFC = (todoId) => ({
  type: todosTypes.TODO_IS_COMPLETED,
  payload: todoId,
});

export default {
  addTodo,
  removeTodo,
  completeTodo,
};
