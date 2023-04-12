import { VStack, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import "swiper/css";
import "./PartnerContainer.css";

const PartnerContainer = () => {
  SwiperCore.use([Autoplay]);

  return (
    <VStack width={"full"} className="my-swiper">
      <Text textColor={"#0099cc"} fontWeight="extrabold" fontSize={"36px"}>
        ĐỐI TÁC & KHÁCH HÀNG
      </Text>
      <Swiper
        className="swiper"
        slidesPerView={4}
        spaceBetween={30}
        modules={Autoplay}
        loop={true}
        autoplay={{ delay: 1000 }}
      >
        <SwiperSlide className="swiper-slide">
          <Image objectFit={"cover"} src="/logo/coca.png" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image objectFit={"cover"} src="/logo/coca.png" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image objectFit={"cover"} src="/logo/coca.png" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image objectFit={"cover"} src="/logo/coca.png" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image objectFit={"cover"} src="/logo/coca.png" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image objectFit={"cover"} src="/logo/coca.png" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image objectFit={"cover"} src="/logo/coca.png" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image objectFit={"cover"} src="/logo/coca.png" />
        </SwiperSlide>
      </Swiper>
    </VStack>
  );
};

export default PartnerContainer;
