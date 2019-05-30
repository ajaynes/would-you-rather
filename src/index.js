import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "./middleware";
import "antd/dist/antd.css";
import "./styles.css";
import App from "./components/App";
import rootReducer from "./reducers";

const store = createStore(rootReducer, middleware);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
