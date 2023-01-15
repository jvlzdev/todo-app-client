import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
  prompt: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodo: (state, action) => {
      state.data = action.payload;
    },
    getPrompt: (state, action) => {
      state.prompt = action.payload;
    },
    getLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getTodo, getLoading, getPrompt } = todoSlice.actions;

export const getTodoList = (state) => state.todo.data;
export const showLoading = (state) => state.todo.isLoading;
export const showPrompt = (state) => state.todo.prompt;

export default todoSlice.reducer;
