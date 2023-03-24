import { Box, Image, VStack } from "@chakra-ui/react";
import React from "react";
import EquipmentContainer from "../Homepage/EquipmentContainer";
import InfoContainer from "../Homepage/InfoContainer";
import PartnerContainer from "../Homepage/PartnerContainer";
import SolutionContainer from "../Homepage/SolutionContainer";

const Homepage = () => {
  return (
    <VStack width={"full"} display="flex" justifyContent={"center"}>
      <Image
        width={"full"}
        src="/image/solutionHomepage1.jpg"
        alt="industrial"
        objectFit="cover"
        height="500px"
      />
      <InfoContainer />
      <SolutionContainer />
      <EquipmentContainer />
      <PartnerContainer />
    </VStack>
  );
};

export default Homepage;
