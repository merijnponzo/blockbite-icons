import * as React from "react";

const ArrowBottomRight = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M3.64645 4.35355L10.2929 11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7762 5.72386 12 6 12L11.5 12C11.6326 12 11.7598 11.9473 11.8536 11.8536C11.9473 11.7598 12 11.6326 12 11.5L12 6C12 5.72386 11.7761 5.5 11.5 5.5C11.2239 5.5 11 5.72386 11 6V10.2929L4.35355 3.64645C4.15829 3.45118 3.84171 3.45118 3.64645 3.64645C3.45118 3.84171 3.45118 4.15829 3.64645 4.35355Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowBottomRight;
