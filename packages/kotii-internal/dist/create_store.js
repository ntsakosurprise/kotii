export default (function () {
  let initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let reducers = arguments.length > 1 ? arguments[1] : undefined;
  let reduxFuncs = arguments.length > 2 ? arguments[2] : undefined;
  let reduxThunk = arguments.length > 3 ? arguments[3] : undefined;
  console.log("THE REDUX PATHS", reduxThunk);
  console.log("THE REDUCERS", reducers);
  console.log("THE INITIAL STATE", initialState);
  console.log("THE REDUX FUNKS", reduxFuncs);
  const {
    createStore,
    combineReducers,
    applyMiddleware
  } = reduxFuncs;
  return createStore(combineReducers(reducers), initialState, applyMiddleware(reduxThunk));
});