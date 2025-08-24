import { LazySuspense } from "kotii-lazy";
import { Router, Routes } from "kotii-router";
import React from "react";
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
  let refinedRoutes = astRoutes.map((r, index) => {
    let Component = astComps[r.component];
    const ComponentWrapped = () => {
      return (
        <Wrapper key={index}>
          <Component />
        </Wrapper>
      );
    };
    return {
      component: <ComponentWrapped />,
      path: r.path,
      children: r?.children || undefined,
    };
  });

  return (
    <LazySuspense fallback={<div>Component is Loading</div>}>
      <Router>
        <Layout>
          <Routes routes={refinedRoutes} />
        </Layout>
      </Router>
    </LazySuspense>
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
  let refinedRoutes = gRoutes.map((r, index) => {
    let Component = gComps[r.component];
    console.log("Server component", Component);

    const ComponentWrapped = () => {
      return (
        <Wrapper key={index}>
          <Component />
        </Wrapper>
      );
    };
    return {
      component: <ComponentWrapped />,
      path: r.path,
      children: r?.children || undefined,
    };
  });
  return (
    <Layout>
      <Routes routes={refinedRoutes} />
    </Layout>
  );
};

// export { RoutesAsServerRoutes, routes };
// export default ClientRoutes;
export { RoutesAsServerRoutes, ClientRoutes };
