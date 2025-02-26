/* eslint-disable no-unused-vars */
// @ts-nocheck
import { CONFIG } from "Config";
import { loggas } from "kotii-logger";
import * as types from "./types.ts";
export const showPeopleList = () => {
  loggas.app.log("THE ACTION CREATOR RUNNING");

  dispatch(showPeopleListSuccess());
};
export const showUser = () => {
  return async (dispatch) => {
    const url = !CONFIG.APP_URL
      ? `${JSON.parse(process.env.KOTII_APP_URL)}/get-users`
      : `${CONFIG.APP_URL}/get-users`;
    try {
      const response = await fetch(url, { method: "POST" });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      loggas.app.log("rESPONSE AS JSON", json);
      dispatch(showUserSuccess(json));
    } catch (error) {
      loggas.app.log("FETCH ERROR", error);
      console.error(error?.message);
      dispatch(showUserSuccess({ actor: { name: "Msapu" } }));
    }
  };
};

export const showPeopleListSuccess = () => {
  return {
    type: types.SHOW_PEOPLE_LIST,
    payload: { people: ["Nyeleti", "Nyiko", "Tsakani", "Nyambi"] },
  };
};

export const showUserSuccess = (user) => {
  loggas.app.log("THE USER", user);
  return {
    type: types.SHOW_USER,
    payload: { user: { ...user.actor[0] } },
  };
};

export const showPeopleListFailure = (err) => {
  loggas.app.log("THE PEOPLE FAILURE", err);
  return {
    type: types.SHOW_PEOPLE_LIST,
    payload: { people: ["Nyeleti", "Nyiko", "Tsakani", "Nyambi"] },
  };
};

export const hidePeopleList = () => {
  return {
    type: types.HIDE_PEOPLE_LIST,
    payload: { people: [] },
  };
};
