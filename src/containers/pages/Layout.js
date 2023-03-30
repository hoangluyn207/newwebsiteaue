import React from "react";
import Footer from "../footer/Footer";
import Header from "../hearder/Header";
import { Outlet } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import ContactInfo from "../../components/ContactInfo";

const Layout = () => {
  return (
    <VStack width={"full"} backgroundColor="#fff">
      <ContactInfo zIndex="999" position="fixed" left="64px" top="40%" />
      <Header />
      <Outlet />
      <Footer />
    </VStack>
  );
};

export default Layout;
