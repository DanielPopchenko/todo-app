import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    filter: {
      status: 'all',
    },
  },

  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.todos.push({ id: new Date().toISOString(), text: action.payload.text, completed: false });
      console.log(current(state));
    },
  },
});

console.log('todoSlice: ', todoSlice);

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
