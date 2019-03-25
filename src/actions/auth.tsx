import { createAction } from "redux-starter-kit";
import auth from "../services/auth";
import { Dispatch } from "redux";

interface LoginInput {
  username: string;
  password: string;
}

export const loginSucceeded = createAction("auth/loginSucceeded");
export const loginFailed = createAction("auth/loginFailed");

export const login = (payload: LoginInput) => (dispatch: any) => {
  return auth
    .logIn(payload)
    .then(token => {
      dispatch(loginSucceeded(token));
    })
    .catch(err => {
      const { networkError } = err;
      let message = "Something went wrong.";
      if (networkError && networkError.statusCode === 404) {
        message = "Incorrect username or password.";
      }
      dispatch(loginFailed(message));
    });
};
