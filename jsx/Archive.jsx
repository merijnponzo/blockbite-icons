import * as React from "react";

const Archive = (props) => (
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
      d="M5 7.5C5 7.77614 5.22386 8 5.5 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.5C5.22386 7 5 7.22386 5 7.5ZM2.41459 1.55279L1.05279 4.27639C1.01807 4.34582 1 4.42238 1 4.5V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V4.5C14 4.42238 13.9819 4.34582 13.9472 4.27639L12.5854 1.55281C12.416 1.21403 12.0698 1.00003 11.691 1.00003L3.30902 1C2.93025 1 2.58398 1.214 2.41459 1.55279ZM7 2.00001V4H2.30902L3.30902 2L7 2.00001ZM8 2.00002L11.691 2.00003L12.691 4H8V2.00002ZM13 13H2V5H13V13Z"
      fill="currentColor"
    />
  </svg>
);

export default Archive;
