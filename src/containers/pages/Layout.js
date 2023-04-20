import React, { useState, useEffect, Suspense } from "react";
import Footer from "../footer/Footer";
import Header from "../hearder/Header";
import { Outlet } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import ContactInfo from "../../components/ContactInfo";
import { Spinner } from "react-bootstrap";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <VStack width={"full"} backgroundColor="#fff">
      {isMobile ? null : (
        <ContactInfo zIndex="999" position="fixed" left="64px" top="40%" />
      )}
      <Header />
      {isLoading ? <Spinner animation="border" /> : <Outlet />}
      <Footer />
    </VStack>
  );
};

export default Layout;
