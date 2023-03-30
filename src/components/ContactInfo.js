import { HStack, IconButton, VStack } from "@chakra-ui/react";
import React from "react";
import FacebookIcon36x36 from "../icons/FacebookIcon36x36.js";
import ZaloIcon36x36 from "../icons/ZaloIcon36x36.js";
import EmailIcon36x36 from "../icons/EmailIcon36x36.js";

const ContactInfo = (props) => {
  return (
    <VStack {...props}>
      <IconButton
        _hover={{
          background: "transparent",
          transform: "translateY(-2px)",
        }}
        background={"transparent"}
        icon={<FacebookIcon36x36 />}
      />
      <IconButton
        _hover={{
          transform: "translateY(-2px)",
          background: "transparent",
        }}
        background={"transparent"}
        icon={<ZaloIcon36x36 />}
      />
      <IconButton
        _hover={{
          transform: "translateY(-2px)",
          background: "transparent",
        }}
        background={"transparent"}
        icon={<EmailIcon36x36 />}
      />
    </VStack>
  );
};

export default ContactInfo;
