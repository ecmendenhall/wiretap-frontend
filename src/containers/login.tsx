import React from "react";
import { connect } from "react-redux";

import { login } from "../actions/auth";
import LoginLayout from "../layouts/login";
import { Redirect } from "react-router-dom";

interface Props {
  authenticated: boolean;
  error: boolean;
  errorMessage: string;
}

export class LoginContainer extends React.Component<Props, {}> {
  render() {
    if (this.props.authenticated) {
      return <Redirect to={"/"} />;
    }
    return <LoginLayout {...this.props} />;
  }
}

const mapDispatchToProps = { onSubmit: login };

const mapStateToProps = (state: any) => {
  return {
    authenticated: state.auth.authenticated,
    error: state.auth.error,
    errorMessage: state.auth.errorMessage
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
