import auth, { LOGIN_QUERY } from "./auth";
import ApolloClient from "apollo-client";
import { NormalizedCacheObject } from "apollo-cache-inmemory";

describe("auth service", () => {
  it("calls client with log in query", () => {
    const fakeClient = {
      mutate: jest.fn(() => {
        return new Promise((resolve, reject) => {
          resolve({ data: { login: { token: "abc123" } } });
        });
      })
    };
    auth.logIn({ username: "username", password: "password" }, fakeClient);
    expect(fakeClient.mutate).toHaveBeenCalledWith({
      mutation: LOGIN_QUERY,
      variables: {
        username: "username",
        password: "password"
      }
    });
  });

  it("sets token in localStorage", () => {
    const fakeClient = {
      mutate: jest.fn(() => {
        return new Promise((resolve, reject) => {
          resolve({ data: { login: { token: "abc123" } } });
        });
      })
    };
    const fakeStorage = {
      setItem: jest.fn()
    };
    expect.assertions(1);
    return auth
      .logIn(
        { username: "username", password: "password" },
        fakeClient,
        fakeStorage
      )
      .then(_ => {
        expect(fakeStorage.setItem).toHaveBeenCalledWith(
          "wiretap.token",
          "abc123"
        );
      });
  });
});
