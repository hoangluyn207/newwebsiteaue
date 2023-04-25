import React, { useState, useEffect } from "react";
import { Box, VStack, Text, HStack, Image, IconButton } from "@chakra-ui/react";
import Location from "../../icons/Location";
import Email from "../../icons/Email";
import Info from "../../icons/Info";
import Phone from "../../icons/Phone";
import FacebookIcon36x36 from "../../icons/FacebookIcon36x36.js";
import ZaloIcon36x36 from "../../icons/ZaloIcon36x36.js";
import EmailIcon36x36 from "../../icons/EmailIcon36x36";
import FacebookSmallIcon from "../../icons/FacebookSmallIcon";
import ZaloSmallIcon from "../../icons/ZaloSmallIcon";
import LinkdInSmallIcon from "../../icons/LinkdInSmallIcon";
import EmailSmallIcon from "../../icons/EmailSmallIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isMobile ? (
        <VStack
          margin={"0 !important"}
          width={"100vw"}
          display={"flex"}
          padding={"32px 16px"}
          backgroundColor={"#2D2727"}
          textColor={"white"}
          justifyContent={"flex-start"}
          alignContent={"left"}
          spacing={"32px"}
        >
          <VStack width={"full"} spacing={"16px"}>
            <VStack
              width={"full"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              textAlign={"left"}
              spacing={"2px"}
            >
              <Text>
                <u
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "2px",
                  }}
                >
                  GIỚI THIỆU
                </u>
              </Text>
            </VStack>
            <VStack
              width={"full"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              textAlign={"left"}
              spacing={"2px"}
            >
              <Text>
                <u
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "2px",
                  }}
                >
                  DỰ ÁN
                </u>
              </Text>
            </VStack>
            <VStack
              width={"full"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              textAlign={"left"}
              spacing={"14px"}
            >
              <Text>
                <u
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "2px",
                  }}
                >
                  SẢN PHẨM
                </u>
              </Text>
              <VStack
                width={"full"}
                paddingLeft={"8px"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                textAlign={"left"}
                spacing={"8px"}
                textColor={"#ccc"}
              >
                <Text>Factory Automation</Text>
                <Text>Power Distributon</Text>
              </VStack>
            </VStack>
            <VStack
              width={"full"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              textAlign={"left"}
              spacing={"14px"}
            >
              <Text>
                <u
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "5px",
                    textDecorationThickness: "2px",
                  }}
                >
                  GIẢI PHÁP
                </u>
              </Text>
              <VStack
                width={"full"}
                paddingLeft={"8px"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                textAlign={"left"}
                spacing={"8px"}
                textColor={"#ccc"}
              >
                <Text>Giám sát năng lượng</Text>
                <Text>Giám sát năng lượng</Text>
                <Text>Giám sát năng lượng</Text>
                <Text>Giám sát năng lượng</Text>
              </VStack>
            </VStack>
          </VStack>

          <Box width={"100vw"} justifyContent={"center"}>
            <Text fontWeight="bold" fontSize="18px">
              Công ty TNHH AUE Việt Nam
            </Text>
            <VStack
              width={"100vw"}
              paddingTop="8px"
              spacing={"8px"}
              display="flex"
              alignItems="center"
              textAlign={"center"}
              fontSize="12px"
            >
              <Text>
                Lô A4-5, Đường Nguyễn Sinh Sắc, Phường Hòa Minh, Quận Liên
                Chiểu, TP Đà Nẵng
              </Text>
              <HStack width={"100vw"} justifyContent={"center"}>
                <IconButton
                  _hover={{
                    background: "transparent",
                    transform: "translateY(-2px)",
                  }}
                  background={"transparent"}
                  icon={<FacebookSmallIcon />}
                  onClick={() => {
                    window.open("https://www.facebook.com/AUEVN", "_blank");
                  }}
                />

                <IconButton
                  onClick={() => {
                    window.open("https://zalo.me/0906567598", "_blank");
                  }}
                  _hover={{
                    transform: "translateY(-2px)",
                    background: "transparent",
                  }}
                  background={"transparent"}
                  icon={<ZaloSmallIcon />}
                />
                <IconButton
                  as="a"
                  href="mailto:sales@auevn.com"
                  _hover={{
                    transform: "translateY(-2px)",
                    background: "transparent",
                  }}
                  background={"transparent"}
                  icon={<EmailSmallIcon />}
                />
                <IconButton
                  _hover={{
                    background: "transparent",
                    transform: "translateY(-2px)",
                  }}
                  background={"transparent"}
                  icon={<LinkdInSmallIcon />}
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/auevn",
                      "_blank"
                    );
                  }}
                />
              </HStack>
            </VStack>
          </Box>
        </VStack>
      ) : (
        <VStack
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          position={"relative"}
          paddingTop={"64px"}
        >
          <Image
            position={"absolute"}
            width={"100%"}
            bottom="0"
            right={0}
            opacity={"10%"}
            src="./image/footerBg.png"
            alt="industry and building"
          />
          <HStack
            width={"1280px"}
            display={"flex"}
            justifyContent={"center"}
            padding={"32px 32px"}
            alignItems="flex-start"
          >
            <Box width={"50%"}>
              <iframe
                id="showcase"
                width="100%"
                src="https://my.matterport.com/show/?play=1&amp;share=0&amp;wh=0&amp;m=D96mwmf11FV"
                frameBorder="0"
                allowFullScreen=""
                allow="vr"
                title="Space"
                referrerPolicy="unsafe-url"
                className="hero-section_showcase__lYmrm"
              ></iframe>
            </Box>
            <Box width={"50%"}>
              <Text fontWeight="bold" fontSize="18px" textColor="#0099cc">
                Công ty TNHH AUE Việt Nam
              </Text>
              <VStack
                width={"100%"}
                paddingLeft="32px"
                spacing={"8px"}
                display="flex"
                alignItems="flex-start"
                textAlign={"left"}
                fontSize="14px"
              >
                <HStack>
                  <Location color={"#0099cc"} />
                  <Text>
                    Trụ sở chính: Lô A4-5, Nguyễn Sinh Sắc, Hòa Minh, Liên
                    Chiểu, Đà Nẵng
                  </Text>
                </HStack>
                <HStack>
                  <Location color={"#0099cc"} />
                  <Text>
                    VP HCM: 40/5/8 Hồ Văn Long, Bình Hưng Hòa B, Bình Tân, Hồ
                    Chí Minh
                  </Text>
                </HStack>
                <HStack>
                  <Email color={"#0099cc"} />
                  <Text>sales@auevn.com</Text>
                </HStack>
                <HStack>
                  <Phone color={"#0099cc"} />
                  <Text>0906.567.598 (Ms. Ánh) - 0905.996.598 (Ms. Thảo)</Text>
                </HStack>
                <HStack>
                  <Info color={"#0099cc"} />
                  <Text>MST: 0401812217</Text>
                </HStack>
              </VStack>
            </Box>
          </HStack>
          <VStack
            width={"1280px"}
            position="relative"
            display={"flex"}
            justifyContent={"center"}
          >
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              paddingBottom={"32px"}
            >
              <HStack
                fontSize="14px"
                padding={"0px 32px"}
                width={"100%"}
                spacing={"80px"}
                display="flex"
                alignItems="flex-start"
                textColor="#016698"
              >
                <VStack
                  width={"25%"}
                  spacing="8px"
                  display={"flex"}
                  alignItems="flex-start"
                >
                  <Link to={"/thongtin"}>
                    <Text
                      textColor={"#0099cc"}
                      paddingBottom="8px"
                      fontSize="16px"
                      fontWeight="bold"
                    >
                      Giới thiệu
                    </Text>
                  </Link>
                  <Text>Về chúng tôi</Text>
                  <Link as={Link} to={"/thongtin#nhansu"}>
                    Nhân sự
                  </Link>
                </VStack>
                <VStack
                  width={"25%"}
                  spacing="8px"
                  display={"flex"}
                  alignItems="flex-start"
                >
                  <Link to={"/sanpham"}>
                    <Text
                      textColor={"#0099cc"}
                      paddingBottom="8px"
                      fontSize="16px"
                      fontWeight="bold"
                    >
                      Sản phẩm
                    </Text>
                  </Link>
                  <Text as={Link} to={"/sanpham/fa"}>
                    Thiết bị tự động hóa
                  </Text>
                  <Text as={Link} to={"/sanpham/pd"}>
                    Thiết bị phân phối điện hạ thế
                  </Text>
                </VStack>

                <VStack
                  width={"25%"}
                  spacing="8px"
                  display={"flex"}
                  alignItems="flex-start"
                >
                  <Link to={"/giaiphap"}>
                    <Text
                      textColor={"#0099cc"}
                      paddingBottom="8px"
                      fontSize="16px"
                      fontWeight="bold"
                    >
                      Giải pháp
                    </Text>
                  </Link>
                  <Text>Giám sát năng lượng</Text>
                  <Text>Giám sát trạng thái máy</Text>
                  <Text>Giám sát khí nén</Text>
                  <Text>Giám sát nhiệt độ, độ ẩm</Text>
                </VStack>
                <VStack
                  width={"25%"}
                  spacing="8px"
                  display={"flex"}
                  alignItems="flex-start"
                >
                  <Link to={"/duan"}>
                    <Text
                      textColor={"#0099cc"}
                      paddingBottom="8px"
                      fontSize="16px"
                      fontWeight="bold"
                    >
                      Dự án
                    </Text>
                  </Link>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        </VStack>
      )}
    </>
  );
};

export default Footer;
