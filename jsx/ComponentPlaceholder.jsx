import * as React from "react";

const ComponentPlaceholder = (props) => (
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
      d="M7.14651 1.48959C6.95125 1.68485 6.95125 2.00143 7.14651 2.19669C7.34177 2.39196 7.65835 2.39196 7.85361 2.19669C8.04888 2.00143 8.04888 1.68485 7.85361 1.48959C7.65835 1.29432 7.34177 1.29432 7.14651 1.48959ZM9.2678 2.90377C9.46306 3.09903 9.46306 3.41562 9.2678 3.61088C9.07254 3.80614 8.75596 3.80614 8.56069 3.61088C8.36543 3.41562 8.36543 3.09903 8.56069 2.90377C8.75595 2.70851 9.07254 2.70851 9.2678 2.90377ZM5.02518 4.31799C5.22045 4.51325 5.22045 4.82983 5.02518 5.02509C4.82992 5.22036 4.51334 5.22036 4.31808 5.02509C4.12281 4.82983 4.12282 4.51325 4.31808 4.31799C4.51334 4.12272 4.82992 4.12272 5.02518 4.31799ZM3.61094 5.7322C3.8062 5.92746 3.8062 6.24405 3.61094 6.43931C3.41568 6.63457 3.09909 6.63457 2.90383 6.43931C2.70857 6.24405 2.70857 5.92746 2.90383 5.7322C3.09909 5.53694 3.41568 5.53694 3.61094 5.7322ZM2.26082 7.22485C2.09046 6.96682 1.71063 6.92543 1.48965 7.14642C1.29439 7.34168 1.29439 7.65826 1.48965 7.85352C1.68491 8.04879 2.00149 8.04879 2.19675 7.85352C2.36761 7.68267 2.38897 7.41893 2.26082 7.22485ZM2.90383 8.56063C3.09909 8.36537 3.41568 8.36537 3.61094 8.56063C3.8062 8.75589 3.8062 9.07248 3.61094 9.26774C3.41568 9.463 3.09909 9.463 2.90383 9.26774C2.70857 9.07248 2.70857 8.75589 2.90383 8.56063ZM4.31808 10.682C4.51334 10.8772 4.82992 10.8772 5.02519 10.682C5.22045 10.4867 5.22045 10.1701 5.02518 9.97485C4.82992 9.77958 4.51334 9.77958 4.31808 9.97485C4.12282 10.1701 4.12282 10.4867 4.31808 10.682ZM5.73226 11.3891C5.92752 11.1938 6.24411 11.1938 6.43937 11.3891C6.63463 11.5843 6.63463 11.9009 6.43937 12.0962C6.24411 12.2914 5.92752 12.2914 5.73226 12.0962C5.537 11.9009 5.537 11.5843 5.73226 11.3891ZM7.14651 12.8033C7.17092 12.7789 7.19722 12.7575 7.22494 12.7392C7.41902 12.6111 7.68276 12.6324 7.85361 12.8033C8.04888 12.9985 8.04888 13.3151 7.85361 13.5104C7.65835 13.7056 7.34177 13.7056 7.14651 13.5104C6.95125 13.3151 6.95125 12.9985 7.14651 12.8033ZM9.2678 11.3891C9.07254 11.1938 8.75596 11.1938 8.56069 11.3891C8.36543 11.5843 8.36543 11.9009 8.56069 12.0962C8.75595 12.2914 9.07254 12.2914 9.2678 12.0962C9.46306 11.9009 9.46306 11.5843 9.2678 11.3891ZM10.682 10.682C10.4868 10.8772 10.1702 10.8772 9.97494 10.682C9.77968 10.4867 9.77968 10.1701 9.97494 9.97485C10.1702 9.77958 10.4868 9.77958 10.682 9.97485C10.8773 10.1701 10.8773 10.4867 10.682 10.682ZM12.0962 8.56063C11.901 8.36537 11.5844 8.36537 11.3891 8.56063C11.1939 8.75589 11.1939 9.07248 11.3891 9.26774C11.5844 9.463 11.901 9.463 12.0962 9.26774C12.2915 9.07248 12.2915 8.75589 12.0962 8.56063ZM13.5105 7.14642C13.7057 7.34168 13.7057 7.65826 13.5105 7.85352C13.3152 8.04879 12.9986 8.04879 12.8034 7.85352C12.6081 7.65826 12.6081 7.34168 12.8034 7.14642C12.9986 6.95115 13.3152 6.95115 13.5105 7.14642ZM12.0962 5.7322C12.2915 5.92746 12.2915 6.24405 12.0962 6.43931C11.901 6.63457 11.5844 6.63457 11.3891 6.43931C11.1939 6.24405 11.1939 5.92746 11.3891 5.7322C11.5844 5.53694 11.901 5.53694 12.0962 5.7322ZM9.97494 4.31799C9.77968 4.51325 9.77968 4.82983 9.97494 5.02509C10.1702 5.22036 10.4868 5.22036 10.682 5.02509C10.8773 4.82983 10.8773 4.51325 10.682 4.31799C10.4868 4.12272 10.1702 4.12272 9.97494 4.31799ZM6.43937 2.90377C6.63463 3.09903 6.63463 3.41562 6.43937 3.61088C6.24411 3.80614 5.92752 3.80614 5.73226 3.61088C5.537 3.41562 5.537 3.09903 5.73226 2.90377C5.92752 2.70851 6.24411 2.70851 6.43937 2.90377Z"
      fill="currentColor"
    />
  </svg>
);

export default ComponentPlaceholder;
