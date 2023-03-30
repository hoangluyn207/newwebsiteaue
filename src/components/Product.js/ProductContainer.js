import React from "react";
import { Box, HStack, VStack, Image, Text, Button } from "@chakra-ui/react";
import "./ProductContainer.css";
import ButtonChangeText from "../Button/ButtonChangeText";

const ProductContainer = () => {
  return (
    <Box
      width="1280px"
      display={"flex"}
      justifyContent="center"
      paddingTop={"128px"}
    >
      <HStack width={"full"} justifyContent="space-around">
        <VStack
          width={"400px"}
          height="400px"
          boxShadow="20px 20px 60px #d9d9d9,-20px 0 60px #ffffff"
          display={"flex"}
          justifyContent="center"
          transition={"0.5s"}
          className="BoxCard"
          position={"relative"}
        >
          <Image
            transform="translateY(-80px)"
            filter="drop-shadow(-5px 5px 10px #ccc)"
            className="Image"
            width={"300px"}
            src="/image/robot.png"
            top={"-100px"}
            transition={"0.5s"}
          />
          <Box position={"absolute"} bottom="0px">
            <div class="buttons">
              <button class="btn">
                <span></span>
                <p
                  data-start="good luck!"
                  data-text="XEM THÊM"
                  data-title="FACTORY AUTOMATION"
                ></p>
              </button>
            </div>
          </Box>
        </VStack>
        <VStack
          width={"400px"}
          height="400px"
          boxShadow="20px 20px 60px #d9d9d9,-20px 0 60px #ffffff"
          display={"flex"}
          justifyContent="center"
          transition={"0.5s"}
          className="BoxCard"
          position={"relative"}
        >
          <Image
            width={"250px"}
            transform="translateY(-80px)"
            filter="drop-shadow(-5px 5px 10px #ccc)"
            className="Image"
            src="/image/ACB.png"
            top={"-100px"}
            transition={"0.5s"}
          />
          <Box position={"absolute"} bottom="0px">
            <div class="buttons">
              <button class="btn">
                <span></span>
                <p
                  data-start="good luck!"
                  data-text="XEM THÊM"
                  data-title="POWER DISTRIBUTON"
                ></p>
              </button>
            </div>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ProductContainer;
