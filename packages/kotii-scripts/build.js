import { default as React } from "react";
import { BrowserRouter, Switch as ReactRoutes } from "react-router-dom";
import Public from "./public.js";
const mapsOfFiles = [
  {
    path: "/test",
    component: function Test() {
      return <p>Im the FAQS page</p>;
    },
  },
  {
    path: "/",
    component: function Index() {
      return <p>Im the FAQS page</p>;
    },
  },
  {
    path: "/faqs",
    component: function Faqs() {
      return <p>Im the FAQS page</p>;
    },
  },
  {
    path: "/contact-us",
    component: function ContactUs() {
      return <p>Im the FAQS page</p>;
    },
  },
  {
    path: "/about",
    component: function About() {
      console.log("THE ABOUT PAGE");
      return <p>Im the FAQS page</p>;
    },
  },
  {
    path: "/todo",
    component: function Todo() {
      return <p>Im the FAQS page</p>;
    },
  },
  {
    path: "/posts",
    component: function Posts() {
      return <p>Im the FAQS page</p>;
    },
  },
  {
    path: "/posts/:slug",
    component: function AnythingSlug() {
      return <p>Im the FAQS page</p>;
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
        {mapsOfFiles.map((r, i) => {
          return (
            <Public
              {...props}
              exact
              path={r.path}
              component={r.component}
              key={i}
            />
          );
        })}
      </ReactRoutes>
    </BrowserRouter>
  );
};
export default Routes;
