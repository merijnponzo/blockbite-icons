import * as React from "react";

const CheckCircled = (props) => (
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
      d="M10.0378 4.84112C9.81194 4.6822 9.50004 4.73645 9.34112 4.96228L6.51977 8.97157L5.35681 7.78709C5.16334 7.59005 4.84677 7.58714 4.64973 7.78061C4.45268 7.97407 4.44978 8.29064 4.64325 8.48769L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2484C6.77197 10.2363 6.90686 10.1591 6.99226 10.0378L10.1589 5.53777C10.3178 5.31194 10.2636 5.00004 10.0378 4.84112ZM0.877075 7.49991C0.877075 11.1576 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1576 14.1227 7.49991C14.1227 3.84222 11.1576 0.877075 7.49991 0.877075C3.84222 0.877075 0.877075 3.84222 0.877075 7.49991ZM7.49991 1.82707C10.6329 1.82707 13.1727 4.36689 13.1727 7.49991C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49991C1.82708 4.36689 4.36689 1.82707 7.49991 1.82707Z"
      fill="currentColor"
    />
  </svg>
);

export default CheckCircled;
