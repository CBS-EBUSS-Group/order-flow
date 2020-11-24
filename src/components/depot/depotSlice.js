import { createSlice } from "@reduxjs/toolkit";
import { addTransactionIn } from "../account/accountSlice";

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
      const buy = action.payload;
      const inventory = state.instruments.find(
        (instrument) => instrument.id === buy.id
      );

      if (inventory) {
        const count = inventory.count + buy.count;
        const price =
          (inventory.count * inventory.price + buy.count * buy.price) / count;

        state.instruments = [...state, { ...inventory, price, count }];
      } else {
        state.instruments.push(buy);
      }
    },
    removeInstrument(state, action) {
      const sell = action.payload;
      const inventory = state.instruments.find(
        (instrument) => instrument.id === sell.id
      );
      if (!inventory) return;

      state.instruments = [
        ...state.instruments,
        { ...inventory, count: inventory.count - sell.count },
      ];
    },
  },
});

export const { addInstrument, removeInstrument } = depotSlice.actions;

export default depotSlice.reducer;
