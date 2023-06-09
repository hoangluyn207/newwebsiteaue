import { Box, HStack, Image, VStack, Text, IconButton } from "@chakra-ui/react";
import React from "react";
import FA from "../../icons/FA";
import Solution from "../../icons/Solution";
import PowerDistributon from "../../icons/PowerDistributon";

const EquipmentContainerDraft = () => {
  const Card = ({ Title }) => {
    return (
      <VStack
        width={"20%"}
        position="relative"
        background="#ffffff"
        height="300px"
        boxShadow="20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff"
      >
        <Text position={"absolute"} bottom="20px">
          {Title}
        </Text>
      </VStack>
    );
  };
  const CirclePubble = ({ icon, title, content }) => {
    return (
      <HStack
        width={"full"}
        height="150px"
        background="#ffffff"
        boxShadow="20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff"
        padding={"8px"}
        spacing="16px"
      >
        <IconButton
          width={"150px"}
          icon={icon}
          background="transparent"
          cursor="default"
          _hover={{
            background: "transparent",
          }}
        ></IconButton>
        <VStack display={"flex"} alignItems={"flex-start"} textAlign="left">
          <Text fontWeight={"600"}>{title}</Text>
          <Text fontSize={"14px"}>{content}</Text>
        </VStack>
      </HStack>
    );
  };
  return (
    <VStack
      width={"full"}
      backgroundSize="cover"
      display={"flex"}
      justifyContent="center"
      position={"relative"}
    >
      <Image
        width={"full"}
        objectFit="cover"
        height="500px"
        filter="brightness(30%)"
        src="/image/equipmentHomepage.jpg"
        alt="Equipment Homepage AUE VietNam"
      />
      <VStack
        display={"flex"}
        alignItems="flex-start"
        textAlign={"left"}
        top="10%"
        right={0}
        textColor={"white"}
        width="50%"
        position={"absolute"}
        paddingLeft="36px"
      >
        <Text fontWeight={"extrabold"} fontSize="36px">
          SẢN PHẨM
        </Text>
        <Text width={"60%"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </VStack>
      <HStack
        padding={"128px 32px"}
        height={"full"}
        width={"1280px"}
        spacing={"32px"}
      >
        <CirclePubble
          title={"Factory Automation"}
          content="Contrary to popular belief, Lorem Ipsum is not simply random text."
          icon={<FA color1={"#0099cc"} color2={"#0099cc"} />}
        />
        <CirclePubble
          title={"Power Distributon"}
          content="Contrary to popular belief, Lorem Ipsum is not simply random text."
          icon={<PowerDistributon color={"#0099cc"} />}
        />
      </HStack>
    </VStack>
  );
};

export default EquipmentContainerDraft;
