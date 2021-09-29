import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/counter/user";
import themeReducer from "../features/theme";

export const store = configureStore({
  // functions that takes current state and action and return new value of the state
  reducer: {
    counter: counterReducer,
    user: userReducer,
    theme: themeReducer,
  },
  // reducer: {
  //   user: userReducer,
  // },
});
