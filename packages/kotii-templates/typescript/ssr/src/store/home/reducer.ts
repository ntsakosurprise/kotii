// @ts-nocheck
import { loggas } from "kotii-logger";
import { actionProps } from "./props.ts";
import * as types from "./types.ts";
export const homeReducer = (state = actionProps, action) => {
  loggas.app.log("THE HOME REDUCER RUNS", state, action);
  switch (action.type) {
    case types.SHOW_PEOPLE_LIST:
      return { ...state, ...action.payload };
    case types.SHOW_USER:
      return { ...state, ...action.payload };
    case types.HIDE_PEOPLE_LIST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
