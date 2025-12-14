/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { LazySuspense } from "kotii-lazy";
import { Router, Routes } from "kotii-router";
import { useAppContext } from "kotii-components";
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

  if (markRoutes.length > 0) {
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
        isPrivate: route?.isPrivate || false,
      });
    });
  }
  return (
    <Router>
      <Layout>
        <Routes
          routes={refinedRoutes}
          // suspense={process.env?.KOTII_USE_LAZY ? LazySuspense : null}
          suspense={LazySuspense}
        />
      </Layout>
    </Router>
  );
};
const ServerRoutes = (props) => {
  const { goodies = {} } = props;
  // const {routes=[], comps={}} = goodies
  const gRoutes = goodies?.routes || [];
  const gComps = goodies?.comps || {};
  const markRoutes = goodies?.markdownRoutes || [];
  const MarkdownRendr = goodies?.MarkdownRender || null;
  const posts = {};

  const { layout } = useAppContext();
  const Layout = layout
    ? layout
    : () => {
        return <></>;
      };
  let refinedRoutes = gRoutes.map((r, index) => {
    let Component = gComps[r.component];

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
        isPrivate: route?.isPrivate || false,
      });
    });
  }

  return (
    <Layout>
      <Routes
        routes={refinedRoutes}
        suspense={LazySuspense}
        // suspense={process.env?.useLazyLoad ? LazySuspense : null}
      />
    </Layout>
  );
};

// export { RoutesAsServerRoutes, routes };
// export default ClientRoutes;
export { ClientRoutes, ServerRoutes };
