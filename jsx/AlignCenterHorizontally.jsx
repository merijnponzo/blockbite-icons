import * as React from "react";

const AlignCenterHorizontally = (props) => (
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
      d="M0.999878 7L0.999878 8C0.999878 8.55228 1.44759 9 1.99988 9L6.99988 9L6.99988 13.5C6.99988 13.7761 7.22374 14 7.49988 14C7.77602 14 7.99988 13.7761 7.99988 13.5L7.99988 9H12.9999C13.5522 9 13.9999 8.55229 13.9999 8V7C13.9999 6.44772 13.5522 6 12.9999 6L7.99988 6L7.99988 1.5C7.99988 1.22386 7.77602 1 7.49988 1C7.22374 1 6.99988 1.22386 6.99988 1.5L6.99988 6L1.99988 6C1.44759 6 0.999878 6.44772 0.999878 7Z"
      fill="currentColor"
    />
  </svg>
);

export default AlignCenterHorizontally;
