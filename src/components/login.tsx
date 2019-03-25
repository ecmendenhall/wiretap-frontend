import React, { Component, ChangeEvent } from "react";
import {
  Button,
  Container,
  Form,
  InputOnChangeData,
  Message
} from "semantic-ui-react";

export interface Props {
  error: boolean;
  errorMessage: string;
  onSubmit?: (state: State) => void;
}
export interface State {
  username: string;
  password: String;
}

class Login extends Component<Props, State> {
  state = {
    username: "",
    password: ""
  };

  onChange = (e: ChangeEvent, { name, value }: InputOnChangeData) => {
    const update = {
      [name]: value
    } as unknown;
    this.setState(update as State);
  };

  onSubmit = () => {
    if (this.props.onSubmit) {
      return this.props.onSubmit(this.state);
    }
  };

  render() {
    const { error, errorMessage } = this.props;
    const { username, password } = this.state;
    return (
      <Container>
        <h1>Sign In</h1>
        <Form onSubmit={this.onSubmit} error={error}>
          <Form.Input
            label="Username"
            name="username"
            value={username}
            onChange={this.onChange}
          />
          <Form.Input
            label="Password"
            name="password"
            value={password}
            type="password"
            onChange={this.onChange}
          />
          {error && <Message error={error} content={errorMessage} />}
          <Button primary type="submit">
            Sign In
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
