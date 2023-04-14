import {
  Box,
  Image,
  Heading,
  Flex,
  Text,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import "./Card.css";

const CardProduct = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="imgBx">
          <img src="./image/robot.png" />
        </div>
        <VStack spacing={"8px"} className="contentBx">
          <h2>Robot</h2>
          <div class="size">
            <h3>Size</h3>
          </div>
          <a href="#">Liên hệ</a>
        </VStack>
      </div>
    </div>
  );
};

export default CardProduct;
