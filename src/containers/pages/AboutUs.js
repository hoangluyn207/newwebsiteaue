import { Image, VStack, Text, HStack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Member from "../AboutUs/Member";
import ContactForm from "../AboutUs/ContactForm";
import { MobileContext } from "../../components/MobileContext";
import HisBus from "../AboutUs/HisBus";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const { isMobile } = useContext(MobileContext);
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);
  const TrietLyCard = ({ title, subtitle1, subtitle2 }) => {
    return (
      <VStack
        boxShadow="20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff"
        padding={isMobile ? "32px 16px" : "16px 32px"}
        alignItems={"flex-start"}
        textAlign={"left"}
        spacing={isMobile ? "16px" : "32px"}
        width={isMobile ? "80vw" : "350px"}
        height={"200px"}
        alignContent={"space-between"}
        borderRightWidth={"6px"}
        borderColor={"#f0fcff"}
        data-aos="zoom-in-up"
        // backgroundColor={"#f0fcff"}
      >
        <Text fontSize={"20px"} fontWeight={600}>
          {title}
        </Text>
        <VStack
          height={"100%"}
          alignItems={"flex-start"}
          textAlign={"left"}
          spacing={"8px"}
        >
          <Text>{subtitle1}</Text>
          <Text>{subtitle2}</Text>
        </VStack>
      </VStack>
    );
  };
  return (
    <VStack
      spacing={isMobile ? "32px" : "128px"}
      width={isMobile ? "100vw" : "full"}
    >
      <Image src="/image/AboutUs.JPG" width={isMobile ? "100vw" : "full"} />
      <VStack spacing={"32px"}>
        <Text
          fontSize={isMobile ? "24px" : "36px"}
          textTransform={"uppercase"}
          fontWeight="700"
          textColor={"#0099cc"}
        >
          AUE Việt Nam
        </Text>
        <Text margin={"0 !important"} fontSize={isMobile ? "16px" : "24px"}>
          Automation - Technology - Equipment
        </Text>
        <HisBus />
      </VStack>
      <VStack
        spacing={"32px"}
        width={isMobile ? "100vw" : "1280px"}
        justifyContent={"center"}
      >
        <Text
          fontSize={isMobile ? "24px" : "36px"}
          textTransform={"uppercase"}
          fontWeight="700"
          textColor={"#0099cc"}
        >
          Triết lý kinh doanh
        </Text>
        {isMobile ? (
          <VStack width={"full"} spacing={"32px"}>
            <TrietLyCard
              title={"Trung Thực"}
              subtitle1={"Mang những sản phẩm và dịch vụ thực cho khách hàng"}
              subtitle2={"Người thật, việc thật"}
            />
            <TrietLyCard
              title={"Trách Nhiệm"}
              subtitle1={"Cung cấp một sản phẩm, trách nhiệm cả công ty"}
              subtitle2={"Bảo hành có hạn, trách nhiệm trường tồn"}
            />
            <TrietLyCard
              title={"Phát Triển Bền Vững"}
              subtitle1={"Mang sản phẩm, giải pháp phù hợp với khách hàng"}
              subtitle2={"Khách hàng phát triển, công ty phát triển"}
            />
          </VStack>
        ) : (
          <HStack width={"1280px"} justifyContent={"space-between"}>
            <TrietLyCard
              title={"Trung Thực"}
              subtitle1={"Mang những sản phẩm và dịch vụ thực cho khách hàng"}
              subtitle2={"Người thật, việc thật"}
            />
            <TrietLyCard
              title={"Trách Nhiệm"}
              subtitle1={"Cung cấp một sản phẩm, trách nhiệm cả công ty"}
              subtitle2={"Bảo hành có hạn, trách nhiệm trường tồn"}
            />
            <TrietLyCard
              title={"Phát Triển Bền Vững"}
              subtitle1={"Mang sản phẩm, giải pháp phù hợp với khách hàng"}
              subtitle2={"Khách hàng phát triển, công ty phát triển"}
            />
          </HStack>
        )}
      </VStack>
      <VStack spacing={"32px"} width={isMobile ? "100vw" : "1280px"}>
        <Text
          fontSize={isMobile ? "24px" : "36px"}
          textTransform={"uppercase"}
          fontWeight="700"
          textColor={"#0099cc"}
        >
          Nhân sự chủ chốt
        </Text>
        <Member />
      </VStack>
      <VStack spacing={"32px"}>
        <Text
          fontSize={isMobile ? "24px" : "36px"}
          textTransform={"uppercase"}
          fontWeight="700"
          textColor={"#0099cc"}
        >
          Chứng nhận
        </Text>
        <Image width={"1280px"} src="./image/certificate.jpg" />
      </VStack>
      <HStack
        height={isMobile ? null : "400px"}
        display="flex"
        justifyContent={"center"}
        spacing="0"
        boxShadow="20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff"
        width={isMobile ? "100vw" : "1280px"}
      >
        {isMobile ? null : (
          <Image width={"50%"} src="/image/AboutUs.JPG" height="full" />
        )}
        <ContactForm />
      </HStack>
    </VStack>
  );
};

export default AboutUs;
