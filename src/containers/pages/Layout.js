import React from "react";
import Footer from "../footer/Footer";
import Header from "../hearder/Header";
import { Outlet } from "react-router-dom";
import { VStack } from "@chakra-ui/react";

const Layout = () => {
  return (
    <VStack position={"relative"} width={"full"} backgroundColor="#fff">
      <Header position="absolute" top="0px" />
      <Outlet />
      <Footer />
    </VStack>
  );
};

export default Layout;
