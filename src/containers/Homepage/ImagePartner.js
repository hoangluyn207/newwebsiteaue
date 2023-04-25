import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination, Autoplay } from "swiper";

import { Image, Box } from "@chakra-ui/react";
const ImagePartner = () => {
  const PartNerData = [
    {
      url: "/image/partner/crown.jpg",
    },
    {
      url: "/image/partner/4.jpg",
    },
    {
      url: "/image/partner/5.jpg",
    },
    {
      url: "/image/partner/6.jpg",
    },
    {
      url: "/image/partner/7.jpg",
    },
    {
      url: "/image/partner/8.jpg",
    },
    {
      url: "/image/partner/9.jpg",
    },
    {
      url: "/image/partner/10.jpg",
    },
    {
      url: "/image/partner/11.jpg",
    },
  ];

  return (
    <Box width={"100%"} height={"100%"}>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        effect="fade"
        modules={[Pagination, Autoplay, EffectFade]}
        autoplay={{ delay: 1500 }}
        loop="true"
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        {PartNerData.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "100%",
              height: "100vh",
            }}
          >
            <Image
              style={{
                filter: "brightness(80%)",
                width: "100%",
                height: "100vh",
              }}
              src={item.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImagePartner;
