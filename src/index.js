import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import cell from "./reducers/cell";
import viewport from "./reducers/viewport";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
// import invariant from "redux-immutable-state-invariant";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    cell,
    viewport
  }),
  composeEnhancers(applyMiddleware(thunk /*, invariant()*/))
);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
