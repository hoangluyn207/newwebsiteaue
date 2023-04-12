import { Image, VStack, Text, HStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import Member from "../AboutUs/Member";
import ContactForm from "../AboutUs/ContactForm";
import { MobileContext } from "../../components/MobileContext";

const AboutUs = () => {
  const { isMobile } = useContext(MobileContext);
  return (
    <VStack width={isMobile ? "100vw" : "full"}>
      <Image src="/image/AboutUs.JPG" width={isMobile ? "100vw" : "full"} />
      <Text
        fontSize={isMobile ? "24px" : "36px"}
        fontWeight="700"
        textColor={"#0099cc"}
        paddingTop={isMobile ? "32px" : "128px"}
      >
        AUE Việt Nam
      </Text>
      <Text fontSize={isMobile ? "16px" : "24px"}>
        Automation - Technology - Equipment
      </Text>
      <Member />
      <HStack
        height={isMobile ? null : "400px"}
        display="flex"
        justifyContent={"center"}
        spacing="0"
        boxShadow="20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff"
        width={"1280px"}
      >
        {isMobile ? null : (
          <Image width={"50%"} src="/image/AboutUs.JPG" height="full" />
        )}
        <ContactForm />
      </HStack>
    </VStack>
  );
};

export default AboutUs;
