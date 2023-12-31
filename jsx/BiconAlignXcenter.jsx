import * as React from "react";

const BiconAlignXcenter = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <line
      x1={25}
      y1={14}
      x2={3}
      y2={14}
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="square"
    />
    <rect x={10} y={5} width={8} height={18} fill="currentColor" />
  </svg>
);

export default BiconAlignXcenter;
