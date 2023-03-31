import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, HStack, VStack, Image, Text, Button } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Pagination } from "swiper";

const ProjectContainer = () => {
  return (
    <Box padding={"128px 0px 0px 0px"}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        initialSlide={3}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide width={"full"}>
          <VStack
            width={"full"}
            height="full"
            justifyContent={"flex-start"}
            backgroundColor="#FFF"
            alignItems="flex-start"
          >
            <Box height="320px" width="100%" overflow={"hidden"}>
              <Image
                transition={"0.5s"}
                src="/image/project/lvs3.jpg"
                _hover={{ transform: "scale(1.2)" }}
              />
            </Box>
            <Text padding={"8px 16px"}>Title</Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide width={"full"}>
          <VStack
            width={"full"}
            height="full"
            justifyContent={"flex-start"}
            backgroundColor="#FFF"
            alignItems="flex-start"
          >
            <Box height="320px" width="100%" overflow={"hidden"}>
              <Image
                transition={"0.5s"}
                src="/image/project/lvs3.jpg"
                _hover={{ transform: "scale(1.2)" }}
              />
            </Box>
            <Text padding={"8px 16px"}>Title</Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide width={"full"}>
          <VStack
            width={"full"}
            height="full"
            justifyContent={"flex-start"}
            backgroundColor="#FFF"
            alignItems="flex-start"
          >
            <Box height="320px" width="100%" overflow={"hidden"}>
              <Image
                transition={"0.5s"}
                src="/image/project/lvs3.jpg"
                _hover={{ transform: "scale(1.2)" }}
              />
            </Box>
            <Text padding={"8px 16px"}>Title</Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide width={"full"}>
          <VStack
            width={"full"}
            height="full"
            justifyContent={"flex-start"}
            backgroundColor="#FFF"
            alignItems="flex-start"
          >
            <Box height="320px" width="100%" overflow={"hidden"}>
              <Image
                transition={"0.5s"}
                src="/image/project/lvs3.jpg"
                _hover={{ transform: "scale(1.2)" }}
              />
            </Box>
            <Text padding={"8px 16px"}>Title</Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide width={"full"}>
          <VStack
            width={"full"}
            height="full"
            justifyContent={"flex-start"}
            backgroundColor="#FFF"
            alignItems="flex-start"
          >
            <Box height="320px" width="100%" overflow={"hidden"}>
              <Image
                transition={"0.5s"}
                src="/image/project/lvs3.jpg"
                _hover={{ transform: "scale(1.2)" }}
              />
            </Box>
            <Text padding={"8px 16px"}>Title</Text>
          </VStack>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ProjectContainer;
