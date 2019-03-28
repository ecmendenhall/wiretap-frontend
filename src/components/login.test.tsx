import React from "react";
import { mount } from "enzyme";

import Login, { Props, State } from "./login";

describe("Login", () => {
  let props = {
    errorMessage: ""
  };

  it("stores username in internal state", () => {
    const login = mount<Props, State>(<Login {...props} />);
    const input = login.find('input[name="username"]');
    input.simulate("change", { target: { value: "username" } });
    const { username } = login.state();
    expect(username).toBe("username");
  });

  it("stores password in internal state", () => {
    const login = mount<Props, State>(<Login {...props} />);
    const input = login.find('input[name="password"]');
    input.simulate("change", { target: { value: "password" } });
    const { password } = login.state();
    expect(password).toBe("password");
  });

  it("calls the onSubmit prop when the form is submitted", () => {
    const onSubmit = jest.fn(
      () =>
        new Promise((resolve, reject) => {
          resolve();
        })
    );
    const login = mount<Props, State>(<Login {...props} onSubmit={onSubmit} />);
    const usernameInput = login.find('input[name="username"]');
    usernameInput.simulate("change", { target: { value: "username" } });
    const passwordInput = login.find('input[name="password"]');
    passwordInput.simulate("change", { target: { value: "password" } });
    const form = login.find("form");
    form.simulate("submit");
    expect(onSubmit).toBeCalledWith({
      username: "username",
      password: "password"
    });
  });

  it("displays error when errormessage is present", () => {
    props.errorMessage = "Error message";
    const login = mount<Props, State>(<Login {...props} />);
    const message = login.find(".message");
    expect(message.text()).toBe("Error message");
  });
});
