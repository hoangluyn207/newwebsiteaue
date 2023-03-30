import { Image, VStack, Text, Box, HStack, Textarea } from "@chakra-ui/react";
import React from "react";
import Member from "../AboutUs/Member";
import TextField from "../../components/TextField";

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
      <VStack
        backgroundColor={"white"}
        borderWidth="1px"
        borderColor="black"
        display={"flex"}
        alignItems="flex-start"
        spacing={"16px"}
        padding="16px"
        height={"400px"}
      >
        <Text>Liên lạc với chúng tôi</Text>
        <HStack spacing={"16px"}>
          <TextField Label={"Họ tên"} w="200px" h="36px" />
          <TextField Label={"Email"} w="200px" h="36px" />
        </HStack>
        <HStack spacing={"16px"}>
          <TextField Label={"Số điện thoại"} w="200px" h="36px" />
          <TextField Label={"Công ty"} w="200px" h="36px" />
        </HStack>
        <Box width={"full"} padding={"10px"}>
          <Textarea placeholder="Lời nhắn" />
        </Box>
      </VStack>
    </VStack>
  );
};

export default AboutUs;
