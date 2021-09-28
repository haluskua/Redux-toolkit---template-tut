import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

import userReducer from "../features/counter/user";

export const store = configureStore({
  // functions that takes current state and action and return new value of the state
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  // reducer: {
  //   user: userReducer,
  // },
});
