import { HStack, IconButton, VStack } from "@chakra-ui/react";
import React from "react";
import FacebookIcon36x36 from "../icons/FacebookIcon36x36.js";
import ZaloIcon36x36 from "../icons/ZaloIcon36x36.js";
import EmailIcon36x36 from "../icons/EmailIcon36x36.js";
import ContactForm from "../containers/AboutUs/ContactForm.js";

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
        onClick={() => {
          window.open("https://www.facebook.com/AUEVN", "_blank");
        }}
      />

      <IconButton
        onClick={() => {
          window.open("https://zalo.me/0906567598", "_blank");
        }}
        _hover={{
          transform: "translateY(-2px)",
          background: "transparent",
        }}
        background={"transparent"}
        icon={<ZaloIcon36x36 />}
      />
      <IconButton
        as="a"
        href="mailto:sales@auevn.com"
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
