/* eslint-disable no-unused-vars */

import * as types from "./types.js";
export const showPeopleList = () => {
  console.log("THE ACTION CREATOR RUNNING");

  dispatch(showPeopleListSuccess());
};
export const showUser = ()=>{

  return async (dispatch) => {
    const url = "http://localhost:8000/get-users";
    try {
      const response = await fetch(url, { method: "POST" });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log("rESPONSE AS JSON", json);
      dispatch(showUserSuccess(json));
    } catch (error) {
      console.log("FETCH ERROR", error);
      console.error(error?.message);
      dispatch(showUserSuccess({actor:{name:"Msapu"}}));
    }
  };

}

export const showPeopleListSuccess = () => {
  
  return {
    type: types.SHOW_PEOPLE_LIST,
    payload: { people: ["Nyeleti", "Nyiko", "Tsakani", "Nyambi"] },
  };
};

export const showUserSuccess = (user) => {
  console.log("THE USER", user);
  return {
    type: types.SHOW_USER,
    payload: {user:{...user.actor[0]}}
  };
}

export const showPeopleListFailure = (err) => {
  console.log("THE PEOPLE FAILURE", err);
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
