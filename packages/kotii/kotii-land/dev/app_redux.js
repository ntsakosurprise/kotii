import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducers } from "/kotii-user-land-aliase/src/store/index";

export default (initialState = {}) => {
  return createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(thunk)
  );
};
