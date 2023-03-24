import { Box, HStack, Image, VStack, Text } from "@chakra-ui/react";
import React from "react";

const SolutionContainer = () => {
  const Card = ({ Title }) => {
    return (
      <VStack
        width={"20%"}
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
    <VStack paddingTop={"128px"} width={"full"} display={"flex"}>
      <HStack width={"1280px"} display="flex">
        <Box
          width={"50%"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <Image
            borderRadius={"16px"}
            width={"70%"}
            src="/image/solutionHomepage.jpg"
            alt="Solution Homepage AUE VietNam"
          />
        </Box>
        <VStack
          display={"flex"}
          width="50%"
          top="10%"
          right={0}
          paddingLeft="36px"
          alignItems="flex-start"
          textAlign={"left"}
        >
          <Text textColor={"#0099cc"} fontWeight={"extrabold"} fontSize="36px">
            GIẢI PHÁP
          </Text>
          <Text width={"60%"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </VStack>
      </HStack>
      <HStack
        display={"flex"}
        justifyContent="space-between"
        width={"1280px"}
        padding="128px 32px"
      >
        <Card Title={"EMS"} />
        <Card Title={"BMS"} />
        <Card Title={"Scada"} />
        <Card Title={"Alarm Managerment"} />
      </HStack>
    </VStack>
  );
};

export default SolutionContainer;
