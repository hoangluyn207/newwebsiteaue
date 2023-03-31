import { Image, VStack, Box, Text } from "@chakra-ui/react";
import React from "react";
import ProjectContainer from "../../components/Project/ProjectContainer";

const Project = () => {
  return (
    <VStack width={"full"}>
      <Box
        width={"full"}
        height="500px"
        position="relative"
        display={"flex"}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          position="absolute"
          width={"full"}
          height="500px"
          objectFit="cover"
          src="/image/projectCover.jpg"
          filter={"brightness(50%)"}
        />
        <Text
          zIndex={2}
          fontWeight="bold"
          textColor={"white"}
          fontSize={"36px"}
        >
          DỰ ÁN
        </Text>
      </Box>
      <ProjectContainer />
    </VStack>
  );
};

export default Project;
