import { combineReducers } from "@reduxjs/toolkit";
import user from "./userSlice";

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    user,
    ...asyncReducers,
  });

  // /*
  // Reset the redux store when user logged out
  //  */
  // if (action.type === "user/userLoggedOut") {
  //   state = undefined;
  // }

  return combinedReducer(state, action);
};

export default createReducer;
