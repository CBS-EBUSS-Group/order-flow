import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasVisitedHome: false,
  hasVisitedMarketPage: false,
  hasVisitedBuyPage: false,
  hasFirstClickedOrderButton: false,
  hasRemindedOfTaskOne: false,
  hasVisitedDepot: false,
  hasExplainedFillOrKill: false,
  hasPromptedDoubleCheck: false,
  hasCongratulatedForTaskThree: false,
  hasRemindedStopLoss: false,
  hasCongratulatedForTaskFour: false,
  hasVisitedAccounts: false,
  hasCongratulatedForAllTasks: false,
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
