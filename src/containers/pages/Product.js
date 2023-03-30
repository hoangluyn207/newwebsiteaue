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
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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
