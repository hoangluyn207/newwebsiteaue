import React, { useContext, useState } from "react";
import {
  Box,
  Image,
  VStack,
  Text,
  HStack,
  Textarea,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import TextField from "../../components/TextField";
import SolutionCardContainer from "../Solution/SolutionCardContainer";
import { MobileContext } from "../../components/MobileContext";
import "./FA.css";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
const FA = () => {
  const { isMobile } = useContext(MobileContext);
  const Product = ({ Title, img, detailProduct }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const [isOpen, setIsOpen] = useState(false);
    return (
      <VStack className="hover14" spacing={0} alignItems="flex-start">
        <figure>
          <img src={process.env.PUBLIC_URL + `${img}`} />
        </figure>
        <Menu isOpen={isOpen}>
          <MenuButton
            // onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            <Text fontSize={"18px"} paddingTop={"8px"}>
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} {Title}
            </Text>
          </MenuButton>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            {detailProduct.map((item, index) => (
              <MenuItem
                _hover={{ backgroundColor: "#f0f0f0" }}
                key={`detail-${index}`}
              >
                <a target="_blank" href={item.Link}>
                  {item.Name}
                </a>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </VStack>
    );
  };

  const ProductData = [
    {
      Title: "PLC",
      img: "/image/Product/fa/PLC.png",
      Item: [
        {
          Name: "iQ-R Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/plcr/l08298eng/l08298engu.pdf",
        },
        {
          Name: "Q Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/plcq/l08101e/l08101et.pdf",
        },
        {
          Name: "iQ-F Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/plcf/l08428eng/l08428eng-g.pdf",
        },
        {
          Name: "F Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/plc_fx/l08490/l08490-a.pdf",
        },
      ],
    },
  ];

  return (
    <VStack width={"full"} spacing={"64px"}>
      <Box
        className="SolutionCoverContainer"
        width={"full"}
        height="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Image
          position={"absolute"}
          filter="brightness(50%)"
          height="100vh"
          width={"full"}
          src="/image/coverSolution.jpg"
        />
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
            THIẾT BỊ TỰ ĐỘNG HÓA
          </Text>
        </VStack>
      </Box>
      <Text fontSize={"36px"} fontWeight={800} textColor={"#0099cc"}>
        SẢN PHẨM
      </Text>
      <Grid
        width={"1280px"}
        templateColumns="repeat(3, 1fr)"
        gap={12}
        justifyItems={"center"}
      >
        {ProductData.map((item, index) => (
          <GridItem key={index}>
            <Product
              Title={item.Title}
              img={item.img}
              detailProduct={item.Item}
            />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default FA;
