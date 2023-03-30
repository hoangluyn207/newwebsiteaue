import React from "react";
import { Box, Image, VStack, Text, HStack, Textarea } from "@chakra-ui/react";
import TextField from "../../components/TextField";
import SolutionCardContainer from "../Solution/SolutionCardContainer";

const Solution = () => {
  return (
    <VStack width={"100%"} display="flex" justifyContent={"center"}>
      <Image
        src="/image/coverSolution.jpg"
        height={"400px"}
        width={"100%"}
        objectFit="cover"
      />
      <SolutionCardContainer paddingTop={"128px"} />
    </VStack>
  );
};

export default Solution;
