import { createSlice } from "@reduxjs/toolkit";
import text from "./data";

const initialState = {
  visibility: false,
  dialogue: [],
};

export const botSlice = createSlice({
  name: "bot",
  initialState: initialState,
  reducers: {
    setVisibility(state, action) {
      state.visibility = action.payload.visibility;
      if (action.payload.dialogue) {
        state.dialogue = text[action.payload.dialogue];
      }
    },
  },
});

export const { setVisibility } = botSlice.actions;

export default botSlice.reducer;
