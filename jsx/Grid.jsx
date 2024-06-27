import * as React from "react";

const Grid = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5C1.67157 1 1 1.67157 1 2.5ZM8 2V7H13V2.5C13 2.22386 12.7761 2 12.5 2H8ZM8 8V13H12.5C12.7761 13 13 12.7761 13 12.5V8H8ZM7 2H2.5C2.22386 2 2 2.22386 2 2.5V7H7V2ZM2 12.5C2 12.7761 2.22386 13 2.5 13H7V8H2V12.5Z"
      fill="currentColor"
    />
  </svg>
);

export default Grid;
