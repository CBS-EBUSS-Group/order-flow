import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 4100,
  transactions: [
    { id: 0, title: "Transfer from Account no. 8123981238", amount: 5000 },
    { id: 1, title: "Alteryx", amount: -500 },
    { id: 2, title: "Amazon", amount: -400 },
  ],
};

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    addTransaction(state, action) {
      const { amount, price } = action.payload;
      state.transactions.push(action.payload);
      state.balance += price * amount;
    },
  },
});

export const { addTransaction } = accountSlice.actions;

export default accountSlice.reducer;
