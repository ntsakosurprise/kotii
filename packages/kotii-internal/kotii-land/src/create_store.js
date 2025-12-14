// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import { reducers } from "/kotii-user-land-aliase/src/store/index";
export default async (initialState = {}, isStoreCreated = false) => {
  if (isStoreCreated) return initialState;

  let reduxThunk;
  let reducers;
  let reduxFuncs;

  try {
    let { thunk } = await import("redux-thunk");
    reduxThunk = thunk;
  } catch (e) {
    throw new Error(
      'Redux Thunk is required but not installed. Please run "npm install redux-thunk".'
    );
  }

  try {
    reduxFuncs = await import("redux");
  } catch (e) {
    throw new Error(
      'Redux is required but not installed. Run: "npm install redux"'
    );
  }

  try {
    ({ reducers } = await import("/kotii-user-land-aliase/src/store/index"));
  } catch (e) {
    throw new Error(
      'Redux is required but not installed. Run: "npm install redux"'
    );
  }
  console.log("THE REDUX PATHS", reduxThunk);
  console.log("THE REDUCERS", reducers);

  const { createStore, combineReducers, applyMiddleware } = reduxFuncs;

  return createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(reduxThunk)
  );
};
