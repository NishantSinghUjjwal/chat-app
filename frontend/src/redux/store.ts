import { configureStore, Store } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store: Store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store;
