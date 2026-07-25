/* eslint-disable no-unused-vars */

import { CONFIG } from "Config";
import { loggas } from "kotii-logger";
import * as types from "./types.js";
export const showPeopleList = () => {
  loggas.app.log("THE ACTION CREATOR RUNNING");

  dispatch(showPeopleListSuccess());
};
export const showUser = () => {
  loggas.app.debug("SHOW USER ACTION",CONFIG);

  return async (dispatch) => {
    const url = !CONFIG.APP_URL
      ? `${JSON.parse(process.env.KOTII_APP_URL)}/get-users`
      : `${CONFIG.APP_URL}/get-users`;
loggas.app.debug("THE REQUEST URL",url);
    try {
      const response = await fetch(url, { method: "POST" });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      dispatch(showUserSuccess(json));

      return json; 
    } catch (error) {
      console.log("THE ACTIONS FETCH ERROR",error)
      dispatch(showUserSuccess({ actor: { name: "Msapu" } }));

      return { actor: { name: "Msapu" } }; 
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
