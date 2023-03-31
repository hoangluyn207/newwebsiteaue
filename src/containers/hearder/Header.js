import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";
import LogoAue from "../../image/LogoAue.png";
import Menu from "../../components/Header/Menu";
const Header = (props) => {
  return (
    <Box
      position={"fixed"}
      top="0"
      zIndex={999}
      {...props}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      backgroundColor="white"
      margin={"0 !important"}
      boxShadow="0 0 10px #cccccc"
    >
      <HStack
        width={"1280px"}
        height="84px"
        padding={"8px 32px"}
        display="flex"
        justifyContent={"space-between"}
      >
        <Image height={"32px"} src={LogoAue} alt="Aue Viet Nam" />
        <Menu />
      </HStack>
    </Box>
  );
};

export default Header;
