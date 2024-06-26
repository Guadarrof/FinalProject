import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductInfo from "../pages/ProductInfo";
import AboutUs from "../pages/AboutUs";
import Upload from "../pages/Upload";
import Products from "../pages/Products";
import Cart from "../components/organisms/Cart";
import Faq from "../pages/Faq"
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'


const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/productInfo/:id" element={<ProductInfo />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default RoutesApp;
