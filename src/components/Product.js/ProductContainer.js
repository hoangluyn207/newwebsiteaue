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
import { FiX } from "react-icons/fi";
import "./ProductContainer";

const ProductContainer = () => {
  return (
    <Box
      className="ProductContainer"
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
          alignContent={"space-between"}
        >
          <Box
            width={"full"}
            height={"250px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image width={"full"} src="/image/Product/fa/fa.png" />
          </Box>
          <Box display={"flex"}>
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
        >
          <Box
            width={"full"}
            height={"250px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src="/image/Product/phanphoidien/thietbiphanphoidien.png"
              width={"full"}
            />
          </Box>

          <Box>
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
