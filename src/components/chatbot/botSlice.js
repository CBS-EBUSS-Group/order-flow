import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  dialogue: [
    "Hey there! I’m Linda. I’m happy to help you buy and sell stocks. It’s way easier than you might think 🙂",
    "This is your account overview. Here you can see your Depot Nr as well as your current Buying Power. Furthermore, you can choose to perform a Buy order and check your Depot as well as your Account. On the right you can see your first tasks that you will be doing to get you started with stock investments.",
    "To get you going, we’ve given you 10,000€ to play with. Are you ready for your first investment? Go ahead and click on Buy!",
  ],
};

export const botSlice = createSlice({
  name: "bot",
  initialState: initialState,
  reducers: {
    setVisibility(state, action) {
      state.visible = action.payload.visible;
      if (action.payload.dialogue) {
        state.dialogue = action.payload.dialogue;
      }
    },
  },
});

export const { setVisibility } = botSlice.actions;

export default botSlice.reducer;
