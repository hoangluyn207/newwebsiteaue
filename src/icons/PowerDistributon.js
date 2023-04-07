import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <path
      fill="#09C"
      d="M39.173 5.893 11.547 30.64c-1.707 1.547-.747 4.4 1.546 4.613l21.574 2.08L21.733 55.36a2.102 2.102 0 0 0 .214 2.693c.8.8 2.053.827 2.88.054L52.453 33.36c1.707-1.547.747-4.4-1.546-4.613l-21.574-2.08L42.267 8.64a2.102 2.102 0 0 0-.214-2.693 2.053 2.053 0 0 0-2.88-.054Z"
    />
  </svg>
);
export default SvgComponent;
