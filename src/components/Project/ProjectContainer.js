import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, HStack, VStack, Image, Text, Button } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
import { Pagination } from "swiper";

const ProjectContainer = () => {
  const DataProject = [
    {
      Name: "TỔNG CTY DỆT MAY HÒA THỌ - ĐÀ NẴNG",
      Product: "Nâng cấp hệ thống thiết bị",
      Image: "/image/project/detmay.jpg",
    },
    {
      Name: "NHÀ MÁY MOLEX - HÀ NỘI",
      Product: "Hệ thống xử lý nước thải",
      Image: "/image/project/molex.jpg",
    },
    {
      Name: "NHÀ MÁY FOSTER - ĐÀ NẴNG",
      Product: "Thiết bị điều khiển",
      Image: "/image/project/foster.jpg",
    },
    {
      Name: "THÉP VINA KYOEI - BÀ RỊA VŨNG TÀU",
      Product: "Hệ thống xử lý nước thải",
      Image: "/image/project/vina kyoei.jpg",
    },
    {
      Name: "NHÀ MÁY MAKITECH - QUẢNG NAM",
      Product: "Thiết bị điều khiển",
      Image: "/image/project/makitech.jpg",
    },
    {
      Name: "KHÁCH SẠN AWAKEN - ĐÀ NẴNG",
      Product: "Tủ điện MSB, MDB",
      Image: "/image/project/awaken.jpg",
    },
    {
      Name: "GATEWAY THẢO ĐIỀN - HỒ CHÍ MINH",
      Product: "Tủ điện DB",
      Image: "/image/project/gateway thao dien.jpg",
    },
    {
      Name: "BẦU TRÀM LAKESIDE - ĐÀ NẴNG",
      Product: "Tủ điện DB",
      Image: "/image/project/bautram.jpg",
    },
    {
      Name: "NHÀ MÁY TCIE ĐÀ NẴNG",
      Product: "Tủ điện MSB, MDB",
      Image: "/image/project/tcie.jpg",
    },
  ];

  return (
    <Box padding={"32px 0px 128px 0px"}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        initialSlide={3}
        className="mySwiper"
      >
        {DataProject.map((item, index) => (
          <SwiperSlide key={index} width={"full"}>
            <VStack
              width={"full"}
              height="full"
              justifyContent={"flex-start"}
              backgroundColor="#FFF"
              alignItems="flex-start"
            >
              <Box width="100%" overflow={"hidden"}>
                <Image
                  transition={"0.5s"}
                  src={item.Image}
                  _hover={{ transform: "scale(1.2)" }}
                />
              </Box>
              <Text padding={"8px 16px"} fontSize={"16px"}>
                {item.Name}
              </Text>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProjectContainer;
