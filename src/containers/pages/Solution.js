import React from "react";
import { Box, Image, VStack, Text, HStack, Textarea } from "@chakra-ui/react";
import TextField from "../../components/TextField";
import SolutionCardContainer from "../Solution/SolutionCardContainer";

const Solution = () => {
  return (
    <VStack
      width={"100%"}
      display="flex"
      justifyContent={"center"}
      spacing={"32px"}
      margin={"0 !important"}
      paddingBottom={"100px"}
    >
      <Box
        className="SolutionCoverContainer"
        width={"full"}
        height="100vh"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Image
          position={"absolute"}
          filter="brightness(50%)"
          height="100vh"
          width={"full"}
          src="/image/coverSolution.jpg"
        />
        <VStack
          className="figure"
          background="linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))"
          backdropFilter="blur(10px)"
          border-radius="20px"
          border="1px solid rgba(255, 255, 255, 0.18)"
          boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.37)"
          justifyContent={"center"}
          spacing={"16px"}
          padding={"32px 64px"}
        >
          <Text style={{ color: "#FFF" }} fontWeight={800} fontSize={"36px"}>
            GIẢI PHÁP
          </Text>
          <Text textColor={"#FFF"}>
            AUE Việt Nam cung cấp các giải pháp đáp ứng nhu cầu của khách hàng
            với giá trị tốt nhất
          </Text>
        </VStack>
      </Box>
      <SolutionCardContainer />
      <HStack backgroundColor={"#f0f0f0"} width={"1250px"}>
        <VStack
          width={"50%"}
          paddingLeft={"68px"}
          alignItems={"flex-start"}
          textAlign={"left"}
        >
          <Text fontWeight={700}>CHỨNG NHẬN ICONICS</Text>
          <Text textAlign={"justify"}>
            AUE Việt Nam vinh hạnh khi được đồng hành với Mitsubishi Electric
            Việt Nam như một đối tác tích hợp hệ thống độc quyền Về SCADA
            software-ICONICS Suite™. Là một trong những công ty hàng đầu thế
            giới trong việc cung cấp giải pháp phần mềm tự động hóa tiên tiến
            nhất cho nhiều ngành công nghiệp trên toàn cầu. <br />
            Giải pháp phần mềm của ICONICS bao gồm quản lý trực quan nâng cao,
            lưu trữ và truy xuất nhanh chóng, phân tích dữ liệu chuyên sâu, khả
            năng tương thích trên nhiều thiết và tối ưu hóa IIoT/đám mây.
            <br /> Đặc biệt, những công cụ sáng tạo tích hợp như trực quan hóa,
            lập lịch sử, phân tích, triển khai và quản lý dữ liệu đám mây theo
            quy trình và yêu cầu của khách hàng, giúp ICONICS vượt trội hơn so
            với các đối thủ.
          </Text>
        </VStack>
        <Image width={"50%"} src="./image/v01.jpg" />
      </HStack>
    </VStack>
  );
};

export default Solution;
