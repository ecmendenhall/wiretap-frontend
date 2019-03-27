import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import GraphQLProvider from "./graphql";

ReactDOM.render(
  <GraphQLProvider>
    <App />
  </GraphQLProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
