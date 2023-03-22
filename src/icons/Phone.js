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
      d="M4.413 7.193a10.1 10.1 0 0 0 4.394 4.394l1.466-1.467c.18-.18.447-.24.68-.16.747.247 1.554.38 2.38.38.367 0 .667.3.667.667v2.326c0 .367-.3.667-.667.667C7.073 14 2 8.927 2 2.667 2 2.3 2.3 2 2.667 2H5c.367 0 .667.3.667.667 0 .833.133 1.633.38 2.38a.669.669 0 0 1-.167.68L4.413 7.193Z"
      fill={color}
    />
  </svg>
);

export default SvgComponent;
