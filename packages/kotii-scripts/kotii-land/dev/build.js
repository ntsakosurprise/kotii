import React from "react";
import { Route, Router, Switch as Routes } from "wouter";
import { useAppContext } from "../../react-components/index.jsx";

// import { comps, routes, getPagesTools } from "./pages.js";

// const comps = {
//   Test,
//   Privacy,
//   Home,
//   Faqs,
//   ContactUs,
//   About,
//   Todo,
//   Pos,
//   Slug,
//   Connection,
//   Testing,
// };
// const routes = [
//   {
//     path: "/test",
//     component: "Test",
//   },
//   {
//     path: "/privacy",
//     component: "Privacy",
//   },
//   {
//     path: "/",
//     component: "Home",
//   },
//   {
//     path: "/faqs",
//     component: "Faqs",
//   },
//   {
//     path: "/contact-us",
//     component: "ContactUs",
//   },
//   {
//     path: "/about",
//     component: "About",
//   },
//   {
//     path: "/todo",
//     component: "Todo",
//   },
//   {
//     path: "/pos",
//     component: "Pos",
//   },
//   {
//     path: "/pos/:slug",
//     component: "Slug",
//   },
//   {
//     path: "/connection",
//     component: "Connection",
//   },
//   {
//     path: "/testing",
//     component: "Testing",
//   },
//   // {
//   //   path: "/test.jsxxxx",
//   //   component: "Test.jsxxxx",
//   // },
// ];

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
  console.log("THE CLIENT PROPS", props);
  let astRoutes = typeof routes === "undefined" ? [] : routes;
  let astComps = typeof comps === "undefined" ? {} : comps;
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
          {astRoutes.map((r, index) => {
            console.log("THE COMPONENT");
            let Component = astComps[r.component];
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
const RoutesAsServerRoutes = (props) => {
  console.log("Server Goodies", props);
  const { goodies = {} } = props;
  // const {routes=[], comps={}} = goodies
  const gRoutes = goodies?.routes || [];
  const gComps = goodies?.comps || {};
  console.log("THE ROUTES IN SERVER", gRoutes);
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
        {gRoutes.map((r, index) => {
          console.log("CURRENT SERVER ROUTE", r, gComps[r.component]);
          let Component = gComps[r.component];
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
export { RoutesAsServerRoutes, ClientRoutes };
