import React from "react";
import { Box, Image, VStack, Text, HStack, Textarea } from "@chakra-ui/react";
import TextField from "../../components/TextField";
import SolutionCardContainer from "../Solution/SolutionCardContainer";

const Solution = () => {
  return (
    <VStack
      width={"100%"}
      display="flex"
      justifyContent={"center"}
      spacing={"32px"}
    >
      <Image
        src="/image/coverSolution.jpg"
        height={"400px"}
        width={"100%"}
        objectFit="cover"
      />
      <SolutionCardContainer />
      <HStack backgroundColor={"#D1d1d1"} width={"1250px"}>
        <VStack
          width={"50%"}
          paddingLeft={"68px"}
          alignItems={"flex-start"}
          textAlign={"left"}
        >
          <Text>Chứng nhận của ICONICS</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            evermáy in ảnh mini since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </Text>
        </VStack>
        <Image width={"50%"} src="./image/v01.jpg" />
      </HStack>
    </VStack>
  );
};

export default Solution;
