import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import ProductInfo from '../pages/ProductInfo';
import AboutUs from "../pages/AboutUs";
import Upload from "../pages/Upload";
import Contact from "../pages/Contact"


const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productInfo" element={<ProductInfo/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp