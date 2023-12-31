function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconPlus = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("line", {
  x1: 26.0416,
  y1: 13.8995,
  x2: 2,
  y2: 13.8995,
  stroke: "currentColor",
  strokeWidth: 4
}), /*#__PURE__*/React.createElement("line", {
  y1: -2,
  x2: 24.0416,
  y2: -2,
  transform: "matrix(-2.18557e-08 1 1 2.18557e-08 16.1422 2)",
  stroke: "currentColor",
  strokeWidth: 4
}));
export default BiconPlus;