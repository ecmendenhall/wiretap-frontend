import React from "react";
import { Grid } from "semantic-ui-react";

import Login from "../components/login";

interface Props {
  authenticated: boolean;
  error: boolean;
  errorMessage: string;
}

export class LoginLayout extends React.Component<Props, {}> {
  render() {
    return (
      <Grid centered>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Login {...this.props} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginLayout;
