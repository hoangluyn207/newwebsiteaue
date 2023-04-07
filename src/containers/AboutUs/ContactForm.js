import React from "react";
import {
  VStack,
  Text,
  HStack,
  Box,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import TextField from "../../components/TextField";
import ButtonJump from "../../components/Button/ButtonJump";

const ContactForm = () => {
  return (
    <VStack
      backgroundColor={"white"}
      width={"50%"}
      display={"flex"}
      justifyContent={"space-around"}
      spacing={"16px"}
      padding="16px"
      height={"400px"}
    >
      <Text textColor="#0099cc" fontWeight={"600"}>
        Liên lạc với chúng tôi
      </Text>
      <HStack spacing={"16px"} justifyContent={"space-around"} width={"full"}>
        <TextField Label={"Họ tên"} w="200px" h="36px" />
        <TextField Label={"Email"} w="200px" h="36px" />
      </HStack>
      <HStack spacing={"16px"} justifyContent={"space-around"} width={"full"}>
        <TextField Label={"Số điện thoại"} w="200px" h="36px" />
        <TextField Label={"Công ty"} w="200px" h="36px" />
      </HStack>
      <Box width={"full"} padding={"10px"}>
        <Textarea placeholder="Lời nhắn" />
      </Box>
      <ButtonJump backgroundColor="white" Label={"Gửi yêu cầu"} />
    </VStack>
  );
};

export default ContactForm;
