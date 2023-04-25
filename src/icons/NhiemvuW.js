import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={52}
    height={43}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M32 8.5 26 2v13l6-6.5Z" fill="#fff" stroke="#fff" />
    <path
      d="m1 33 6.25-6.5L13.5 33 26 20l12.5 13 6.25-6.5L51 33"
      stroke="#fff"
    />
    <path d="m4 42 9.5-9.5L26 20l22 22H4Z" stroke="#fff" />
    <path
      d="m14.874 35.75-2.276-2.25L4 42h44l-7.84-7.75L39 33.5h-2.632l-2.276 2.25L29.287 31l-4.804 4.75L19.678 31l-4.804 4.75Z"
      fill="#fff"
      stroke="#fff"
    />
    <path d="M26 20v-5" stroke="#fff" />
  </svg>
);

export default SvgComponent;
