"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Hero = (0, _styledComponents.default)("div")(() => {
  return {
    marginLeft: "10px"
  };
});
const HeroText = (0, _styledComponents.default)("p")(() => {
  return {
    marginLeft: "10px"
  };
});
const Index = () => {
  return /*#__PURE__*/_react.default.createElement(Hero, null, /*#__PURE__*/_react.default.createElement(HeroText, null, "Focus on your idea, Forget about configurations"), ";");
};
var _default = exports.default = Index;