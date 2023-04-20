import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, ReactDOM } from "react-router-dom";
import Layout from "./containers/pages/Layout";
import Homepage from "./containers/pages/Homepage";
import Product from "./containers/pages/Product";
import Solution from "./containers/pages/Solution";
import AboutUs from "./containers/pages/AboutUs";
import Project from "./containers/pages/Project";
import { ChakraProvider } from "@chakra-ui/react";
import ScrollToTop from "./scrollToTop";
import { MobileContextProvider } from "./components/MobileContext";
import FA from "./containers/Products/FA";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <MobileContextProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="/sanpham" element={<Product />} />
                <Route path="/giaiphap" element={<Solution />} />
                <Route path="/duan" element={<Project />} />
                <Route path="/thongtin" element={<AboutUs />} />
                <Route path="/sanpham/fa" element={<FA />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MobileContextProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
