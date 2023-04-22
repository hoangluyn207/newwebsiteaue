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
              Công ty TNHH AUE Việt Nam - đại diện ủy quyền của thương hiệu danh
              tiếng Mitsubishi Electric tại Việt Nam. Chúng tôi tự hào là một
              trong những nhà cung cấp hàng đầu về thiết bị đóng cắt, tự động
              hóa và giải pháp kỹ thuật tại thị trường Việt Nam. Tận dụng sức
              mạnh từ đội ngũ kỹ sư chuyên nghiệp trên 3 miền đất nước, chúng
              tôi luôn hướng đến sứ mệnh "Nâng tầm nước Việt" bằng việc cung cấp
              sản phẩm và giải pháp kỹ thuật đạt chuẩn quốc tế và đáp ứng nhu
              cầu của khách hàng trong các ngành công nghiệp. Với sự cam kết và
              nỗ lực không ngừng, chúng tôi cam kết đem đến cho khách hàng sự
              hài lòng cao nhất với chất lượng dịch vụ từ các nước G7 được thực
              hiện bởi đội ngũ kỹ sư Việt Nam đầy nhiệt huyết và năng lượng.
              Chúng tôi tin rằng, sự thành công của khách hàng cũng là thành
              công của chúng tôi. Hãy đồng hành cùng chúng tôi để xây dựng một
              tương lai tươi sáng và phát triển bền vững cho Việt Nam.
            </Text>
          </VStack>
          <VStack padding={"16px"} width={"100vw"} spacing={"32px"}>
            <CirclePubble
              title={"Tầm nhìn"}
              // content="Contrary to popular belief, Lorem Ipsum is not simply random text."
              icon={<Tamnhin />}
            />
            <CirclePubble
              title={"Nhiệm vụ"}
              // content="Contrary to popular belief, Lorem Ipsum is not simply random text."
              icon={<Nhiemvu />}
            />
            <CirclePubble
              title={"Giá trị cốt lõi"}
              // content="Contrary to popular belief, Lorem Ipsum is not simply random text."
              icon={<Giatricotloi />}
            />
            <CirclePubble
              title={"Sứ mệnh"}
              // content="Contrary to popular belief, Lorem Ipsum is not simply random text."
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
            padding={"32px"}
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
            <Text textAlign={"justify"}>
              Công ty TNHH AUE Việt Nam - đại diện ủy quyền của thương hiệu danh
              tiếng Mitsubishi Electric tại Việt Nam. Chúng tôi tự hào là một
              trong những nhà cung cấp hàng đầu về thiết bị đóng cắt, tự động
              hóa và giải pháp kỹ thuật tại thị trường Việt Nam.
              <br /> Tận dụng sức mạnh từ đội ngũ kỹ sư chuyên nghiệp trên 3
              miền đất nước, chúng tôi luôn hướng đến sứ mệnh "Nâng tầm nước
              Việt" bằng việc cung cấp sản phẩm và giải pháp kỹ thuật đạt chuẩn
              quốc tế và đáp ứng nhu cầu của khách hàng trong các ngành công
              nghiệp.
              <br /> Với sự cam kết và nỗ lực không ngừng, chúng tôi cam kết đem
              đến cho khách hàng sự hài lòng cao nhất với chất lượng dịch vụ từ
              các nước G7 được thực hiện bởi đội ngũ kỹ sư Việt Nam đầy nhiệt
              huyết và năng lượng.
              <br /> Chúng tôi tin rằng, sự thành công của khách hàng cũng là
              thành công của chúng tôi. Hãy đồng hành cùng chúng tôi để xây dựng
              một tương lai tươi sáng và phát triển bền vững cho Việt Nam.
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
                // content="Contrary to popular belief, Lorem Ipsum is not simply random text."
                icon={<Tamnhin />}
              />
              <CirclePubble
                title={"Nhiệm vụ"}
                // content="Contrary to popular belief, Lorem Ipsum is not simply random text."
                icon={<Nhiemvu />}
              />
            </VStack>
            <VStack width={"50%"} spacing={"32px"}>
              <CirclePubble
                title={"Giá trị cốt lõi"}
                // content="Contrary to popular belief, Lorem Ipsum is not simply random text."
                icon={<Giatricotloi />}
              />
              <CirclePubble
                title={"Sứ mệnh"}
                // content="Contrary to popular belief, Lorem Ipsum is not simply random text."
              />
            </VStack>
          </HStack>
        </HStack>
      )}
    </>
  );
};

export default InfoContainer;
