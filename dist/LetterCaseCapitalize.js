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
var LetterCaseCapitalize = function LetterCaseCapitalize(props) {
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
    d: "M4.15679 3.07003L7.36662 11.39C7.46602 11.6477 7.33774 11.9371 7.0801 12.0365C6.82247 12.1359 6.53304 12.0076 6.43365 11.75L5.3825 9.02537H2.01133L0.966992 11.749C0.868128 12.0068 0.578964 12.1357 0.321126 12.0369C0.0632878 11.938 -0.0655864 11.6488 0.0332774 11.391L3.22344 3.07099C3.29751 2.87782 3.4829 2.75021 3.68979 2.75C3.89667 2.74979 4.08232 2.87701 4.15679 3.07003ZM5.05458 8.17537H2.33724L3.69174 4.64284L5.05458 8.17537ZM8.00915 8.60972C8.00915 10.6337 9.35818 12.0124 10.8989 12.0124C11.7214 12.0124 12.5744 11.6692 13.1543 11.0219V11.53C13.1543 11.7785 13.3557 11.98 13.6043 11.98C13.8528 11.98 14.0543 11.7785 14.0543 11.53V5.72C14.0543 5.47147 13.8528 5.27 13.6043 5.27C13.3557 5.27 13.1543 5.47147 13.1543 5.72V6.22317C12.6054 5.60095 11.7924 5.20703 10.8989 5.20703C9.25818 5.20703 8.00915 6.68569 8.00915 8.60972ZM13.1543 7.30195C12.7639 6.58101 11.9414 6.05757 11.0868 6.05757C10.1088 6.05757 9.03503 6.96581 9.03503 8.60955C9.03503 10.1533 10.0088 11.1615 11.0868 11.1615C11.9701 11.1615 12.7719 10.4952 13.1543 9.79823V7.30195Z",
    fill: "black"
  }));
};
var _default = exports["default"] = LetterCaseCapitalize;