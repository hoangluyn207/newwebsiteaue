import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./containers/pages/Layout";
import Homepage from "./containers/pages/Homepage";
import Product from "./containers/pages/Product";
import Solution from "./containers/pages/Solution";
import AboutUs from "./containers/pages/AboutUs";
import Project from "./containers/pages/Project";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="/sanpham" element={<Product />} />
              <Route path="/giaiphap" element={<Solution />} />
              <Route path="/duan" element={<Project />} />
              <Route path="/thongtin" element={<AboutUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
