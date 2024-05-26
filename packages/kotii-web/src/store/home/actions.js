/* eslint-disable no-unused-vars */
import * as types from "./types.js";
export const showPeopleList = () => {
  console.log("THE ACTION CREATOR RUNNING");
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
