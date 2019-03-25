import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PrivateRoute from "./private";
import LoginContainer from "../containers/login";
import HomeContainer from "../containers/home";

export default class Routes extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/login" component={LoginContainer} />
        <PrivateRoute exact path="/" component={HomeContainer} />
      </BrowserRouter>
    );
  }
}
