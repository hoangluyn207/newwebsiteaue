import { HStack, IconButton, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FacebookIcon36x36 from "../icons/FacebookIcon36x36.js";
import ZaloIcon36x36 from "../icons/ZaloIcon36x36.js";
import EmailIcon36x36 from "../icons/EmailIcon36x36.js";
import LinkedIn from "../icons/LinkedIn.js";
import YoutubeIcon from "../icons/YoutubeIcon.js";

const ContactInfo = (props) => {
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
        {/* <IconButton
          as="a"
          href="mailto:sales@auevn.com"
          _hover={{
            transform: "translateY(-2px)",
            background: "transparent",
          }}
          background={"transparent"}
          icon={<EmailIcon36x36 />}
        /> */}
        <IconButton
          _hover={{
            background: "transparent",
            transform: "translateY(-2px)",
          }}
          background={"transparent"}
          icon={<LinkedIn />}
          onClick={() => {
            window.open("https://www.linkedin.com/company/auevn/", "_blank");
          }}
        />
        <IconButton
          _hover={{
            background: "transparent",
            transform: "translateY(-2px)",
          }}
          background={"transparent"}
          icon={<YoutubeIcon />}
          onClick={() => {
            window.open("https://www.youtube.com/auevn", "_blank");
          }}
        />
      </VStack>
    </>
  );
};

export default ContactInfo;
