import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: null,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    setItem(state, action) {
      state.item = action.payload;
    },
  },
});

export const { setItem } = basketSlice.actions;

export default basketSlice.reducer;
