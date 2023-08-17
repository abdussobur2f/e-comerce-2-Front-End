import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
// import ReactDOM from "react-dom/client";
 
import About from '../Component/About/About';
import Blogs from '../Component/Blogs/Blogs';
// import Layout from '../Layout/Layout';
import Sop from '../Layout/Sop';
import Contact from '../Component/Contact/Contact';
import Products from '../Component/Recommend/Products/Products';
//  import Description from '../Component/Products/Description/Description';
const Router = () => {
  return (
    <>




      <Routes>
        <Route path="/" element={<Navigate to='shop' />}/>
        <Route path="shop" element={<Sop />}/>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path='products' element={<Products/>}/>
        {/* <Route path='desc' element={<Description/>}/> */}


         
      </Routes>


    </>
  )
}

export default Router