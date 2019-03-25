import { createReducer } from "redux-starter-kit";

import { loginSucceeded, loginFailed } from "../actions/auth";

export default createReducer(
  { authenticated: false, error: false, errorMessage: "", token: null },
  {
    [loginSucceeded.toString()]: (state, action) => {
      state.error = false;
      state.errorMessage = "";
      state.token = action.payload;
      state.authenticated = true;
    },
    [loginFailed.toString()]: (state, action) => {
      state.error = true;
      state.errorMessage = action.payload;
    }
  }
);
