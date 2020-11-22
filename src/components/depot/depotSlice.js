import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instruments: [
    { id: 0, wkn: "AYX", name: "Alteryx", price: 50.67, count: 20 },
    { id: 1, wkn: "MTU", name: "MTU Aeroengines", price: 20.15, count: 30 },
    { id: 2, wkn: "AMZN", name: "Amazon", price: 1050.23, count: 1 },
  ],
};

export const depotSlice = createSlice({
  name: "depot",
  initialState: initialState,
  reducers: {
    addTransaction(state, action) {
      state.instruments.push(action.payload);
    },
  },
});

export const { addTransaction } = depotSlice.actions;

export default depotSlice.reducer;
