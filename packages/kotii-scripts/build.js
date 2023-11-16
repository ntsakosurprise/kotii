import React from "react";
import { BrowserRouter, Switch as ReactRoutes } from "react-router-dom";
import Public from "./public.js";
const mapsOfFiles = [{
  path: "/test",
  component: function Test() {
    return <p>TEST Page</p>;
  }
}, {
  path: "/",
  component: function Index() {
    return <Hero>{<HeroText>Focus on your idea, Forget about configurations</HeroText>}</Hero>;
  }
}, {
  path: "/faqs",
  component: function Faqs() {
    return <p>Im the FAQS page</p>;
  }
}, {
  path: "/contact-us",
  component: function ContactUs() {
    console.log("THE ABOUT PAGE");
    return <p>Im the ABOUT page</p>;
  }
}, {
  path: "/about",
  component: function About() {
    console.log("THE ABOUT PAGE");
    return <p>Im the ABOUT page</p>;
  }
}, {
  path: "/todo",
  component: function Todo() {
    return <p>Im the TODO page</p>;
  }
}, {
  path: "/posts",
  component: function Posts() {
    return <p>Im the Posts page</p>;
  }
}, {
  path: "/posts/:slug",
  component: function AnythingSlug() {
    return <p>Im the AnythingSlug page</p>;
  }
}];
const name = "my name is my name";
const surname = "Mashele";
export { name, surname, mapsOfFiles };
console.log("process workdir", process.cwd());

//import Public from "../Public/component.js"

const Routes = props => {
  return <BrowserRouter>
      <ReactRoutes>
        {mapsOfFiles.map((r, index) => {
        return <Public {...props} exact path={r.path} component={r.component} key={index} />;
      })}
      </ReactRoutes>
    </BrowserRouter>;
};
export default Routes;