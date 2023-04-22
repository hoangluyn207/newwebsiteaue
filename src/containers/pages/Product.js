import { HStack, Text, Image, Box, VStack } from "@chakra-ui/react";
import React from "react";
import ProductContainer from "../../components/Product.js/ProductContainer";

const Product = () => {
  return (
    <VStack
      width="full"
      paddingTop={"64px"}
      display={"flex"}
      justifyContent="center"
      paddingBottom={"100px"}
    >
      <Box width="1280px" display={"flex"} justifyContent="center">
        <HStack spacing={"32px"}>
          <VStack
            width={"50%"}
            display="flex"
            alignItems="flex-start"
            textAlign={"left"}
            padding="0px 32px"
          >
            <Text
              textAlign={"start"}
              textColor={"#0099cc"}
              fontWeight="extrabold"
              fontSize={"36px"}
            >
              SẢN PHẨM
            </Text>
            <Text textAlign={"justify"}>
              AUE Việt Nam hiện đang là Nhà phân phối ủy quyền chính thức Thiết
              bị phân phối điện hạ thế và Tự động hóa Mitsubishi Electric.
              <br />
              Thương hiệu thiết bị điện hàng đầu thế giới với hơn 100 năm hình
              thành và phát triển.
              <br /> Chúng tôi tự tin có thể cung cấp trọn bộ các sản phẩm điều
              khiển phù hợp với mọi yêu cầu, thiết kế từ Nhà máy với hiệu suất
              và chất lượng tốt nhất.
            </Text>
          </VStack>
          <Image width={"600px"} src="/image/backgroundProduct.png" />
        </HStack>
      </Box>
      <ProductContainer />
    </VStack>
  );
};

export default Product;
