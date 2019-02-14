import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { createStore, applyMiddleware, compose } from "redux";
import golReducer from "./reducers/golReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import invariant from "redux-immutable-state-invariant";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  golReducer,
  composeEnhancers(applyMiddleware(thunk /*, invariant()*/))
);

ReactDOM.render(
  <BrowserRouter basename="/game-of-life">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
