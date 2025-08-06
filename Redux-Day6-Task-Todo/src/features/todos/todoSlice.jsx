import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false
          }
        };
      }
    },
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload);
    },
    editTask(state, action) {
      const { id, newText } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) task.text = newText;
    }
  }
});

export const { addTask, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
