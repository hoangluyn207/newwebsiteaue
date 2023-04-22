import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  const location = useLocation();
  const url = location.pathname;
  console.log(url);

  const LinkMenu = ({ link, textLink }) => {
    return (
      <Link
        className="hover-underline-animation"
        _hover={{ textDecoration: "none" }}
        to={link}
      >
        <Text
          textColor={url === link ? "#0099cc" : "black"}
          _hover={{ textColor: "#0099cc", transition: "0.5s" }}
        >
          {textLink}
        </Text>
      </Link>
    );
  };

  return (
    <HStack spacing={"32px"} fontSize="16px" fontWeight={"semibold"}>
      <LinkMenu link={"/"} textLink="TRANG CHỦ" />
      <LinkMenu link={"/sanpham"} textLink="SẢN PHẨM" />
      <LinkMenu link={"/giaiphap"} textLink="GIẢI PHÁP" />
      <LinkMenu link={"/duan"} textLink="DỰ ÁN" />
      <LinkMenu link={"/thongtin"} textLink="GIỚI THIỆU" />
    </HStack>
  );
};

export default Menu;
