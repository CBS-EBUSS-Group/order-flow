import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instruments: [
    { wkn: "AYX", name: "Alteryx", price: 50.67, count: 20 },
    { wkn: "MTU", name: "MTU Aeroengines", price: 20.15, count: 30 },
    { wkn: "AMZN", name: "Amazon", price: 1050.23, count: 1 },
  ],
};

export const depotSlice = createSlice({
  name: "depot",
  initialState: initialState,
  reducers: {
    addInstrument(state, action) {
      state.instruments.push(action.payload);
    },
  },
});

export const { addInstrument } = depotSlice.actions;

export default depotSlice.reducer;
