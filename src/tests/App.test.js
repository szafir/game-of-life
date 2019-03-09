import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "../App";
import store from "../store";
import { HashRouter } from "react-router-dom";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
