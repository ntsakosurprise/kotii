import React from "react";
import { BrowserRouter, Switch as ReactRoutes } from "react-router-dom";
import Public from "./public.js";
const mapsOfFiles = [
  {
    path: "/test",
    component: function Test() {
      return /*#__PURE__*/ _react.default.createElement("p", null, "TEST Page");
    },
  },
  {
    path: "/",
    component: function Index() {
      return /*#__PURE__*/ _react.default.createElement(
        Hero,
        null,
        /*#__PURE__*/ _react.default.createElement(
          HeroText,
          null,
          "Focus on your idea, Forget about configurations"
        ),
        ";"
      );
    },
  },
  {
    path: "/faqs",
    component: function Faqs() {
      return /*#__PURE__*/ _react.default.createElement(
        "p",
        null,
        "Im the FAQS page"
      );
    },
  },
  {
    path: "/contact-us",
    component: function ContactUs() {
      console.log("THE ABOUT PAGE");
      return /*#__PURE__*/ _react.default.createElement(
        "p",
        null,
        "Im the ABOUT page"
      );
    },
  },
  {
    path: "/about",
    component: function About() {
      console.log("THE ABOUT PAGE");
      return /*#__PURE__*/ _react.default.createElement(
        "p",
        null,
        "Im the ABOUT page"
      );
    },
  },
  {
    path: "/todo",
    component: function Todo() {
      return /*#__PURE__*/ _react.default.createElement(
        "p",
        null,
        "Im the TODO page"
      );
    },
  },
  {
    path: "/posts",
    component: function Posts() {
      return /*#__PURE__*/ _react.default.createElement(
        "p",
        null,
        "Im the Posts page"
      );
    },
  },
  {
    path: "/posts/:slug",
    component: function AnythingSlug() {
      return /*#__PURE__*/ _react.default.createElement(
        "p",
        null,
        "Im the AnythingSlug page"
      );
    },
  },
];
const name = "my name is my name";
const surname = "Mashele";
export { name, surname, mapsOfFiles };

//import Public from "../Public/component.js"

const Routes = (props) => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {mapsOfFiles.map((r, index) => {
          return (
            <Public
              {...props}
              exact
              path={r.path}
              component={r.component}
              key={index}
            />
          );
        })}
      </ReactRoutes>
    </BrowserRouter>
  );
};
export default Routes;
