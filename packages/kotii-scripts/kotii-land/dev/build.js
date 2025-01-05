import React from "react";
import { Route, Router, Switch as Routes } from "wouter";
import { useAppContext } from "../../react-components/index.jsx";

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
            let Component = astComps[r.component];
            const ComponentWrapped = () => {
              return (
                <Wrapper>
                  <Component />
                </Wrapper>
              );
            };

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
  const { goodies = {} } = props;
  // const {routes=[], comps={}} = goodies
  const gRoutes = goodies?.routes || [];
  const gComps = goodies?.comps || {};

  const { layout } = useAppContext();
  const Layout = layout
    ? layout
    : () => {
        return <></>;
      };

  return (
    <Layout>
      <Routes>
        {gRoutes.map((r, index) => {
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
