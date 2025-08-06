import todoReducer, { addTask, deleteTask, editTask } from './todoSlice';
import { describe, it, expect } from 'vitest';

describe('todoSlice', () => {
  it('should add a task', () => {
    const initialState = [];
    const action = addTask('Test Task');
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(1);
    expect(newState[0].text).toBe('Test Task');
  });

  it('should delete a task', () => {
    const initialState = [{ id: '1', text: 'Task' }];
    const newState = todoReducer(initialState, deleteTask('1'));
    expect(newState.length).toBe(0);
  });

  it('should edit a task', () => {
    const initialState = [{ id: '1', text: 'Old Task' }];
    const newState = todoReducer(initialState, editTask({ id: '1', newText: 'New Task' }));
    expect(newState[0].text).toBe('New Task');
  });
});
