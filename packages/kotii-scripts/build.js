import React from "react";
import { BrowserRouter, Switch as ReactRoutes } from "react-router-dom";
import Public from "./public.js";
import About from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/about.js";
import Connection from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/connection.js";
import ContactUs from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/contact-us.js";
import Faqs from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/faqs.js";
import Home from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/index.js";
import Pos from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/posts/index.js";
import Slug from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/posts/[slug].js";
import Privacy from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/privacy.js";
import Test from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/test.js";
import Testing from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/testing.js";
import Test_jsxx from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/test_jsx.jsx";
import Todo from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/todo/index.js";
const comps = {
  Test,
  Privacy,
  Home,
  Faqs,
  ContactUs,
  About,
  Todo,
  Pos,
  Slug,
  Connection,
  Testing,
  Test_jsxx,
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
    path: "/pos",
    component: "Pos",
  },
  {
    path: "/pos/:slug",
    component: "Slug",
  },
  {
    path: "/connection",
    component: "Connection",
  },
  {
    path: "/testing",
    component: "Testing",
  },
  {
    path: "/test_jsxx",
    component: "Test_jsxx",
  },
];

//import Public from "../Public/component.js"
const Wrapper = (props) => {
  //const Component = props.component;
  return (
    <div
      style={{
        paddingLeft: "2%",
        paddingTop: "2vh",
        fontFamily: '"Roboto", sans-serif',
      }}
    >
      {props.children}
    </div>
  );
};

const Routes = (props) => {
  // const AppWrapper = props.wrapper;
  const Layout = props?.layout
    ? props.layout
    : () => {
        return <></>;
      };

  return (
    <BrowserRouter>
      <ReactRoutes>
        <Layout>
          {routes.map((r, index) => {
            console.log("THE COMPONENT");
            let component = comps[r.component];
            // console.log("FUNCTION TO RENDER", funcToRender)
            return (
              <Wrapper>
                <Public
                  {...props}
                  exact
                  path={r.path}
                  component={component}
                  key={index}
                />
              </Wrapper>
            );
          })}
        </Layout>
      </ReactRoutes>
    </BrowserRouter>
  );
};
export default Routes;
