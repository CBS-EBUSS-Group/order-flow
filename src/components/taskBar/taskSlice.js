import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Task 1", done: false },
  { id: 2, title: "Task 2", done: true },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    setDone(state, action) {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.done = true;
      }
    },
  },
});

export default tasksSlice.reducer;
