import React from "react";
import { BrowserRouter, Switch as ReactRoutes } from "react-router-dom";
import Public from "./public.js";
import About from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/about.js";
import ContactUs from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/contact-us.js";
import Faqs from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/faqs.js";
import Home from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/index.js";
import Posts from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/posts/index.js";
import Slug from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/posts/[slug].js";
import Privacy from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/privacy.js";
import Test from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/test.js";
import Todo from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/todo/index.js";
const comps = {
  Test,
  Privacy,
  Home,
  Faqs,
  ContactUs,
  About,
  Todo,
  Posts,
  Slug,
};
const routes = [
  {
    path: "/test",
    component: "Test",
  },
  {
    path: "/privacy",
    component: "Privacy",
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
export { name, surname };

//import Public from "../Public/component.js"

const Routes = (props) => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {routes.map((r, index) => {
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
