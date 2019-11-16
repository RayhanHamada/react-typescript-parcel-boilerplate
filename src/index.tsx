import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./styles.css";
import "./styles.scss";

ReactDOM.render(
  <Provider store={store}>{/* Taruh Root Component disini */}</Provider>,
  document.getElementById("app")
);
