import React from "react";

import { Route, Router, Switch as Routes } from "wouter";

import Connection from "../kotii-templates/javascript/ssr/src/pages/connection.jsx";
import ContactUs from "../kotii-templates/javascript/ssr/src/pages/contact-us.jsx";
import Pos from "../kotii-templates/javascript/ssr/src/pages/posts/index.jsx";
import Slug from "../kotii-templates/javascript/ssr/src/pages/posts/[slug].jsx";
import About from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/about.jsx";
import Faqs from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/faqs.jsx";
import Home from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/index.jsx";
import Privacy from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/privacy.jsx";
import Test from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/test.jsx";
import Testing from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/testing.jsx";
// import Test.jsxxxx from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/test.jsxxx.jsxxx";
import Todo from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/todo/index.jsx";
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
  // Test.jsxxxx,
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
  // {
  //   path: "/test.jsxxxx",
  //   component: "Test.jsxxxx",
  // },
];

//import Public from "../Public/component.jsx"
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

const ClientRoutes = (props) => {
  // const AppWrapper = props.wrapper;
  const Layout = props?.layout
    ? props.layout
    : () => {
        return <></>;
      };

  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((r, index) => {
            console.log("THE COMPONENT");
            let Component = comps[r.component];
            // console.log("FUNCTION TO RENDER", funcToRender)
            // return (
            //   <Wrapper key={index}>
            //     <Public
            //       {...props}
            //       exact
            //       path={r.path}
            //       component={component}
            //       key={index}
            //     />
            //   </Wrapper>
            // );

            return (
              <Route
                // {...rest}
                key={index}
                path={r.path}
                component={Component}
                // render={(props) => {
                //   return <Component {...props} />;
                // }}
              />
            );
          })}
        </Routes>
      </Layout>
    </Router>
  );
};

const RoutesAsServerRoutes = (props) => {
  // const AppWrapper = props.wrapper;
  console.log("RoutesASsERVER ROUTES", props.layout, props.pathStuff);
  // let Header = props.layout;
  const Layout = props?.layout
    ? props.layout
    : () => {
        return <></>;
      };

  // if (!Layout || Layout) return <div>My react component</div>;
  return (
    <Layout>
      <Routes>
        {routes.map((r, index) => {
          console.log("THE COMPONENT");
          let Component = comps[r.component];
          console.log("THE COMPONENT To Render", Component);
          // console.log("FUNCTION TO RENDER", funcToRender)
          // return (
          //   <Public
          //     {...props}
          //     exact
          //     path={r.path}
          //     component={component}
          //     key={index}
          //   />
          // );
          return (
            <Route
              // {...rest}
              path={r.path}
              key={index}
              component={Component}
              // render={(props) => {
              //   return <Component {...props} />;
              // }}
            />
          );
        })}
      </Routes>
    </Layout>
  );
};
export { RoutesAsServerRoutes, routes };
export default ClientRoutes;
