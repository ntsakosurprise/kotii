import React from "react";
import { Route, Router, Switch as Routes } from "wouter";
import { useAppContext } from "../../react-components-pruned/index.js";
import { comps, routes } from "/.kotii-land/pages.js";

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
const ClientRoutes = async () => {
  const tested = await testRun();
  console.log("THE TESTED", tested);
  const {
    layout
  } = useAppContext();
  // const AppWrapper = props.wrapper;
  // console.log("THE CLIENT ROUTES", layout);
  const Layout = layout ? layout : () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Routes, null, routes.map((r, index) => {
    console.log("THE COMPONENT");
    let Component = comps[r.component];
    const ComponentWrapped = () => {
      return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Component, null));
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
const RoutesAsServerRoutes = async () => {
  const tested = await testRun();
  console.log("THE TESTED", tested);
  const {
    layout
  } = useAppContext();
  const Layout = layout ? layout : () => {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };

  // if (!Layout || Layout) return <div>My react component</div>;
  return /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Routes, null, routes.map((r, index) => {
    let Component = comps[r.component];
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
const testRun = () => {
  return Promise((resolve, reject) => {
    resolve({
      name: "test"
    });
  });
};
// export { RoutesAsServerRoutes, routes };
// export default ClientRoutes;
export { RoutesAsServerRoutes, routes, ClientRoutes };