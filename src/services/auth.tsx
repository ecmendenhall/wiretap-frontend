import gql from "graphql-tag";
import { client as defaultClient } from "../graphql";

interface LoginInput {
  username: string;
  password: string;
}

export const LOGIN_QUERY = gql`
  mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

const logIn = (
  { username, password }: LoginInput,
  client = defaultClient,
  storage = localStorage
) => {
  return client
    .mutate({
      mutation: LOGIN_QUERY,
      variables: {
        username: username,
        password: password
      }
    })
    .then(res => res.data.login.token)
    .then(token => {
      storage.setItem("wiretap.token", token);
      return token;
    });
};

export default {
  logIn: logIn
};
