import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducers } from "/src/store/index.js";

export default (initialState = {}) => {
  return createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(thunk)
  );
};
