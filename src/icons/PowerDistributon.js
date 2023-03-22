import { color } from "framer-motion";
import * as React from "react";

const SvgComponent = ({ props, color }) => (
  <svg
    width={49}
    height={61}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="m32.745 1.378.01-.01.01-.01c.248-.234.581-.364.926-.358.342.007.673.148.92.396.455.455.519 1.2.133 1.744l-.001.001L20.187 23.43l-1.013 1.411 1.73.167 24.285 2.343h.002c1.721.162 2.43 2.305 1.165 3.456l-.002.002L15.26 58.66l-.008.008-.008.007c-.535.501-1.33.486-1.849-.035a1.366 1.366 0 0 1-.133-1.746L27.82 36.605l1.013-1.412-1.73-.166-24.285-2.34h-.003c-1.724-.16-2.434-2.301-1.167-3.452l.002-.002L32.745 1.378Z"
        stroke={color}
        strokeWidth={2}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h49v61H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
