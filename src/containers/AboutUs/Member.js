import React, { useEffect, useState } from "react";
import {
  HStack,
  Box,
  Image,
  IconButton,
  VStack,
  Text,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Css from "./Member.module.css";
import FacebookIcon36x36 from "../../icons/FacebookIcon36x36";
import LinkedIn from "../../icons/LinkedIn";
import ZaloIcon36x36 from "../../icons/ZaloIcon36x36";
import Phone from "../../icons/Phone";
import Email from "../../icons/Email";
import AOS from "aos";
import "aos/dist/aos.css";

const Member = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

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
  const BoxCard2 = ({ name, phone, mail, img, position, ado }) => {
    return (
      <HStack
        data-aos={ado}
        boxShadow="20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff"
        padding={isMobile ? "8px 16px" : "16px 32px"}
        spacing={isMobile ? "8px " : "16px"}
        width={isMobile ? "80vw" : "500px"}
        minHeight={isMobile ? "150px" : "200px"}
      >
        {isMobile ? (
          <VStack width={"full"}>
            <HStack width={"full"} alignItems={"center"} textAlign={"left"}>
              <Avatar
                display={"flex"}
                alignItems="flex-start"
                justifyContent="flex-start"
                name={name}
                src={img}
                size={"lg"}
              />
              <VStack
                alignItems={"flex-start"}
                textAlign={"left"}
                spacing={"8px"}
              >
                <Text
                  fontSize={"16px"}
                  textTransform={"uppercase"}
                  fontWeight={600}
                >
                  {name}
                </Text>
                <Text fontSize={"12px"}>{position}</Text>
              </VStack>
            </HStack>
            <VStack
              width={"full"}
              fontSize={"12px"}
              spacing={"6px"}
              alignItems={"flex-start"}
              textAlign={"left"}
            >
              <HStack alignItems={"flex-start"} textAlign={"left"}>
                <Phone color={"#0099cc"} />
                <Text>{phone}</Text>
              </HStack>
              <HStack alignItems={"flex-start"} textAlign={"left"}>
                <Email color={"#0099cc"} />
                <Text>{mail}</Text>
              </HStack>
            </VStack>
          </VStack>
        ) : (
          <>
            <Avatar
              onClick={() => handleImageClick(img)}
              name={name}
              src={img}
              size={"2xl"}
            />

            {/* <Image
          src={img}
          width={isMobile ? "20%" : "100px"}
          height={isMobile ? "20%" : "100px"}
          borderRadius={"100%"}
          objectFit={"cover"}
        /> */}
            <VStack
              width={"300px"}
              alignItems={"flex-start"}
              textAlign={"left"}
              spacing={"8px"}
            >
              <Text
                fontSize={"18px"}
                textTransform={"uppercase"}
                fontWeight={600}
              >
                {name}
              </Text>
              <Text fontSize={"14px"}>{position}</Text>
              <VStack
                fontSize={"14px"}
                spacing={"6px"}
                alignItems={"flex-start"}
                textAlign={"left"}
              >
                <HStack alignItems={"flex-start"} textAlign={"left"}>
                  <Phone color={"#0099cc"} />
                  <Text>{phone}</Text>
                </HStack>
                <HStack alignItems={"flex-start"} textAlign={"left"}>
                  <Email color={"#0099cc"} />
                  <Text>{mail}</Text>
                </HStack>
              </VStack>
            </VStack>
          </>
        )}
      </HStack>
    );
  };

  const BoxCard = () => {
    return (
      <Box className={Css.BoxCard} position={"relative"}>
        <Image
          className={Css.CardImage}
          width={"full"}
          src="/image/member/vu.jpg"
        />
        <HStack className={Css.SocialMedia} position={"absolute"} bottom="50px">
          <IconButton
            className={`${Css.Icon} ${Css.Icon1}`}
            background={"transparent"}
            icon={<FacebookIcon36x36 />}
          />
          <IconButton
            className={`${Css.Icon} ${Css.Icon2}`}
            background={"transparent"}
            icon={<LinkedIn />}
          />
          <IconButton
            className={`${Css.Icon} ${Css.Icon3}`}
            background={"transparent"}
            icon={<ZaloIcon36x36 />}
          />
        </HStack>
      </Box>
    );
  };
  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xl">
        <ModalOverlay css={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <img src={selectedImage} />
          </ModalBody>
        </ModalContent>
      </Modal>
      {isMobile ? (
        <VStack spacing={"32px"} padding={"0px 16px"}>
          <BoxCard2
            ado="zoom-in-up"
            img={"/image/member/vu.jpg"}
            name={"NGUYỄN QUANG VŨ"}
            phone={"0905.998.598"}
            mail={"quangvu.nguyen@auevn.com"}
            position={"Giám đốc"}
          />
          <BoxCard2
            ado="zoom-in-up"
            img={"/image/member/hoang.jpg"}
            name={"Lương Phước Minh Hoàng"}
            phone={"0905.583.598"}
            mail={"minhhoang.luongphuoc@auevn.com"}
            position={"Phòng kinh doanh"}
          />
          <BoxCard2
            ado="zoom-in-up"
            img={"/image/member/anh.jpg"}
            name={"Nguyễn Thị Ánh"}
            phone={"0906.567.598"}
            mail={"anh.nguyen@auevn.com"}
            position={"Phòng kinh doanh"}
          />
          <BoxCard2
            ado="zoom-in-up"
            img={"/image/member/thao.jpg"}
            name={"Nguyễn Thị Phương Thảo"}
            phone={"0905.996.598"}
            mail={"phuongthao.nguyen@auevn.com"}
            position={"Phòng kinh doanh"}
          />
          <BoxCard2
            ado="zoom-in-up"
            img={"/image/member/quynh.jpg"}
            name={"Nguyễn Khương Quỳnh"}
            phone={"0905.677.598"}
            mail={"khuongquynh.nguyen@auevn.com"}
            position={"Phòng kỹ thuật"}
          />

          <BoxCard2
            ado="zoom-in-up"
            img={"/image/member/luc.jpg"}
            name={"Trương Phước Lực"}
            phone={"0979.301.422"}
            mail={"truong.phuocluc@auevn.com"}
            position={"Phòng kỹ thuật"}
          />
          <BoxCard2
            ado="zoom-in-up"
            img={"/image/member/hien.jpg"}
            name={"Ngô Thị Hiền"}
            phone={"0905.997.598"}
            mail={"thihien.ngo@auevn.com"}
            position={"Phòng kế toán"}
          />
          {/* <BoxCard2
          ado="zoom-in-up"
        img={"/image/member/vu.jpg"}
        name={"Nguyễn Thị Kim Hạnh"}
        phone={"0905.997.598"}
        mail={"kimhanh.nguyen@auevn.com"}
        position={"Kế toán"}
      /> */}
          <BoxCard2
            ado={"fade-left"}
            img={"/image/member/hang.jpg"}
            name={"Huỳnh Thị Thanh Hằng"}
            phone={"0777.961.912"}
            mail={"thanhhang.huynh@auevn.com"}
            position={"Phòng hành chính nhân sự"}
          />
        </VStack>
      ) : (
        <VStack width={"1280px"} spacing={"48px"} padding={"0px 32px"}>
          <HStack
            width={"1280px"}
            display="flex"
            justifyContent="space-between"
          >
            <BoxCard2
              ado={"fade-right"}
              img={"/image/member/vu.jpg"}
              name={"NGUYỄN QUANG VŨ"}
              phone={"0905.998.598"}
              mail={"quangvu.nguyen@auevn.com"}
              position={"Giám đốc"}
            />
            <BoxCard2
              ado={"fade-left"}
              img={"/image/member/hoang.jpg"}
              name={"Lương Phước Minh Hoàng"}
              phone={"0905.583.598"}
              mail={"minhhoang.luongphuoc@auevn.com"}
              position={"Phòng kinh doanh"}
            />
          </HStack>
          <HStack
            width={"1280px"}
            display="flex"
            justifyContent="space-between"
          >
            <BoxCard2
              ado={"fade-right"}
              img={"/image/member/anh.jpg"}
              name={"Nguyễn Thị Ánh"}
              phone={"0906.567.598"}
              mail={"anh.nguyen@auevn.com"}
              position={"Phòng kinh doanh"}
            />
            <BoxCard2
              ado={"fade-left"}
              img={"/image/member/thao.jpg"}
              name={"Nguyễn Thị Phương Thảo"}
              phone={"0905.996.598"}
              mail={"phuongthao.nguyen@auevn.com"}
              position={"Phòng kinh doanh"}
            />

            {/* <BoxCard2
          img={"/image/member/vu.jpg"}
          name={"Nguyễn Thị Kim Hạnh"}
          phone={"0905.997.598"}
          mail={"kimhanh.nguyen@auevn.com"}
          position={"Kế toán"}
        /> */}
          </HStack>
          <HStack
            width={"1280px"}
            display="flex"
            justifyContent="space-between"
          >
            <BoxCard2
              ado={"fade-right"}
              img={"/image/member/quynh.jpg"}
              name={"Nguyễn Khương Quỳnh"}
              phone={"0905.677.598"}
              mail={"khuongquynh.nguyen@auevn.com"}
              position={"Phòng kỹ thuật"}
            />
            <BoxCard2
              img={"/image/member/luc.jpg"}
              name={"Trương Phước Lực"}
              phone={"0905.566.598"}
              mail={"truong.phuocluc@auevn.com"}
              position={"Phòng kỹ thuật"}
              ado={"fade-left"}
            />

            {/* <BoxCard2
          img={"/image/member/vu.jpg"}
          name={"Đỗ Uyễn My"}
          phone={"0905.878.598"}
          mail={"uyenmy.do@auevn.com"}
          position={"Phòng mua hàng"}
        /> */}
          </HStack>
          <HStack
            width={"1280px"}
            display="flex"
            justifyContent="space-between"
          >
            <BoxCard2
              ado={"fade-right"}
              img={"/image/member/hien.jpg"}
              name={"Ngô Thị Hiền"}
              phone={"0905.997.598"}
              mail={"thihien.ngo@auevn.com"}
              position={"Phòng kế toán"}
            />
            {/* <BoxCard2
          img={"/image/member/vu.jpg"}
          name={"Nguyễn Hồng Lam"}
          phone={"0961.055.290"}
          mail={"honglam.nguyen@auevn.com"}
          position={"Phòng mua hàng"}
        /> */}

            {/* <BoxCard2
          img={"/image/member/vu.jpg"}
          name={"Trương Phước Lực"}
          phone={"0905.566.598"}
          mail={"phuocluc.truong@auevn.com"}
          position={"Phòng kỹ thuật"}

        /> */}
            <BoxCard2
              ado={"fade-left"}
              img={"/image/member/hang.jpg"}
              name={"Huỳnh Thị Thanh Hằng"}
              phone={"0777.961.912"}
              mail={"thanhhang.huynh@auevn.com"}
              position={"Phòng hành chính nhân sự"}
            />
          </HStack>
        </VStack>
      )}
    </>
  );
};

export default Member;
