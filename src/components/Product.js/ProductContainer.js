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
import CardProduct from "./CardProduct";
import CardProduct2 from "./CardProduct2";
import { useNavigate } from "react-router-dom";

const ProductContainer = () => {
  // useEffect(() => {
  //   if (stateProduct === "FA") {
  //   } else {
  //   }
  // }, [stateProduct]);

  const navigate = useNavigate();

  function pdClick() {
    navigate.push("/fa");
  }
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
          width={"400px"}
          height={"400px"}
          boxShadow="20px 20px 60px #d9d9d9,-20px 0 60px #ffffff"
          display={"flex"}
          justifyContent="center"
          transition={"0.5s"}
          className="BoxCard"
          position={"relative"}
        >
          <IconButton
            position={"absolute"}
            top={0}
            right={0}
            zIndex={2}
            backgroundColor={"transparent"}
            icon={<FiX />}
          />
          <Image
            display={"flex"}
            transform="translateY(-80px)"
            filter="drop-shadow(-5px 5px 10px #ccc)"
            className="Image"
            height={"350px"}
            src="/image/robot.png"
            top={"-100px"}
            transition={"0.5s"}
          />
          <Box display={"flex"} position={"absolute"} bottom="0px">
            <div className="buttons">
              <button
                className="btn"
                onClick={() => {
                  window.location.href = "/sanpham/fa";
                }}
              >
                <span></span>
                <p
                  data-start="good luck!"
                  data-text="XEM THÊM"
                  data-title="THIẾT BỊ TỰ ĐỘNG HÓA"
                ></p>
              </button>
            </div>
          </Box>
        </VStack>

        <VStack
          width={"400px"}
          height={"400px"}
          boxShadow="20px 20px 60px #d9d9d9,-20px 0 60px #ffffff"
          display={"flex"}
          justifyContent="center"
          transition={"0.5s"}
          className="BoxCard"
          position={"relative"}
        >
          <Image
            display={"flex"}
            height={"350px"}
            transform="translateY(-80px)"
            filter="drop-shadow(-5px 5px 10px #ccc)"
            className="Image"
            src="/image/ACB.png"
            top={"-100px"}
            transition={"0.5s"}
          />
          <Box display={"flex"} position={"absolute"} bottom="0px">
            <div className="buttons">
              <button
                className="btn"
                onClick={() => {
                  window.location.href = "/sanpham/pd";
                }}
              >
                <span></span>
                <p
                  data-start="good luck!"
                  data-text="XEM THÊM"
                  data-title="THIẾT BỊ PHÂN PHỐI ĐIỆN HẠ THẾ"
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
