/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
const GoogleFonts = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");
`;

const filesMap = {};
const pathMatchPattern = /^\.|index|\.[t|j][sx|s]$/g;
const importAllPages = (r) => {
  r.keys().forEach((key) => (filesMap[key] = r(key)));
};
const Wrapper = (props) => {
  const Component = props.component;
  return (
    <div
      style={{
        paddingLeft: "2%",
        paddingTop: "2vh",
        fontFamily: '"Roboto", sans-serif',
      }}
    >
      <Component />
    </div>
  );
};
const getPages = () => {
  const files = require.context("../pages/", true, /.js$/);
  importAllPages(files);
  console.log("THE PAGES OBJECT", filesMap);
  return filesMap;
  //   console.log("Context object", files);
  //   console.log("Context keys", files.keys);
  //   console.log("Context keys");
  //   files.keys().forEach((key) => {
  //     console.log("Context-FILE", key);
  //     console.log("Context resolve", files.resolve(key));
  //   });
};

const createRouterComponents = (maps) => {
  let compsMaps = Object.keys(maps).map((contextModule) => {
    return getItemPathAndFile(contextModule);
  });
  return compsMaps;
};

const getItemPathAndFile = (item) => {
  console.log("THE PAGES MAPS ITEM", item);
  let patternMatch = item
    .replace(pathMatchPattern, "")
    .replace(/\[(.+)\]/g, ":$1")
    .replace(/\[\.{3}.+\]/, "*");
  // .replace(/\/$/, "");
  if (!/^\/$/.test(patternMatch)) {
    console.log("THE PAGES slash only");
    patternMatch = patternMatch.replace(/\/$/, "");
  }

  console.log("THE PAGES matched", patternMatch);

  return {
    path: patternMatch,
    component: () => (
      <GoogleFonts>
        <Wrapper component={filesMap[item].default} />
      </GoogleFonts>
    ),
  };
};

export { getPages, createRouterComponents };
