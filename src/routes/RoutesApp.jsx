import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductInfo from "../components/layout/ProductInfo";
import AboutUs from "../pages/AboutUs";
import Upload from "../pages/Upload";
import Contact from "../components/layout/Contact";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Questions from "../components/layout/Questions"



const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="productInfo/:id" element={<ProductInfo />} />
        <Route path="/products" element={<Products />}>
          <Route path="productInfo/:id" element={<ProductInfo />} />
        </Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq">
          <Route path="returns" element={<Contact/>}/>
          <Route path="questions" element={<Questions/>}/>
          <Route path="jobs" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
