import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 10000,
  transactions: [],
};

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    addTransactionIn(state, action) {
      const { amount } = action.payload;
      state.transactions.push({ ...action.payload, amount: -amount });
      state.balance -= amount;
    },
    addTransactionOut(state, action) {
      const { amount } = action.payload;
      state.transactions.push(action.payload);
      state.balance += amount;
    },
    addStopLoss(state, action) {
      state.transactions.push(action.payload);
    },
  },
});

export const {
  addTransactionIn,
  addTransactionOut,
  addStopLoss,
} = accountSlice.actions;

export default accountSlice.reducer;
