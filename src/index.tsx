import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./styles.css";
import "./styles.scss";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>{/* Taruh Root Component disini */}<App /></Provider>,
  document.getElementById("app")
);
