import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 4100,
  transactions: [
    {
      title: "Transfer from Account no. 8123981238",
      amount: 5000,
      pending: false,
    },
    { title: "Alteryx", amount: -500, pending: false },
    { title: "Amazon", amount: -400, pending: false },
  ],
};

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    addTransactionIn(state, action) {
      const { amount } = action.payload;
      state.transactions.push(action.payload);
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
