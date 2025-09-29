import React from "react";
import { LazySuspense } from "kotii-lazy";
import { Router, Routes } from "kotii-router";
import { AuthProvider } from "kotii-auth";
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
  let markRoutes = typeof markdownRoutes === "undefined" ? [] : markdownRoutes;
  let MarkdownRendr =
    typeof MarkdownRender === "undefined" ? null : MarkdownRender;
  const { layout } = useAppContext();
  console.log("THE PROCESS ENV", process.env);
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
      component: () => <ComponentWrapped />,
      path: r.path,
      children: r?.children || undefined,
      isPrivate: r?.isPrivate || false,
    };
  });
  console.log("SERVER ROUTES:", markRoutes);
  console.log("SERVER ROUTES RENDER:", MarkdownRendr);
  if (markRoutes.length > 0) {
    console.log("SERVER ROUTES:.length", markRoutes);
    markRoutes.forEach((route, index) => {
      const ComponentWrapped = () => {
        return (
          <Wrapper key={index}>
            <MarkdownRendr
              markdownData={route.markdownData}
              markdownComponents={route?.markdownComponents || {}}
              routes={markRoutes}
            />
          </Wrapper>
        );
      };
      refinedRoutes.push({
        component: () => <ComponentWrapped />,
        path: route.path,
        isPrivate: r?.isPrivate || false,
      });
    });
  }
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes
            routes={refinedRoutes}
            // suspense={process.env?.KOTII_USE_LAZY ? LazySuspense : null}
            suspense={LazySuspense}
          />
        </Layout>
      </Router>
    </AuthProvider>
  );
};
const RoutesAsServerRoutes = (props) => {
  const { goodies = {} } = props;
  // const {routes=[], comps={}} = goodies
  const gRoutes = goodies?.routes || [];
  const gComps = goodies?.comps || {};
  const markRoutes = goodies?.markdownRoutes || [];
  const MarkdownRendr = goodies?.MarkdownRender || null;
  const posts = {};
  console.log("SERVER ROUTES:", markRoutes);
  console.log("SERVER ROUTES RENDER:", MarkdownRendr);
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
      component: () => <ComponentWrapped />,
      path: r.path,
      children: r?.children || undefined,
      isPrivate: r?.isPrivate || false,
    };
  });
  if (markRoutes.length > 0) {
    console.log("SERVER ROUTES:");
    markRoutes.forEach((route, index) => {
      console.log("SERVER ROUTES: route", route);
      const ComponentWrapped = () => {
        return (
          <Wrapper key={index}>
            <MarkdownRendr
              markdownData={route.markdownData}
              markdownComponents={route?.markdownComponents || {}}
              routes={markRoutes}
            />
          </Wrapper>
        );
      };
      refinedRoutes.push({
        component: () => <ComponentWrapped />,
        path: route.path,
        isPrivate: r?.isPrivate || false,
      });
    });
  }
  console.log("SERVER ROUTES:::", refinedRoutes);
  return (
    <AuthProvider>
      <Layout>
        <Routes
          routes={refinedRoutes}
          suspense={LazySuspense}
          // suspense={process.env?.useLazyLoad ? LazySuspense : null}
        />
      </Layout>
    </AuthProvider>
  );
};

// export { RoutesAsServerRoutes, routes };
// export default ClientRoutes;
export { ClientRoutes, RoutesAsServerRoutes };
