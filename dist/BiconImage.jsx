import * as React from "react";

const BiconImage = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={50} height={50} fill="currentColor" />
    <path
      d="M35.5 15.6667H14.5C14.1906 15.6667 13.8938 15.7896 13.6751 16.0084C13.4563 16.2272 13.3333 16.5239 13.3333 16.8333V33.1667C13.3333 33.4761 13.4563 33.7728 13.6751 33.9916C13.8938 34.2104 14.1906 34.3333 14.5 34.3333H35.5C35.8094 34.3333 36.1062 34.2104 36.325 33.9916C36.5438 33.7728 36.6667 33.4761 36.6667 33.1667V16.8333C36.6667 16.5239 36.5438 16.2272 36.325 16.0084C36.1062 15.7896 35.8094 15.6667 35.5 15.6667ZM19.1667 19.1667C19.6282 19.1667 20.0793 19.3035 20.463 19.5599C20.8467 19.8163 21.1458 20.1807 21.3224 20.6071C21.499 21.0334 21.5452 21.5026 21.4552 21.9552C21.3651 22.4078 21.1429 22.8236 20.8166 23.1499C20.4903 23.4762 20.0745 23.6985 19.6219 23.7885C19.1693 23.8785 18.7001 23.8323 18.2737 23.6557C17.8474 23.4791 17.483 23.18 17.2266 22.7963C16.9702 22.4126 16.8333 21.9615 16.8333 21.5C16.8333 20.8812 17.0792 20.2877 17.5168 19.8501C17.9543 19.4125 18.5478 19.1667 19.1667 19.1667ZM34.3333 32H15.6667V30.0552L20.3333 26.1667L23.6665 28.6668L29.6667 22.6667L34.3333 28.8885V32Z"
      fill="#F5F5F5"
    />
  </svg>
);

export default BiconImage;
