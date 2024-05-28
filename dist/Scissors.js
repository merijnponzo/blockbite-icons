"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Scissors = function Scissors(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.0499878 4.48455C0.0499878 3.13145 1.14689 2.03455 2.49999 2.03455C3.85309 2.03455 4.94999 3.13145 4.94999 4.48455C4.94999 4.80813 4.88726 5.11707 4.77329 5.39985L5.73655 6.04413C5.72943 6.06656 5.72269 6.08914 5.71635 6.11188L5.56288 6.66186L5.21005 6.89773L4.21554 6.23366C3.77357 6.6672 3.168 6.93455 2.49999 6.93455C1.14689 6.93455 0.0499878 5.83764 0.0499878 4.48455ZM2.49999 6.03455C3.35603 6.03455 4.04999 5.34059 4.04999 4.48455C4.04999 3.6285 3.35603 2.93455 2.49999 2.93455C1.64395 2.93455 0.949988 3.6285 0.949988 4.48455C0.949988 5.34059 1.64395 6.03455 2.49999 6.03455ZM0.0499908 10.5C0.0499908 11.8531 1.14689 12.95 2.49999 12.95C3.85309 12.95 4.94999 11.8531 4.94999 10.5C4.94999 10.1803 4.88877 9.87497 4.77743 9.595L15 2.75737L14.0486 2.85737C12.7077 2.9983 11.4091 3.40895 10.231 4.06461L7.15646 5.77564C6.92307 5.90553 6.75134 6.12339 6.67955 6.38066L6.42653 7.28737L4.22437 8.75957C3.78166 8.32091 3.17246 8.04998 2.49999 8.04998C1.14689 8.04998 0.0499908 9.14688 0.0499908 10.5ZM2.49999 8.94998C3.35603 8.94998 4.04999 9.64394 4.04999 10.5C4.04999 11.356 3.35603 12.05 2.49999 12.05C1.64395 12.05 0.949991 11.356 0.949991 10.5C0.949991 9.64394 1.64395 8.94998 2.49999 8.94998ZM7.15646 9.22176L10.231 10.9328C11.4091 11.5884 12.7077 11.9991 14.0486 12.14L15 12.24L8.81072 8.1003L7.14435 9.2149L7.15646 9.22176Z",
    fill: "black"
  }));
};
var _default = exports["default"] = Scissors;