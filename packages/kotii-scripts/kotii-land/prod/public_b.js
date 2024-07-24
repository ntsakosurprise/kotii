function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
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