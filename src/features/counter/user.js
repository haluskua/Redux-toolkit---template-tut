//by using toolkit

import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

const userSlice = createSlice({
  //INFORMATION ABOUT REDUCER
  name: "user",
  initialState: { value: initialStateValue },

  //actual functions
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

//export action created
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
