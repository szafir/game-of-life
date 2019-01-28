import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware, compose } from "redux";
import golReducer from "./reducers/golReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
// import invariant from "redux-immutable-state-invariant";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(golReducer, composeEnhancers(applyMiddleware(thunk/*, invariant()*/)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

