import { createSlice, Slice } from "@reduxjs/toolkit";

const userSlice: Slice = createSlice({
  name: "user",
  initialState: {
    authUser: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});
export const { setAuthUser } = userSlice.actions;
export default userSlice.reducer;
