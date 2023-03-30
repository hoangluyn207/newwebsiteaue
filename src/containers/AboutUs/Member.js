import React from "react";
import { HStack, Box, Image, IconButton } from "@chakra-ui/react";
import Css from "./Member.module.css";
import FacebookIcon36x36 from "../../icons/FacebookIcon36x36";
import LinkedIn from "../../icons/LinkedIn";
import ZaloIcon36x36 from "../../icons/ZaloIcon36x36";

const Member = () => {
  const BoxCard = () => {
    return (
      <Box className={Css.BoxCard} position={"relative"}>
        <Image
          className={Css.CardImage}
          width={"full"}
          src="/image/NGUYEN QUANG VU.JPG"
        />
        <HStack className={Css.SocialMedia} position={"absolute"} bottom="50px">
          <IconButton
            className={`${Css.Icon} ${Css.Icon1}`}
            background={"transparent"}
            icon={<FacebookIcon36x36 />}
          />
          <IconButton
            className={`${Css.Icon} ${Css.Icon2}`}
            background={"transparent"}
            icon={<LinkedIn />}
          />
          <IconButton
            className={`${Css.Icon} ${Css.Icon3}`}
            background={"transparent"}
            icon={<ZaloIcon36x36 />}
          />
        </HStack>
      </Box>
    );
  };
  return (
    <HStack
      width={"1280px"}
      display="flex"
      paddingTop={"128px"}
      paddingBottom={"128px"}
      justifyContent="space-between"
    >
      <BoxCard />
      <BoxCard />
      <BoxCard />
    </HStack>
  );
};

export default Member;
