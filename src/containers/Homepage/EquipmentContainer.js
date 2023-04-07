import { Box, HStack, Image, VStack, Text, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FA from "../../icons/FA";
import Solution from "../../icons/Solution";
import PowerDistributon from "../../icons/PowerDistributon";

const EquipmentContainer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
        alignItems="flex-end"
        textAlign={"right"}
        top="10%"
        left={isMobile ? null : 0}
        textColor={"white"}
        width={isMobile ? "100%" : "50%"}
        position={"absolute"}
        paddingRight="36px"
      >
        <Text fontWeight={"extrabold"} fontSize="36px">
          SẢN PHẨM
        </Text>
        <Text width={isMobile ? "100%" : "60%"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </VStack>
      {isMobile ? (
        <VStack padding={"32px"} width={"100%"} spacing={"32px"}>
          <CirclePubble
            title={"Factory Automation"}
            content="Contrary to popular belief, Lorem Ipsum is not simply random text."
            icon={<FA color1={"#0099cc"} color2={"#0099cc"} />}
          />
          <CirclePubble
            title={"Power Distributon"}
            content="Contrary to popular belief, Lorem Ipsum is not simply random text."
            icon={<PowerDistributon />}
          />
        </VStack>
      ) : (
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
            icon={<PowerDistributon />}
          />
        </HStack>
      )}
    </VStack>
  );
};

export default EquipmentContainer;
