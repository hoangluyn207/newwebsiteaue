import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <circle cx={21} cy={21} r={16} fill="#000" />
    <path
      fill="#fff"
      d="M21 3.5C11.335 3.5 3.5 11.335 3.5 21S11.335 38.5 21 38.5 38.5 30.665 38.5 21 30.665 3.5 21 3.5Zm-4.284 24.753h-3.544V16.85h3.544v11.404ZM14.922 15.45c-1.119 0-1.843-.793-1.843-1.774 0-1 .746-1.77 1.889-1.77s1.843.77 1.865 1.77c0 .981-.722 1.774-1.91 1.774ZM29.66 28.253h-3.544v-6.32c0-1.47-.514-2.47-1.795-2.47-.98 0-1.56.677-1.818 1.327-.095.232-.118.56-.118.886v6.576h-3.546v-7.766c0-1.424-.046-2.614-.093-3.639h3.079l.162 1.584h.071c.467-.743 1.61-1.84 3.522-1.84 2.332 0 4.08 1.562 4.08 4.92v6.742Z"
    />
  </svg>
);
export default SvgComponent;
