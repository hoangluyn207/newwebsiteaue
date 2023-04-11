import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <circle cx={11} cy={11} r={11} fill="#fff" />
      <path
        fill="#000"
        d="M11.36 9.733v-.33h.987v4.636h-.564a.422.422 0 0 1-.424-.42 2.408 2.408 0 0 1-3.124-3.645 2.408 2.408 0 0 1 3.124-.241Zm-4.086-1.82v.15c0 .28-.037.509-.22.777l-.022.025c-.06.068-.12.138-.178.21l-3.17 3.978h3.59v.563a.422.422 0 0 1-.423.423H2.2v-.265c0-.325.08-.47.183-.622L5.762 8.97H2.34V7.913h4.933Zm6.27 6.126a.352.352 0 0 1-.351-.352V7.913h1.056v6.126h-.704Zm3.83-4.799a2.425 2.425 0 1 1 .002 4.85 2.425 2.425 0 0 1-.001-4.85ZM9.94 13.092a1.418 1.418 0 1 0 .064-2.835 1.418 1.418 0 0 0-.064 2.835Zm7.436-.002a1.426 1.426 0 1 0 0-2.852 1.426 1.426 0 0 0 0 2.852Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
