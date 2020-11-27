import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "1. Perform a ‘buy’ order",
    subtasks: [
      "Invest in a fond",
      "Select Exchange: Direct or Xetra",
      "Select Order Type: Market Order",
      "Select Order Condition: Standard",
    ],
    done: false,
  },
  { id: 2, title: "2. Check your Depot", subtasks: [], done: false },
  {
    id: 3,
    title: "3. Perform another ‘buy’ order",
    subtasks: [
      "Invest in a stock of your choice",
      "Select Exchange: Xetra",
      "Select Order Type: Limit Order",
      "Select Order Condition: Fill-or-kill",
    ],
    done: false,
  },
  {
    id: 4,
    title: "4. Make a Stop-Loss Order",
    subtasks: [
      "Go to your depot",
      "Select a stock to sell",
      "Select Order Type: Stop-Loss Order",
      "Set a new price",
    ],
    done: false,
  },
  {
    id: 5,
    title: "5. Go to your Account Area",
    subtasks: ["Check your Account Balance", "Check your Transaction History"],
    done: false,
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    setDone(state, action) {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        if (!task.done) {
          switch (task.id) {
            case 1:
            default:
            // do nothing
          }
        }
        task.done = true;
      }
    },
  },
});

export const { setDone } = tasksSlice.actions;

export default tasksSlice.reducer;
