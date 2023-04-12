import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import "./ProductContainer.css";
import ButtonChangeText from "../Button/ButtonChangeText";
import { FiX } from "react-icons/fi";

const ProductContainer = () => {
  const [stateProduct, setStateProduct] = useState("");

  // useEffect(() => {
  //   if (stateProduct === "FA") {
  //   } else {
  //   }
  // }, [stateProduct]);

  return (
    <Box
      width="1280px"
      display={"flex"}
      justifyContent="center"
      paddingTop={"128px"}
      transition={"0.5s"}
    >
      <HStack width={"full"} justifyContent="space-around">
        <VStack
          width={stateProduct === "PD" ? "1280px" : "400px"}
          height={stateProduct === "PD" ? "400px" : "400px"}
          boxShadow="20px 20px 60px #d9d9d9,-20px 0 60px #ffffff"
          display={
            stateProduct === null
              ? "flex"
              : stateProduct === "FA"
              ? "none"
              : "flex"
          }
          justifyContent="center"
          transition={"0.5s"}
          className="BoxCard"
          position={"relative"}
        >
          <IconButton
            display={stateProduct ? "flex" : "none"}
            onClick={() => setStateProduct("")}
            position={"absolute"}
            top={0}
            right={0}
            zIndex={2}
            backgroundColor={"transparent"}
            icon={<FiX />}
          />
          <Image
            display={stateProduct === "PD" ? "none" : "flex"}
            transform="translateY(-80px)"
            filter="drop-shadow(-5px 5px 10px #ccc)"
            className="Image"
            height={"350px"}
            src="/image/robot.png"
            top={"-100px"}
            transition={"0.5s"}
          />
          <Box
            display={stateProduct === "PD" ? "none" : "flex"}
            position={"absolute"}
            bottom="0px"
          >
            <div className="buttons">
              <button
                className="btn"
                onClick={() => {
                  setStateProduct("PD");
                }}
              >
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
          width={stateProduct === "FA" ? "1280px" : "400px"}
          height={stateProduct === "FA" ? "400px" : "400px"}
          boxShadow="20px 20px 60px #d9d9d9,-20px 0 60px #ffffff"
          display={
            stateProduct === null
              ? "flex"
              : stateProduct === "PD"
              ? "none"
              : "flex"
          }
          justifyContent="center"
          transition={"0.5s"}
          className="BoxCard"
          position={"relative"}
        >
          <IconButton
            display={stateProduct ? "flex" : "none"}
            onClick={() => setStateProduct("")}
            position={"absolute"}
            top={0}
            right={0}
            zIndex={2}
            backgroundColor={"transparent"}
            icon={<FiX />}
          />
          <Image
            display={stateProduct === "FA" ? "none" : "flex"}
            height={"350px"}
            transform="translateY(-80px)"
            filter="drop-shadow(-5px 5px 10px #ccc)"
            className="Image"
            src="/image/ACB.png"
            top={"-100px"}
            transition={"0.5s"}
          />
          <Box
            display={stateProduct === "FA" ? "none" : "flex"}
            position={"absolute"}
            bottom="0px"
          >
            <div className="buttons">
              <button
                onClick={() => {
                  setStateProduct("FA");
                }}
                className="btn"
              >
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
