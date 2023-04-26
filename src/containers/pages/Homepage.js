import { Box, Image, VStack, Container, Text } from "@chakra-ui/react";
import React from "react";
import EquipmentContainer from "../Homepage/EquipmentContainer";
import InfoContainer from "../Homepage/InfoContainer";
import PartnerContainer from "../Homepage/PartnerContainer";
import SolutionContainer from "../Homepage/SolutionContainer";
import "./HomePage.css";
import ReactPlayer from "react-player";

const Homepage = () => {
  return (
    <VStack
      width={"full"}
      display="flex"
      justifyContent={"center"}
      margin={"0 !important"}
    >
      {/* <Image
        width={"full"}
        src="/image/solutionHomepage1.jpg"
        alt="industrial"
        objectFit="cover"
        height="500px"
      /> */}
      <Box
        className="ProjectCoverContainer"
        width={"full"}
        height="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Box
          width={"100%"}
          height={"100%"}
          filter={"brightness(50%)"}
          position={"absolute"}
          top={0}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1s-uUvvMaDo?controls=0&autoplay=1&mute=1&rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
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
            AUE VIỆT NAM
          </Text>
          <VStack color="#FFF" fontSize={18}>
            <Text textTransform={"uppercase"}>
              Chúng tôi cam kết mang lại những điều tốt nhất
            </Text>
            <Text>Công Nghệ | Khoảng Cách | Chất Lượng | Đi Lên</Text>
          </VStack>
          {/* <Text textColor={"#FFF"}>
            AUE Việt Nam cung cấp các giải pháp đáp ứng nhu cầu của khách hàng
            với giá trị tốt nhất
          </Text> */}
        </VStack>
      </Box>

      <InfoContainer />
      <SolutionContainer />
      {/* <EquipmentContainer /> */}
      <PartnerContainer />
    </VStack>
  );
};

export default Homepage;
