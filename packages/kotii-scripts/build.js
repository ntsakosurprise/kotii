import React from "react";
import { BrowserRouter, Switch as ReactRoutes } from "react-router-dom";
import Public from "./public.js";
import About from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/components/pages/about.jsx";
import ContactUs from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/components/pages/contact-us.jsx";
import Faqs from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/components/pages/faqs.jsx";
import Home from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/components/pages/index.jsx";
import Posts from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/components/pages/posts/index.jsx";
import Slug from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/components/pages/posts/[slug].jsx";
import Test from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/components/pages/test.jsx";
import Todo from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/components/pages/todo/index.jsx";
const comps = {
  Test,
  Home,
  Faqs,
  ContactUs,
  About,
  Todo,
  Posts,
  Slug,
};
const mapsOfFiles = [
  {
    path: "/test",
    component: "Test",
  },
  {
    path: "/",
    component: "Home",
  },
  {
    path: "/faqs",
    component: "Faqs",
  },
  {
    path: "/contact-us",
    component: "ContactUs",
  },
  {
    path: "/about",
    component: "About",
  },
  {
    path: "/todo",
    component: "Todo",
  },
  {
    path: "/posts",
    component: "Posts",
  },
  {
    path: "/posts/:slug",
    component: "Slug",
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
          console.log("THE COMPONENT");
          let component = comps[r.component];
          // console.log("FUNCTION TO RENDER", funcToRender)
          return (
            <Public
              {...props}
              exact
              path={r.path}
              component={component}
              key={index}
            />
          );
        })}
      </ReactRoutes>
    </BrowserRouter>
  );
};
export default Routes;
