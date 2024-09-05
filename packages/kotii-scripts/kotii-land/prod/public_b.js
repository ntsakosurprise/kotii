function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
import PropTypes from "prop-types";
import React from "react";
// import { Route } from "react-router-dom";
import { Route } from "wouter";

// import { Footer, Header } from "Layouts";

const Public = _ref => {
  let {
    component: Component,
    ...rest
  } = _ref;
  //   console.log("testHEADER");
  //   console.log(Header);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Route, _extends({}, rest, {
    render: props => {
      return /*#__PURE__*/React.createElement(Component, props);
    }
  })));
};
Public.propTypes = {
  component: PropTypes.func.isRequired
};
export default Public;