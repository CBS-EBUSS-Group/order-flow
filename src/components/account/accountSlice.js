import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 4100,
  transactions: [
    { title: "Transfer from Account no. 8123981238", amount: 5000 },
    { title: "Alteryx", amount: -500 },
    { title: "Amazon", amount: -400 },
  ],
};

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    addTransaction(state, action) {
      const { amount } = action.payload;
      state.transactions.push(action.payload);
      state.balance -= amount;
    },
    addTransactions(state, action) {
      action.payload.forEach((transaction) => {
        const { amount } = transaction;
        state.transactions.push(transaction);
        state.balance -= amount;
      });
    },
  },
});

export const { addTransaction, addTransactions } = accountSlice.actions;

export default accountSlice.reducer;
