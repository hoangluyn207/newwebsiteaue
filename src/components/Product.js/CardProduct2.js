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
        <VStack className="card-bottom" spacing={"16px"}>
          <span className="bottom-text">
            UI Kits, Templates and Dashboards. Join over 2,042,768 creatives to
            access all our products!
          </span>
          <button className="button">Contact Now</button>
        </VStack>
      </Box>
      <Text>Robot</Text>
    </VStack>
  );
};

export default CardProduct2;
