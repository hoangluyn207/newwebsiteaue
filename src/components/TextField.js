import { Text, VStack, Input } from "@chakra-ui/react";
import React from "react";

const TextField = ({ Label, w, h }) => {
  const styleDiv = {
    position: "relative",
  };
  const styleLabel = {
    position: "absolute",
    top: "0.2ex",
    zIndex: "1",
    left: "2em",
    backgroundColor: "white",
    padding: "0 5px",
  };
  const styleInput = {
    border: "1px solid gray",
    borderRadius: "6px",
    position: "relative",
    width: w,
    margin: "10px",
    lineHeight: h,
  };
  return (
    <div style={styleDiv}>
      <label style={styleLabel}>{Label}</label>
      <input style={styleInput} type="text" />
    </div>
  );
};

export default TextField;
