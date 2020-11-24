import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instruments: [],
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
