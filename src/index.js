import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";

function render(state) {
  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App
        matrix={state.matrix.start}
        values={state.values}
        errors={state.errors}
        dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
}
store.subscribe(() => render(store.getState()));
render(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
