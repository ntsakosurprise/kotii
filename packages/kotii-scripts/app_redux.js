import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducers } from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/store/index.js";

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export { store };
