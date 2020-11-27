import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasVisitedHome: false,
  hasVisitedMarketPage: false,
  hasVisitedBuyPage: false,
  hasFirstClickedOrderButton: false,
  hasCompletedFirstTask: false,
  hasVisitedDepot: false,
};

export const flagSlice = createSlice({
  name: "flags",
  initialState: initialState,
  reducers: {
    setFlag(state, action) {
      const { id, value } = action.payload;
      state[id] = value;
    },
  },
});

export const { setFlag } = flagSlice.actions;

export default flagSlice.reducer;
