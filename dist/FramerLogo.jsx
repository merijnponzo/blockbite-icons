import * as React from "react";

const FramerLogo = (props) => (
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
      d="M3.84005 0.997314H11.5C11.7761 0.997314 12 1.22117 12 1.49731V5.50003C12 5.77617 11.7761 6.00003 11.5 6.00003H8.63521L11.5288 9.1625C11.6626 9.30873 11.6974 9.52018 11.6175 9.70157C11.5376 9.88296 11.3582 10 11.16 10H8V13.5C8 13.7023 7.87818 13.8846 7.69134 13.962C7.5045 14.0394 7.28945 13.9966 7.14645 13.8536L3.14645 9.85358C3.05268 9.75982 3 9.63264 3 9.50003V5.50003C3 5.22389 3.22386 5.00003 3.5 5.00003H6.36531L3.47105 1.83472C3.33732 1.68847 3.30259 1.47704 3.3825 1.2957C3.46241 1.11435 3.64188 0.997314 3.84005 0.997314ZM4.97474 1.99731H11V5.00003H7.72032L4.97474 1.99731ZM4 6.00003V9.00003H10.0247L7.27978 6.00003H4ZM7 12.2929V10H4.70711L7 12.2929Z"
      fill="currentColor"
    />
  </svg>
);

export default FramerLogo;
