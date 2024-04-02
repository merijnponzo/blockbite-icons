"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var BiconHorizontal = function BiconHorizontal(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_283_152)"
  }, /*#__PURE__*/React.createElement("line", {
    x1: 20,
    y1: 14,
    x2: 6,
    y2: 14,
    stroke: "black",
    strokeWidth: 4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 14L20 21L20 7.00001L28 14Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.17941e-07 14L8 6.99999L8 21L9.17941e-07 14Z",
    fill: "black"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_283_152"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 28,
    height: 28,
    fill: "white"
  }))));
};
var _default = exports["default"] = BiconHorizontal;