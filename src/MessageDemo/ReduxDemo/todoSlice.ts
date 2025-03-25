import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ['Learn Redux', 'Master React'],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter(todo => todo.id !== action.payload)
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;