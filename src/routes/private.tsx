import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { graphql, ChildDataProps } from "react-apollo";
import gql from "graphql-tag";

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

type PrivateRouteProps = RouteProps & {
  component: React.ReactType;
};

type Props = ChildDataProps<PrivateRouteProps, AuthQueryResult, {}>;

export const PrivateRoute: React.SFC<Props> = ({
  data,
  component: Component,
  ...rest
}) => {
  var authenticated = false;
  if (data.auth) {
    authenticated = data.auth.authenticated;
  }
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default graphql<RouteProps, AuthQueryResult, {}, Props>(AuthQuery)(
  PrivateRoute
);
