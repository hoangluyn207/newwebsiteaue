import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Image,
  useDisclosure,
  Box,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { FiMenu, FiX } from "react-icons/fi";
import React from "react";
import LogoAue from "../../image/LogoAue.png";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      display={{ base: "block", md: "none" }}
      position={"fixed"}
      top="0"
      zIndex={10}
      width={"100%"}
      backgroundColor="white"
      margin={"0 !important"}
      boxShadow="0 0 10px #cccccc"
    >
      <Flex
        width={"100%"}
        height="54px"
        padding={"8px 32px"}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Image height={"32px"} src={LogoAue} alt="Aue Viet Nam" />
        <IconButton
          aria-label="Open menu"
          size="md"
          fontSize="24px"
          variant="ghost"
          icon={<FiMenu />}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      <Drawer
        size={"full"}
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInRight"
      >
        <DrawerOverlay />
        <DrawerContent maxW="100vw">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={"32px"} fontSize="16px" fontWeight={"semibold"}>
              <Link to={"/"} onClick={onClose}>
                TRANG CHỦ
              </Link>
              <Link to={"/sanpham"} onClick={onClose}>
                SẢN PHẨM
              </Link>
              <Link to={"/giaiphap"} onClick={onClose}>
                GIẢI PHÁP
              </Link>
              <Link to={"/duan"} onClick={onClose}>
                DỰ ÁN
              </Link>
              <Link to={"/thongtin"} onClick={onClose}>
                THÔNG TIN
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;
