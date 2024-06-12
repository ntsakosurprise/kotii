import React from "react";
import { Route, Router, Switch as Routes } from "wouter";
import { useAppContext } from "./react-components/index.jsx";

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

const ClientRoutes = () => {
  const { layout } = useAppContext();
  // const AppWrapper = props.wrapper;
  // console.log("THE CLIENT ROUTES", layout);
  const Layout = layout
    ? layout
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
            const ComponentWrapped = () => {
              return (
                <Wrapper>
                  <Component />
                </Wrapper>
              );
            };
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
                component={ComponentWrapped}
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

const RoutesAsServerRoutes = () => {
  const { layout } = useAppContext();
  const Layout = layout
    ? layout
    : () => {
        return <></>;
      };

  // if (!Layout || Layout) return <div>My react component</div>;
  return (
    <Layout>
      <Routes>
        {routes.map((r, index) => {
          let Component = comps[r.component];

          let ComponentWrapped = () => {
            return (
              <Wrapper>
                <Component />
              </Wrapper>
            );
          };

          return (
            <Route key={index} path={r.path} component={ComponentWrapped} />
          );
        })}
      </Routes>
    </Layout>
  );
};
// export { RoutesAsServerRoutes, routes };
// export default ClientRoutes;
export { RoutesAsServerRoutes, routes, ClientRoutes };
