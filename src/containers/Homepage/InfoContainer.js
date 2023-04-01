import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Tamnhin from "../../icons/Tamnhin";
import Solution from "../../icons/Solution";
import PowerDistributon from "../../icons/PowerDistributon";

const InfoContainer = () => {
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
    <HStack
      width={"1280px"}
      padding="128px 32px"
      display={"flex"}
      justifyContent="space-between"
    >
      <VStack
        width={"50%"}
        display="flex"
        alignItems="flex-start"
        textAlign={"left"}
      >
        <Text
          textAlign={"start"}
          textColor={"#0099cc"}
          fontWeight="extrabold"
          fontSize={"36px"}
        >
          GIỚI THIỆU
        </Text>
        <Text fontWeight={"600"}>Chúng tôi là ai?</Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </VStack>
      <HStack height={"full"} width={"50%"} spacing={"32px"}>
        <VStack width={"50%"} spacing={"32px"}>
          <CirclePubble
            title={"Tầm nhìn"}
            content="Contrary to popular belief, Lorem Ipsum is not simply random text."
            icon={<Tamnhin />}
          />
          <CirclePubble
            title={"Nhiệm vụ"}
            content="Contrary to popular belief, Lorem Ipsum is not simply random text."
            icon={<Solution color={"#0099cc"} />}
          />
        </VStack>
        <VStack width={"50%"} spacing={"32px"}>
          <CirclePubble
            title={"Giá trị cốt lõi"}
            content="Contrary to popular belief, Lorem Ipsum is not simply random text."
            icon={<PowerDistributon color={"#0099cc"} />}
          />
          <CirclePubble
            title={"Sứ mệnh"}
            content="Contrary to popular belief, Lorem Ipsum is not simply random text."
            icon={<PowerDistributon color={"#0099cc"} />}
          />
        </VStack>
      </HStack>
    </HStack>
  );
};

export default InfoContainer;
