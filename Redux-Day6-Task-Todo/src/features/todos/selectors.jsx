import { createSelector } from 'reselect';

const selectTodos = state => state.todos;

export const selectTodoList = createSelector(
  [selectTodos],
  (todos) => todos
);
