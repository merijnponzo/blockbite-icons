import * as React from "react";

const HobbyKnife = (props) => (
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
      d="M12.1465 13.8536L6.39645 8.10364C6.36478 8.07197 6.33825 8.03711 6.31685 8.00009H5.00002C4.78719 8.00009 4.59769 7.86536 4.52777 7.66435L2.12777 0.764363C2.05268 0.548474 2.13355 0.309148 2.3242 0.183059C2.51486 0.0569689 2.76674 0.0762207 2.93602 0.229821L8.336 5.12981C8.44044 5.22458 8.50001 5.35905 8.50001 5.50009V5.81693C8.53702 5.83833 8.57189 5.86486 8.60356 5.89653L14.3536 11.6465C14.5488 11.8418 14.5488 12.1584 14.3536 12.3536L12.8536 13.8536C12.6583 14.0489 12.3417 14.0489 12.1465 13.8536ZM7.45711 7.75009L12.5 12.793L13.2929 12.0001L8.25 6.95719L7.45711 7.75009ZM5.35549 7.00009H6.2929L7.50001 5.79298V5.72155L3.71669 2.28854L5.35549 7.00009Z"
      fill="currentColor"
    />
  </svg>
);

export default HobbyKnife;
