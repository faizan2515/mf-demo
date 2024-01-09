import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showFooter: true
};

export const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    toggleFooter: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.showFooter = !state.showFooter;
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleFooter } = footerSlice.actions;

export default footerSlice.reducer;
