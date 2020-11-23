import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: {
    id: 5,
    wkn: "TUAG00",
    name: "Tui AG",
    price: 4.96,
    img: "chart_tui.png",
  },
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
