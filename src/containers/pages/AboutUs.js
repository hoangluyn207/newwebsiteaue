import {
  Image,
  VStack,
  Text,
  Box,
  HStack,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Member from "../AboutUs/Member";
import TextField from "../../components/TextField";
import ButtonJump from "../../components/Button/ButtonJump";

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
      >
        <Image src="/image/AboutUs.JPG" height="full" />
        <VStack
          backgroundColor={"white"}
          display={"flex"}
          alignItems="flex-start"
          spacing={"16px"}
          padding="16px"
          height={"400px"}
        >
          <Text textColor="#0099cc" fontWeight={"600"}>
            Liên lạc với chúng tôi
          </Text>
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
          <ButtonJump backgroundColor="white" Label={"Gửi yêu cầu"} />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default AboutUs;
