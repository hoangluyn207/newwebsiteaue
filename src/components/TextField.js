import { Text, VStack, Input } from "@chakra-ui/react";
import React from "react";

const TextField = ({ Label, w, h }) => {
  const styleDiv = {
    position: "relative",
  };
  const styleLabel = {
    position: "absolute",
    top: "0.2ex",
    zIndex: "2",
    left: "2em",
    backgroundColor: "white",
    padding: "0 5px",
    color: "#0099cc",
  };
  const styleInput = {
    border: "1px solid gray",
    borderRadius: "6px",
    position: "relative",
    width: w,
    padding: "4px 8px",
    margin: "10px",
    lineHeight: h,
    paddingRight: "8px",
  };
  return (
    <div style={styleDiv}>
      <label style={styleLabel}>{Label}</label>
      <Input style={styleInput} type="text" />
    </div>
  );
};

export default TextField;
