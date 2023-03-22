import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const url = location.pathname;
  console.log(url);

  const LinkMenu = ({ link, textLink }) => {
    return (
      <Link _hover={{ textDecoration: "none" }} to={link}>
        <Text
          _hover={{ textColor: "#0099cc", transition: "0.3s" }}
          textColor={url === link ? "#0099cc" : "BLACK"}
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
      <LinkMenu link={"/thongtin"} textLink="THÔNG TIN" />
    </HStack>
  );
};

export default Menu;
