const _excluded = ["component"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
import PropTypes from "prop-types";
import React from "react";
// import { Route } from "react-router-dom";
import { Route } from "wouter";

// import { Footer, Header } from "Layouts";

const Public = _ref => {
  let {
      component: Component
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
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