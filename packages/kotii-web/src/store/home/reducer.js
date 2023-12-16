import { actionProps } from "./props.js";
import * as types from "./types.js";
export const homeReducer = (state = actionProps, action) => {
  console.log("THE HOME REDUCER RUNS", state, action);
  switch (action.type) {
    case types.SHOW_PEOPLE_LIST:
      return { ...state, ...action.payload };
    case types.HIDE_PEOPLE_LIST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
