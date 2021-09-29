//by using toolkit

import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

const themeSlice = createSlice({
  //INFORMATION ABOUT REDUCER
  name: "theme",
  initialState: { value: initialStateValue },

  //actual functions
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

//export action created
export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
