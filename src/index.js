import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./bootstrap.min.css";
// connect react with redux :
import { Provider } from "react-redux";
// create store :
import { legacy_createStore } from "redux";
import reducer from "./Config/reducer";
const store = legacy_createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
