import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  messages: [],
};
const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    clearMessages: (state) => {
      state.messages = initialState.messages;
    },
  },
});
export const { setMessages,clearMessages } = messageSlice.actions;
export default messageSlice.reducer;
