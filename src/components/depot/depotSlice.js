import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instruments: [
    {
      id: 0,
      wkn: "A1CX3T",
      name: "Tesla",
      price: 413.8,
      count: 20,
      img: "chart_tesla.png",
    },
    {
      id: 1,
      wkn: "823212",
      name: "Lufthansa",
      price: 9.47,
      count: 50,
      img: "chart_lufthansa.png",
    },
    {
      id: 2,
      wkn: "A2PSR2",
      name: "Biontech",
      price: 87.8,
      count: 10,
      img: "chart_biontech.png",
    },
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
