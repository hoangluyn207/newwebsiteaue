import * as React from "react";

const SvgComponent = ({ props, color }) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.333 5.333 8 8.667 2.667 5.333V4L8 7.333 13.333 4m0-1.333H2.667c-.74 0-1.334.593-1.334 1.333v8a1.333 1.333 0 0 0 1.334 1.333h10.666A1.333 1.333 0 0 0 14.667 12V4a1.333 1.333 0 0 0-1.334-1.333Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;
