import { VStack, Image, Box, Text } from "@chakra-ui/react";
import React from "react";
import "./Card2.css";

const CardProduct2 = () => {
  return (
    <VStack spacing={"16px"}>
      <Box className="card-wrapper">
        <Box className="card-top">
          <img className="image" src="./image/robot.png" />
        </Box>
        <Box className="card-bottom">
          <span className="top-text">Creative Tim</span>
          <br />
          <span className="bottom-text">
            UI Kits, Templates and Dashboards. Join over 2,042,768 creatives to
            access all our products!
          </span>
          <br />
          <button className="button">Buy Now</button>
        </Box>
      </Box>
      <Text>Robot</Text>
    </VStack>
  );
};

export default CardProduct2;
