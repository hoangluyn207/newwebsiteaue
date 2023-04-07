import { Image, VStack, Text, HStack } from "@chakra-ui/react";
import React from "react";
import Member from "../AboutUs/Member";
import ContactForm from "../AboutUs/ContactForm";

const AboutUs = () => {
  return (
    <VStack>
      <Image src="/image/AboutUs.JPG" width="full" />
      <Text
        fontSize={"36px"}
        fontWeight="700"
        textColor={"#0099cc"}
        paddingTop="128px"
      >
        AUE Việt Nam
      </Text>
      <Text>Automation - Technology - Equipment</Text>
      <Member />
      <HStack
        height={"400px"}
        display="flex"
        justifyContent={"center"}
        spacing="0"
        boxShadow="20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff"
        width={"1280px"}
      >
        <Image width={"50%"} src="/image/AboutUs.JPG" height="full" />
        <ContactForm />
      </HStack>
    </VStack>
  );
};

export default AboutUs;
