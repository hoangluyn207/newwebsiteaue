import { Image, VStack, Box, Text } from "@chakra-ui/react";
import React from "react";
import ProjectContainer from "../../components/Project/ProjectContainer";

const Project = () => {
  return (
    <VStack width={"full"} margin={"0 !important"}>
      <Box
        className="ProjectCoverContainer"
        width={"full"}
        height="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Image
          position={"absolute"}
          filter="brightness(50%)"
          height="100vh"
          width={"full"}
          src="/image/projectCover.jpg"
        />
        <VStack
          className="figure"
          background="linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))"
          backdropFilter="blur(10px)"
          border-radius="20px"
          border="1px solid rgba(255, 255, 255, 0.18)"
          boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.37)"
          justifyContent={"center"}
          spacing={"16px"}
          padding={"32px 64px"}
        >
          <Text style={{ color: "#FFF" }} fontWeight={800} fontSize={"36px"}>
            DỰ ÁN
          </Text>
          <Text textColor={"#FFF"}>
            AUE Việt Nam cung cấp các giải pháp đáp ứng nhu cầu của khách hàng
            với giá trị tốt nhất
          </Text>
        </VStack>
      </Box>
      <ProjectContainer />
    </VStack>
  );
};

export default Project;
