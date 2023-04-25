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
const FA = ({ FAref }) => {
  const { isMobile } = useContext(MobileContext);
  const Product = ({ Title, img, detailProduct, link }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const [isOpen, setIsOpen] = useState(false);
    return (
      <VStack className="hover14" spacing={0} alignItems="flex-start">
        <figure>
          <img src={process.env.PUBLIC_URL + `${img}`} />
        </figure>
        {link === "" ? (
          <Menu isOpen={isOpen}>
            <MenuButton onMouseEnter={onOpen} onMouseLeave={onClose}>
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
        ) : (
          <a href={link} target="_blank">
            <Text fontSize={"18px"} paddingTop={"8px"}>
              {Title}
            </Text>
          </a>
        )}
      </VStack>
    );
  };
  const ProductData = [
    {
      Title: "PLC",
      img: "/image/Product/fa/PLC.png",
      link: "",
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
    {
      Title: "AC SERVO",
      img: "/image/Product/fa/ac servo.png",
      link: "",
      Item: [
        {
          Name: "MR-J5 Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/servo/l03179eng/l03179engh.pdf",
        },
        {
          Name: "MR-J4 Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/servo/l03058/l03058engk.pdf",
        },
        {
          Name: "MR-JET Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/servo/l03187eng/l03187enge.pdf",
        },
        {
          Name: "MR-JE Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/servo/l03086/l03086engg.pdf",
        },
      ],
    },
    {
      Title: "BIẾN TẦN",
      img: "/image/Product/fa/Biến tần.png",
      link: "",
      Item: [
        {
          Name: "FR-A800 Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/inv/l06075eng/l06075engh.pdf",
        },
        {
          Name: "FR-F800 Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/inv/l06085eng/l06085engc.pdf",
        },
        {
          Name: "FR-E800 Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/inv/l-06131eng/l06131engd.pdf",
        },
        {
          Name: "FR-D700 Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/inv/l06055eng/l06055engh.pdf",
        },
        {
          Name: "FR-CS Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/inv/l06113eng/l06113enga.pdf",
        },
      ],
    },
    {
      Title: "HMI",
      img: "/image/Product/fa/HMI.png",
      link: "",
      Item: [
        {
          Name: "GOT2000 Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/got/l08461eng/l08461engd.pdf",
        },
        {
          Name: "GOT Simple Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/got/l08676eng/l08676engb.pdf",
        },
      ],
    },
    {
      Title: "ROBOT",
      img: "/image/Product/fa/Robot.png",
      link: "",
      Item: [
        {
          Name: "FR Series",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/robot/l(na)-09091eng/l09091f.pdf",
        },
        {
          Name: "Asista",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/robot/l(na)-09104eng/I09104b.pdf",
        },
      ],
    },
    {
      Title: "SENSOR",
      img: "/image/Product/fa/Sensor.png",
      link: "",
      Item: [
        {
          Name: "Vision Sensor",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/sensor/l08591eng/l08591engh.pdf",
        },
        {
          Name: "Code Reader",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/sensor/l08691eng/l08691engd.pdf",
        },
      ],
    },
    {
      Title: "GEAR MOTOR",
      img: "/image/Product/fa/Gear Motor.png",
      link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/gear/gm-48/Geared_Motors_catalog.pdf",
      Item: [],
    },
    {
      Title: "SOFTWARE",
      img: "/image/Product/fa/Software3.jpg",
      link: "",
      Item: [
        {
          Name: "SCADA",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/scada/l08785eng/l08785engd.pdf",
        },
        {
          Name: "SoftGOT",
          Link: "https://dl.mitsubishielectric.com/dl/fa/document/catalog/got/l08606eng/l08606enga.pdf",
        },
      ],
    },
  ];

  return (
    <VStack width={"full"} spacing={"64px"} ref={FAref}>
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
              link={item.link}
            />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default FA;
