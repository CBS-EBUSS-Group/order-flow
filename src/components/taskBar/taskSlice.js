import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "1. Perform a ‘buy’ order",
    subtask1: "Choose a Stock",
    subtask2: "Select Exchange: 'Xetra'",
    subtask3: "Select Order type: 'Immediately'",
    subtask4: "Set the buy amount",
    done: false,
  },
  { id: 2, title: "2. Check your balance", done: true },
  {
    id: 3,
    title: "3. Perform another ‘buy’ order",
    subtask1: "Invest in an Index",
    subtask2: "Select Exchange: 'Xetra'",
    subtask3: "Select Order type: 'stop-loss'",
    subtask4: "Set buy amount",
    done: false,
  },
  {
    id: 4,
    title: "4. Perform a ‘sell’ order",
    subtask1: "Choose a Security",
    subtask2: "Select Exchange: 'Xetra'",
    subtask3: "Select Order type: 'TBA'",
    subtask4: "Set sell amount",
    done: true,
  },
  { id: 5, title: "5. Check your balance again", done: true },
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

export const { setDone } = tasksSlice.actions;

export default tasksSlice.reducer;
