/* eslint import/no-extraneous-dependencies: off */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: [], // guest
  profile: {},
  permissions: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoggedOut: () => initialState,
  },
});

export const { userLoggedOut } = userSlice.actions;

export default userSlice.reducer;
