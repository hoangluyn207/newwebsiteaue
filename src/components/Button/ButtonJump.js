import { Button } from "@chakra-ui/react";
import React from "react";
import "./ButtonJump.css";

const ButtonJump = ({ Label }, props) => {
  return (
    <button {...props} className="button" onClick={props.onClick}>
      {Label}
    </button>
  );
};

export default ButtonJump;
