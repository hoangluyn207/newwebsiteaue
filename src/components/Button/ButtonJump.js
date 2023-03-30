import { Button } from "@chakra-ui/react";
import React from "react";
import "./ButtonJump.css";

const ButtonJump = ({ Label }) => {
  return <button className="button">{Label}</button>;
};

export default ButtonJump;
