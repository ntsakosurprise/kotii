function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
import React from "react";
const Svg = props => {
  const {
    tag = "object"
  } = props;
  switch (tag) {
    case "object":
      return /*#__PURE__*/React.createElement(SvgObjectTag, props);
    default:
      return /*#__PURE__*/React.createElement(SvgIframeTag, props);
  }
};
const SvgObjectTag = props => {
  return /*#__PURE__*/React.createElement("object", _extends({
    type: "image/svg+xml",
    data: props.src,
    className: props !== null && props !== void 0 && props.styles ? props.styles : ""
  }, props));
};
const SvgIframeTag = props => {
  return /*#__PURE__*/React.createElement("iframe", _extends({
    src: props.src
  }, props));
};
export default Svg;