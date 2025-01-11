import React from "react";
import { Route, Router, Switch as Routes } from "wouter";
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
  const {
    layout
  } = useAppContext();
  // const AppWrapper = props.wrapper;
  // console.log("THE CLIENT ROUTES", layout);
  const Layout = layout ? layout : () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Routes, null, astRoutes.map((r, index) => {
    let Component = astComps[r.component];
    const ComponentWrapped = () => {
      return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Component, null));
    };
    return /*#__PURE__*/React.createElement(Route
    // {...rest}
    , {
      key: index,
      path: r.path,
      component: ComponentWrapped
      // render={(props) => {
      //   return <Component {...props} />;
      // }}
    });
  }))));
};
const RoutesAsServerRoutes = props => {
  const {
    goodies = {}
  } = props;
  // const {routes=[], comps={}} = goodies
  const gRoutes = goodies?.routes || [];
  const gComps = goodies?.comps || {};
  const {
    layout
  } = useAppContext();
  const Layout = layout ? layout : () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  return /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Routes, null, gRoutes.map((r, index) => {
    let Component = gComps[r.component];
    let ComponentWrapped = () => {
      return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Component, null));
    };
    return /*#__PURE__*/React.createElement(Route, {
      key: index,
      path: r.path,
      component: ComponentWrapped
    });
  })));
};

// export { RoutesAsServerRoutes, routes };
// export default ClientRoutes;
export { RoutesAsServerRoutes, ClientRoutes };