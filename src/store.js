import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
// import invariant from "redux-immutable-state-invariant";

import cell from "./reducers/cell";
import viewport from "./reducers/viewport";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    cell,
    viewport
  }),
  composeEnhancers(applyMiddleware(thunk /*, invariant()*/))
);


export default store;
