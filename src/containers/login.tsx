import React from "react";

import LoginLayout from "../layouts/login";
import { Redirect } from "react-router-dom";
import { graphql, ChildDataProps } from "react-apollo";
import gql from "graphql-tag";
import auth from "../services/auth";

const AuthQuery = gql`
  {
    auth @client {
      authenticated
      errorMessage
    }
  }
`;

interface Auth {
  authenticated: boolean;
  errorMessage: string;
}

interface AuthQueryResult {
  auth: Auth;
}

type Props = ChildDataProps<{}, AuthQueryResult, {}>;

interface LoginInput {
  username: string;
  password: string;
}

const login = (data: LoginInput) => {
  auth.logIn(data);
};

export const LoginContainer: React.SFC<Props> = ({ data }) => {
  var authenticated = false;
  if (data.auth) {
    authenticated = data.auth.authenticated;
  }
  if (authenticated) {
    return <Redirect to={"/"} />;
  }
  return <LoginLayout {...data.auth} onSubmit={login} />;
};

export default graphql<{}, AuthQueryResult, {}, Props>(AuthQuery)(
  LoginContainer
);
