import { Box, HStack, IconButton, Text, VStack, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Tamnhin from "../../icons/Tamnhin";
import Giatricotloi from "../../icons/Giatricotloi";
import Nhiemvu from "../../icons/Nhiemvu";
import Chungnhan from "../../icons/Chungnhan";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const CirclePubble = ({ icon, title, content }) => {
    return (
      <HStack
        width={isMobile ? "80vw" : "300px"}
        height="150px"
        background="#ffffff"
        boxShadow="20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff"
        padding={"8px"}
        spacing="16px"
      >
        <IconButton
          width={"150px"}
          height={"150px"}
          icon={icon ? icon : null}
          background="transparent"
          cursor="default"
          _hover={{
            background: "transparent",
          }}
        >
          {icon ? null : <Image src="/logo/chungnhan.png" width={"44px"} />}
        </IconButton>
        <VStack display={"flex"} alignItems={"flex-start"} textAlign="left">
          <Text fontWeight={"600"}>{title}</Text>
          <Text fontSize={"14px"}>{content}</Text>
        </VStack>
      </HStack>
    );
  };

  return (
    <>
      {isMobile ? (
        <VStack spacing={"32px"}>
          <VStack
            width={"100vw"}
            display="flex"
            alignItems="flex-start"
            textAlign={"left"}
            padding={"16px"}
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
              industry. Lorem Ipsum has been the industry's standard dummy text
              evermáy in ảnh mini since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </VStack>
          <VStack padding={"16px"} width={"100vw"} spacing={"32px"}>
            <CirclePubble
              title={"Tầm nhìn"}
              content="Contrary to popular belief, Lorem Ipsum is not simply random text."
              icon={<Tamnhin />}
            />
            <CirclePubble
              title={"Nhiệm vụ"}
              content="Contrary to popular belief, Lorem Ipsum is not simply random text."
              icon={<Nhiemvu />}
            />
            <CirclePubble
              title={"Giá trị cốt lõi"}
              content="Contrary to popular belief, Lorem Ipsum is not simply random text."
              icon={<Giatricotloi />}
            />
            <CirclePubble
              title={"Chứng nhận"}
              content="Contrary to popular belief, Lorem Ipsum is not simply random text."
            />
          </VStack>
        </VStack>
      ) : (
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
            data-aos="fade-right"
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
              industry. Lorem Ipsum has been the industry's standard dummy text
              evermáy in ảnh mini since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </VStack>
          <HStack
            data-aos="fade-left"
            height={"full"}
            width={"50%"}
            spacing={"32px"}
          >
            <VStack width={"50%"} spacing={"32px"}>
              <CirclePubble
                title={"Tầm nhìn"}
                content="Contrary to popular belief, Lorem Ipsum is not simply random text."
                icon={<Tamnhin />}
              />
              <CirclePubble
                title={"Nhiệm vụ"}
                content="Contrary to popular belief, Lorem Ipsum is not simply random text."
                icon={<Nhiemvu />}
              />
            </VStack>
            <VStack width={"50%"} spacing={"32px"}>
              <CirclePubble
                title={"Giá trị cốt lõi"}
                content="Contrary to popular belief, Lorem Ipsum is not simply random text."
                icon={<Giatricotloi />}
              />
              <CirclePubble
                title={"Chứng nhận"}
                content="Contrary to popular belief, Lorem Ipsum is not simply random text."
              />
            </VStack>
          </HStack>
        </HStack>
      )}
    </>
  );
};

export default InfoContainer;
