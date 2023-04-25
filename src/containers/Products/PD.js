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
import "./PD.css";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
const PD = ({ PDref }) => {
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
              {!detailProduct || detailProduct.length === 0 ? null : isOpen ? (
                <ChevronUpIcon />
              ) : (
                <ChevronDownIcon />
              )}{" "}
              {Title}
            </Text>
          </MenuButton>
          {!detailProduct || detailProduct.length === 0 ? null : (
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
          )}
        </Menu>
      </VStack>
    );
  };

  const ProductData = [
    {
      Title: "ACB",
      img: "/image/Product/phanphoidien/acb.png",
      link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/lvcb/yn-c-0622/y0622l2209.pdf",
      Item: [],
    },
    {
      Title: "MCCB-ELCB",
      img: "/image/Product/phanphoidien/mccb-elcb.png",
      link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/lvcb/yn-c-0622/y0622l2209.pdf",
      Item: [],
    },
    {
      Title: "CONTACTOR",
      img: "/image/Product/phanphoidien/contactor.png",
      link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/lvsw/l02031eng/L(NA)02031ENG-L_21B.pdf",
      Item: [],
    },
    {
      Title: "MMP",
      img: "/image/Product/phanphoidien/mmp.png",
      link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/lvsw/02032eng/L(NA)02032ENG-B.pdf",
      Item: [],
    },
    {
      Title: "MCB",
      img: "/image/Product/phanphoidien/mcb.png",
      link: "",
      Item: [
        {
          Name: "BH-D Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/lvcb/yn-c-0713/y0713b2209.pdf",
        },
        {
          Name: "BHW Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/lvcb/yn-c-0730/y0730c1904.pdf",
        },
      ],
    },
    {
      Title: "ĐỒNG HỒ ĐO",
      img: "/image/Product/phanphoidien/đồng hồ đo.png",
      link: "",
      Item: [
        {
          Name: "ME96 Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/pmd/ym-c-y-0758/y0758c2009.pdf",
        },
        {
          Name: "Eco Monitor Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/ems/ym-c-y-0753/y0753b1807.pdf",
        },
      ],
    },
    {
      Title: "THIẾT BỊ GIÁM SÁT NĂNG LƯỢNG",
      img: "/image/Product/phanphoidien/thiết bị giám sát năng lượng.png",
      link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/ems/ym-c-y-0748/y0748d2002.pdf",
      Item: [],
    },
  ];

  return (
    <VStack width={"full"} spacing={"64px"} ref={PDref}>
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
            THIẾT BỊ PHÂN PHỐI ĐIỆN HẠ THẾ
          </Text>
        </VStack>
      </Box>
      {/* <Text fontSize={"36px"} fontWeight={800} textColor={"#0099cc"}>
        SẢN PHẨM
      </Text> */}
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

export default PD;
