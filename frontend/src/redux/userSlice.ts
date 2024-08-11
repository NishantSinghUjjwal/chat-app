import { createSlice, Slice } from "@reduxjs/toolkit";

const userSlice: Slice = createSlice({
  name: "user",
  initialState: {
    authUser: null,
    onlineUsers: [],
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setOnlineUsers: (state, action) => {
      if (action.payload) state.onlineUsers = action.payload;
    },
    clearUser: (state, action) => {
      state.authUser = null;
      state.selectedUser = null;
    },
  },
});
export const { setAuthUser, setSelectedUser, setOnlineUsers, clearUser } =
  userSlice.actions;
export default userSlice.reducer;
