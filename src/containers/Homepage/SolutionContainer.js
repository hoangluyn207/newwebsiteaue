import { Box, HStack, Image, VStack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SolutionContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const Card = ({ Title }) => {
    return (
      <VStack
        width={isMobile ? "80%" : "20%"}
        position="relative"
        background="#ffffff"
        height="300px"
        borderWidth={"1px"}
        borderColor="#ccc"
        borderRadius={"8px"}
        transition="0.5s"
        _hover={{
          boxShadow: "20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff",
        }}
      >
        <Text position={"absolute"} bottom="20px">
          {Title}
        </Text>
      </VStack>
    );
  };
  return (
    <VStack
      width={"full"}
      backgroundSize="cover"
      display={"flex"}
      justifyContent="center"
      position={"relative"}
      paddingBottom={isMobile ? 0 : "128px"}
      paddingTop={"16px"}
    >
      <Image
        width={"full"}
        filter="brightness(50%)"
        objectFit="cover"
        height="500px"
        src="/image/solutionHomepage.jpg"
        alt="Solution Homepage AUE VietNam"
      />
      <VStack
        data-aos={isMobile ? null : "fade-left"}
        display={"flex"}
        alignItems="flex-start"
        textAlign={"left"}
        top="10%"
        right={isMobile ? null : 0}
        textColor={"white"}
        width={isMobile ? "100%" : "50%"}
        position={"absolute"}
        paddingLeft="36px"
      >
        <Text fontWeight={"extrabold"} fontSize="36px">
          GIẢI PHÁP
        </Text>
        <Text width={isMobile ? "100%" : "60%"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </VStack>
      {isMobile ? (
        <VStack width={"100%"} spacing={"16px"} padding="16px">
          <Card Title={"EMS"} />
          <Card Title={"BMS"} />
          <Card Title={"Scada"} />
          <Card Title={"Alarm Managerment"} />
        </VStack>
      ) : (
        <HStack
          display={"flex"}
          justifyContent="space-between"
          width={"1280px"}
          padding="128px 32px 0px 32px"
          data-aos="fade-up"
        >
          <Card Title={"EMS"} />
          <Card Title={"BMS"} />
          <Card Title={"Scada"} />
          <Card Title={"Alarm Managerment"} />
        </HStack>
      )}
    </VStack>
  );
};

export default SolutionContainer;
