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
      if (action.payload.text === '') {
        alert('Enter something to create todo !');
        return;
      }
      state.todos.push({ id: new Date().toISOString(), text: action.payload.text, completed: false });
      console.log(current(state));
    },

    // ! сделать метод удаления
    removeTodo: (state, { payload }) => {
      const todos = state.todos;
      const doesExist = current(todos).some((todoshka) => todoshka.id === payload.todo.id);

      if (doesExist) {
        const idx = todos.findIndex((todoshka) => todoshka.id === payload.todo.id);

        todos.splice(idx, 1);
      }

      console.log(doesExist);
    },
  },
});

console.log('todoSlice: ', todoSlice);

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
