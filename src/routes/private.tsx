import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const PrivateRoute = ({
  authenticated,
  component: Component,
  ...rest
}: any) => (
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

const mapStateToProps = (state: any) => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(PrivateRoute);
