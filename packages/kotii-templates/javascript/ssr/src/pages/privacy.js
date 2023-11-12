import Routes, { mapsOfFiles, name } from "kotii-scripts";
const Test = function () {
  console.log("KOTTI IMPORTS ", name, mapsOfFiles);
  console.log("THE KOTII-ROUTES", Routes);
  //console.log(doingTheMost());
  return console.log("I AM KOTII TEST FUNCTION");
};

export default Test;
