// @ts-nocheck
import { Head } from "kotii";
import React, { useEffect, useState } from "react";
import "../styles/color.less";
const About = () => {
  const [users, setUsers] = useState([]);
  const requestData = async () => {
    console.log("THE ACTION CREATOR RUNNING");

    const url = "http://localhost:8000/get-users";
    try {
      const response = await fetch(url, { method: "POST" });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log("rESPONSE AS JSON", json);
      return json;
    } catch (error) {
      console.log("FETCH ERROR", error);
      console.error(error.message);
      return { error: true };
    }
  };

  useEffect(() => {
    let getUserData = async () => {
      let data = await requestData();
      console.log("THE DATA FROM THE SERVER", data);
      setUsers(data.actor);
    };
    getUserData();
  }, []);

  const doUsers = () => {
    let usersList = null;
    if (users.length === 0) return null;

    usersList = users.map((user, i) => {
      console.log("THE USER", user);
      return (
        <ul key={i}>
          <li>{user.userName}</li>
          <li>{user.born}</li>
          <li>{user.status}</li>
        </ul>
      );
    });

    return usersList;
  };

  console.log("THE ABOUT PAGE");
  return (
    <div>
      <Head title={"About page kotii"} />
      <p className="green">Im the ABOUT pageZ</p>
      <p>With Users:</p>
      {doUsers()}
    </div>
  );
};

export default About;
