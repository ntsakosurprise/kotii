export default (initialState = {}, reducers, reduxFuncs, reduxThunk) => {
  console.log("THE REDUX PATHS", reduxThunk);
  console.log("THE REDUCERS", reducers);
  console.log("THE INITIAL STATE", initialState);
  console.log("THE REDUX FUNKS", reduxFuncs);

  const { createStore, combineReducers, applyMiddleware } = reduxFuncs;

  return createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(reduxThunk)
  );
};
