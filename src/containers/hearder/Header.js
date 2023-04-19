import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LogoAue from "../../image/LogoAue.png";
import Menu from "../../components/Header/Menu";
import MobileMenu from "./MobileMenu";

const Header = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isMobile ? (
        <MobileMenu />
      ) : (
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
            <a href="./">
              <Image height={"58px"} src={LogoAue} alt="Aue Viet Nam" />
            </a>
            <Menu />
          </HStack>
        </Box>
      )}
    </>
  );
};

export default Header;
