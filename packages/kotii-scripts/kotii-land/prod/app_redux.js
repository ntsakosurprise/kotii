import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducers } from "/src/store/index.js";

export default (initialState = {}) => {
  console.log("THE PRELOADED STATE>>>", initialState);
  return createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(thunk)
  );
};
