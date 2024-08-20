import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import userReducer from "./userSlice";
import messageReducer from "./messageSlice";
import socketReducer from "./socketSlice";
export type RootType = {
  user: ReturnType<typeof userReducer>;
  messages: ReturnType<typeof messageReducer>;
  socket: ReturnType<typeof socketReducer>;
};

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist:['socket',]
};

// Create persisted reducers

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    messages: messageReducer,
    socket: socketReducer,
  })
);

const store: Store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: rootReducer,
});

// Create the persistor
export const persistor = persistStore(store);

export default store;
