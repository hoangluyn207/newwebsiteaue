import React, { useEffect, useState, useRef, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MobileContext } from "../../components/MobileContext";
import { VStack, Text, Box, HStack, calc, Image } from "@chakra-ui/react";

const HisBus = () => {
  const { isMobile } = useContext(MobileContext);

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
      <HStack
        width={isMobile ? "100%" : "1280px"}
        justifyContent="center"
        spacing={"32px"}
      >
        <Text data-aos="fade-right" width={"100%"} textAlign={"right"}>
          {content}
        </Text>
        <Box
          position={"relative"}
          margin={"0px 32px"}
          data-aos="zoom-in"
          backgroundColor={"transparent"}
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
        <Box width={"100%"}>
          {/* <Image width={"100%"} src="/image/AboutUS.JPG" height={"300px"} /> */}
        </Box>
      </HStack>
    );
  };
  const RightElement = ({ content, time }) => {
    return (
      <HStack
        width={isMobile ? "100%" : "1280px"}
        justifyContent="center"
        spacing={"32px"}
      >
        <Box width={"100%"}>
          {/* <Image width={"100%"} src="/image/AboutUS.JPG" height={"300px"} /> */}
        </Box>
        <Box
          position={"relative"}
          margin={"0px 32px"}
          data-aos="zoom-in"
          backgroundColor={"transparent"}
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
        width={"1px"}
        height={isMobile ? "50px" : "60px"}
      ></Box>
    );
  };

  return (
    <VStack width={"full"} spacing={"16px"}>
      <LeftElement
        content={
          "Trở thành Nhà Phân Phối Mitsubishi Electric tại khu vực miền Trung"
        }
        time={"2022"}
      />
      <Line />
      <RightElement
        content={"Tìm kếm đối tác & phát triển đội ngũ"}
        time={"2021"}
      />
      <Line />
      <LeftElement
        content={"Phát triển đội ngũ & hệ thống quản lý"}
        time={"2020"}
      />
      <Line />
      <RightElement
        content={
          "Chiếm lĩnh thị trường miền Trung trong mảng thiết bị công nghiệp"
        }
        time={"2019"}
      />
      <Line />
      <LeftElement content={"Phát triển khách hàng & đối tác"} time={"2018"} />
      <Line />
      <RightElement content={"Thành lập Công Ty AUE Việt Nam"} time={"2017"} />
    </VStack>
  );
};

export default HisBus;
