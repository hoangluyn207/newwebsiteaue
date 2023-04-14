import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { VStack, Text, Box, HStack, calc } from "@chakra-ui/react";

const HisBus = () => {
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);
  const LeftElement = ({ content, time }) => {
    return (
      <HStack width={"1280px"} justifyContent="center" spacing={"32px"}>
        <Text data-aos="fade-right" width={"100%"} textAlign={"right"}>
          {content}
        </Text>
        <Box
          position={"relative"}
          margin={"0px 32px"}
          data-aos="zoom-in"
          backgroundColor={"#F0F0F0"}
        >
          <Text
            fontWeight={600}
            textColor={"#0099cc"}
            fontSize={"18px"}
            padding={"12px 24px"}
          >
            {time}
          </Text>
        </Box>
        <Box width={"100%"} backgroundColor={"red"} height={"full"}></Box>
      </HStack>
    );
  };
  const RightElement = ({ content, time }) => {
    return (
      <HStack width={"1280px"} justifyContent="center" spacing={"32px"}>
        <Box width={"100%"} backgroundColor={"red"} height={"full"}></Box>
        <Box
          position={"relative"}
          margin={"0px 32px"}
          data-aos="zoom-in"
          backgroundColor={"#F0F0F0"}
        >
          <Text
            fontWeight={600}
            textColor={"#0099cc"}
            fontSize={"18px"}
            padding={"12px 24px"}
          >
            {time}
          </Text>
        </Box>
        <Text data-aos="fade-left" width={"100%"} textAlign={"left"}>
          {content}
        </Text>
      </HStack>
    );
  };
  const Line = () => {
    return (
      <Box
        data-aos="fade-down"
        backgroundColor={"#0099cc"}
        width={"2px"}
        height={"100px"}
      ></Box>
    );
  };

  return (
    <VStack paddingTop={"64px"} spacing={"16px"}>
      <LeftElement content={"Thành lập"} time={"2017"} />
      <Line />
      <RightElement content={"Thành lập"} time={"2017"} />
      <Line />
      <LeftElement content={"Thành lập"} time={"2017"} />
      <Line />
      <RightElement content={"Thành lập"} time={"2017"} />
      <Line />
      <LeftElement content={"Thành lập"} time={"2017"} />
    </VStack>
  );
};

export default HisBus;
