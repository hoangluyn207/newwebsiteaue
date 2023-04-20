import { VStack, Text, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import "swiper/css";
import { MobileContext } from "../../components/MobileContext";
import "./PartnerContainer.css";

const PartnerContainer = () => {
  SwiperCore.use([Autoplay]);
  const { isMobile } = useContext(MobileContext);

  return (
    <VStack
      paddingBottom={isMobile ? "32px" : "128px"}
      width={"full"}
      className="my-swiper"
    >
      <Text
        textColor={"#0099cc"}
        fontWeight="extrabold"
        fontSize={isMobile ? "28px" : "36px"}
      >
        ĐỐI TÁC
      </Text>
      {isMobile ? null : (
        <Swiper
          className="swiper"
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 1000 }}
        >
          <SwiperSlide className="swiper-slide">
            <Image
              width={"full"}
              objectFit={"cover"}
              src="/logo/ICONICS_logo.png"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image objectFit={"cover"} src="/logo/Kubota-Logo.png" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image objectFit={"cover"} src="/logo/logo.jpg" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image objectFit={"cover"} src="/logo/logorb.png" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image objectFit={"cover"} src="/logo/ptm.png" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image objectFit={"cover"} src="/logo/tge.png" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image objectFit={"cover"} src="/logo/dinco.png" />
          </SwiperSlide>
        </Swiper>
      )}
    </VStack>
  );
};

export default PartnerContainer;
