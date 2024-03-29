import * as React from "react";

const BiconScaleX = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M19.6316 12.3684L19.6316 25L11.8947 25L19.6316 12.3684Z"
      fill="currentColor"
    />
    <path
      d="M14.1052 25L6.36838 25L6.36838 12.3684L14.1052 25Z"
      fill="currentColor"
    />
    <path
      d="M6.36838 13.6316L6.36838 0.999999L14.1052 1L6.36838 13.6316Z"
      fill="currentColor"
    />
    <path
      d="M11.8947 0.999999L19.6316 0.999999L19.6316 13.6316L11.8947 0.999999Z"
      fill="currentColor"
    />
  </svg>
);

export default BiconScaleX;
