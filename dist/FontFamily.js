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
var FontFamily = function FontFamily(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5 2H12.499C12.7752 2 13 2.22386 13 2.5C13 2.77614 12.7761 3 12.5 3H8.69244L8.40509 3.85458C8.18869 4.49752 7.89401 5.37197 7.58091 6.29794C7.50259 6.52956 7.42308 6.76453 7.34332 7H8.5C8.77614 7 9 7.22386 9 7.5C9 7.77614 8.77614 8 8.5 8H7.00407C6.56724 9.28543 6.16435 10.4613 5.95799 11.0386C5.63627 11.9386 5.20712 12.4857 4.66741 12.7778C4.16335 13.0507 3.64154 13.0503 3.28378 13.05L3.25 13.05C2.94624 13.05 2.7 12.8037 2.7 12.5C2.7 12.1962 2.94624 11.95 3.25 11.95C3.64182 11.95 3.9035 11.9405 4.14374 11.8105C4.36443 11.691 4.65532 11.4148 4.92217 10.6683C5.10695 10.1514 5.45375 9.14134 5.8422 8H4.5C4.22386 8 4 7.77614 4 7.5C4 7.22386 4.22386 7 4.5 7H6.18187C6.30127 6.64785 6.42132 6.29323 6.53887 5.94559C6.85175 5.02025 7.14627 4.14631 7.36256 3.50368L7.53192 3H5C4.15114 3 3.5 3.65114 3.5 4.5C3.5 4.77614 3.27614 5 3 5C2.72386 5 2.5 4.77614 2.5 4.5C2.5 3.09886 3.59886 2 5 2Z",
    fill: "black"
  }));
};
var _default = exports["default"] = FontFamily;