/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { LazySuspense } from "kotii-lazy";
import { Router, Routes } from "kotii-router";
import { useAppContext } from "kotii-components";
const Wrapper = props => {
  //const Component = props.component;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: "2%",
      paddingTop: "2vh",
      fontFamily: '"Roboto", sans-serif'
    }
  }, props.children);
};
const ClientRoutes = props => {
  let astRoutes = typeof routes === "undefined" ? [] : routes;
  let astComps = typeof comps === "undefined" ? {} : comps;
  let markRoutes = typeof markdownRoutes === "undefined" ? [] : markdownRoutes;
  let MarkdownRendr = typeof MarkdownRender === "undefined" ? null : MarkdownRender;
  const {
    layout
  } = useAppContext();
  const Layout = layout ? layout : () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  let refinedRoutes = astRoutes.map((r, index) => {
    let Component = astComps[r.component];
    const ComponentWrapped = () => {
      return /*#__PURE__*/React.createElement(Wrapper, {
        key: index
      }, /*#__PURE__*/React.createElement(Component, null));
    };
    return {
      component: () => /*#__PURE__*/React.createElement(ComponentWrapped, null),
      path: r.path,
      children: (r === null || r === void 0 ? void 0 : r.children) || undefined,
      isPrivate: (r === null || r === void 0 ? void 0 : r.isPrivate) || false
    };
  });
  if (markRoutes.length > 0) {
    markRoutes.forEach((route, index) => {
      const ComponentWrapped = () => {
        return /*#__PURE__*/React.createElement(Wrapper, {
          key: index
        }, /*#__PURE__*/React.createElement(MarkdownRendr, {
          markdownData: route.markdownData,
          markdownComponents: (route === null || route === void 0 ? void 0 : route.markdownComponents) || {},
          routes: markRoutes
        }));
      };
      refinedRoutes.push({
        component: () => /*#__PURE__*/React.createElement(ComponentWrapped, null),
        path: route.path,
        isPrivate: (route === null || route === void 0 ? void 0 : route.isPrivate) || false
      });
    });
  }
  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Routes, {
    routes: refinedRoutes
    // suspense={process.env?.KOTII_USE_LAZY ? LazySuspense : null}
    ,

    suspense: LazySuspense
  })));
};
const ServerRoutes = props => {
  const {
    goodies = {}
  } = props;
  // const {routes=[], comps={}} = goodies
  const gRoutes = (goodies === null || goodies === void 0 ? void 0 : goodies.routes) || [];
  const gComps = (goodies === null || goodies === void 0 ? void 0 : goodies.comps) || {};
  const markRoutes = (goodies === null || goodies === void 0 ? void 0 : goodies.markdownRoutes) || [];
  const MarkdownRendr = (goodies === null || goodies === void 0 ? void 0 : goodies.MarkdownRender) || null;
  const posts = {};
  const {
    layout
  } = useAppContext();
  const Layout = layout ? layout : () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  let refinedRoutes = gRoutes.map((r, index) => {
    let Component = gComps[r.component];
    const ComponentWrapped = () => {
      return /*#__PURE__*/React.createElement(Wrapper, {
        key: index
      }, /*#__PURE__*/React.createElement(Component, null));
    };
    return {
      component: () => /*#__PURE__*/React.createElement(ComponentWrapped, null),
      path: r.path,
      children: (r === null || r === void 0 ? void 0 : r.children) || undefined,
      isPrivate: (r === null || r === void 0 ? void 0 : r.isPrivate) || false
    };
  });
  if (markRoutes.length > 0) {
    markRoutes.forEach((route, index) => {
      const ComponentWrapped = () => {
        return /*#__PURE__*/React.createElement(Wrapper, {
          key: index
        }, /*#__PURE__*/React.createElement(MarkdownRendr, {
          markdownData: route.markdownData,
          markdownComponents: (route === null || route === void 0 ? void 0 : route.markdownComponents) || {},
          routes: markRoutes
        }));
      };
      refinedRoutes.push({
        component: () => /*#__PURE__*/React.createElement(ComponentWrapped, null),
        path: route.path,
        isPrivate: (route === null || route === void 0 ? void 0 : route.isPrivate) || false
      });
    });
  }
  return /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Routes, {
    routes: refinedRoutes,
    suspense: LazySuspense
    // suspense={process.env?.useLazyLoad ? LazySuspense : null}
  }));
};

// export { RoutesAsServerRoutes, routes };
// export default ClientRoutes;
export { ClientRoutes, ServerRoutes };