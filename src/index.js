import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { carReducer } from "./reducers/carReducer";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(carReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
