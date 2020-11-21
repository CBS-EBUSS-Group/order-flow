import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "task 1", done: false },
  { name: "task 2", done: true },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setDone: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      task.done = true;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setDone } = taskSlice.actions;

export const selecttasks = (state) => state.tasks.value;

export default taskSlice.reducer;
