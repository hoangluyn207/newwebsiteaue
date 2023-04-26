import { Box, HStack, Image, VStack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SolutionContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
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
  const Card = ({ Title, image }) => {
    return (
      <VStack
        width={isMobile ? "80%" : "45%"}
        position="relative"
        background="#ffffff"
        height="300px"
        borderWidth={"1px"}
        borderColor="#ccc"
        borderRadius={"8px"}
        transition="0.5s"
        _hover={{
          boxShadow: "20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff",
        }}
      >
        <Image
          width={"full"}
          height={"full"}
          objectFit={"cover"}
          borderRadius={"8px"}
          src={image}
        />
        <Text
          borderBottomRadius={"8px"}
          width={"full"}
          lineHeight={"50px"}
          backgroundColor={"#fff"}
          position={"absolute"}
          bottom="0"
        >
          {Title}
        </Text>
      </VStack>
    );
  };
  return (
    <VStack
      width={"full"}
      backgroundSize="cover"
      display={"flex"}
      justifyContent="center"
      position={"relative"}
      paddingBottom={isMobile ? 0 : "128px"}
      paddingTop={"16px"}
    >
      <Image
        width={"full"}
        filter="brightness(50%)"
        objectFit="cover"
        height="500px"
        src="/image/solutionHomepage.jpg"
        alt="Solution Homepage AUE VietNam"
      />
      <VStack
        data-aos={isMobile ? null : "fade-left"}
        display={"flex"}
        alignItems="flex-start"
        textAlign={"CENTER"}
        top="20%"
        // right={isMobile ? null : 0}
        textColor={"white"}
        width={isMobile ? "100%" : "50%"}
        position={"absolute"}
        paddingLeft="36px"
      >
        <Text fontWeight={"extrabold"} fontSize="36px">
          TRUNG TÂM ĐÀO TẠO TỰ ĐỘNG HÓA FASC
        </Text>
        {/* <Text width={isMobile ? "100%" : "60%"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text> */}
      </VStack>
      {isMobile ? (
        <VStack width={"100%"} spacing={"16px"} padding="16px">
          <Card
            Title={"Đào tạo tổng quan sản phẩm"}
            image={"/image/Trainning/Tbtdh.jpg"}
          />
          <Card Title={"SCADA"} image={"/image/Trainning/scada.jpg"} />
          <Card
            Title={"CCLink Interface"}
            image={"/image/Trainning/cclink.jpg"}
          />
          <Card
            Title={"Robot Mitsubishi Electric"}
            image={"/image/Trainning/Robot Mitsubishi.jpg"}
          />
        </VStack>
      ) : (
        <VStack paddingTop={"64px"}>
          <Text
            fontSize={"36px"}
            fontWeight={800}
            // fontFamily={"'Oswald', sans-serif;"}
            textColor={"#0099cc"}
          >
            CHƯƠNG TRÌNH ĐÀO TẠO
          </Text>
          <VStack
            display={"flex"}
            justifyContent="space-between"
            width={"1280px"}
            padding="64px 32px 0px 32px"
            data-aos="fade-up"
          >
            <HStack
              width={"100%"}
              spacing={"16px"}
              padding="16px"
              justifyContent="space-between"
            >
              <Card
                Title={"Đào tạo tổng quan sản phẩm"}
                image={"/image/Trainning/Tbtdh.jpg"}
              />
              <Card Title={"SCADA"} image={"/image/Trainning/scada.jpg"} />
            </HStack>
            <HStack
              width={"100%"}
              spacing={"16px"}
              padding="16px"
              justifyContent="space-between"
            >
              <Card
                Title={"CC-Link Interface"}
                image={"/image/Trainning/cclink.jpg"}
              />
              <Card
                Title={"Robot Mitsubishi Electric"}
                image={"/image/Trainning/Robot Mitsubishi.jpg"}
              />
            </HStack>
          </VStack>
        </VStack>
      )}
    </VStack>
  );
};

export default SolutionContainer;
