import React from "react";
import { LazySuspense } from "kotii-lazy";
import { Router, Routes } from "kotii-router";
import { useAppContext } from "../../react-components-pruned/index.js";
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
  console.log("THE PROCESS ENV", process.env);
  // const AppWrapper = props.wrapper;
  // console.log("THE CLIENT ROUTES", layout);
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
  console.log("SERVER ROUTES:", markRoutes);
  console.log("SERVER ROUTES RENDER:", MarkdownRendr);
  if (markRoutes.length > 0) {
    console.log("SERVER ROUTES:.length", markRoutes);
    markRoutes.forEach((route, index) => {
      var _r;
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
        isPrivate: ((_r = r) === null || _r === void 0 ? void 0 : _r.isPrivate) || false
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
const RoutesAsServerRoutes = props => {
  const {
    goodies = {}
  } = props;
  // const {routes=[], comps={}} = goodies
  const gRoutes = (goodies === null || goodies === void 0 ? void 0 : goodies.routes) || [];
  const gComps = (goodies === null || goodies === void 0 ? void 0 : goodies.comps) || {};
  const markRoutes = (goodies === null || goodies === void 0 ? void 0 : goodies.markdownRoutes) || [];
  const MarkdownRendr = (goodies === null || goodies === void 0 ? void 0 : goodies.MarkdownRender) || null;
  const posts = {};
  console.log("SERVER ROUTES:", markRoutes);
  console.log("SERVER ROUTES RENDER:", MarkdownRendr);
  const {
    layout
  } = useAppContext();
  const Layout = layout ? layout : () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  let refinedRoutes = gRoutes.map((r, index) => {
    let Component = gComps[r.component];
    console.log("Server component", Component);
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
    console.log("SERVER ROUTES:");
    markRoutes.forEach((route, index) => {
      var _r2;
      console.log("SERVER ROUTES: route", route);
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
        isPrivate: ((_r2 = r) === null || _r2 === void 0 ? void 0 : _r2.isPrivate) || false
      });
    });
  }
  console.log("SERVER ROUTES:::", refinedRoutes);
  return /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Routes, {
    routes: refinedRoutes,
    suspense: LazySuspense
    // suspense={process.env?.useLazyLoad ? LazySuspense : null}
  }));
};

// export { RoutesAsServerRoutes, routes };
// export default ClientRoutes;
export { ClientRoutes, RoutesAsServerRoutes };