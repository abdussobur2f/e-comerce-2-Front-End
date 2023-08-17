import React from 'react'
 import Router from '../Routers/Router'
 import HeaderTop from './Header-top/HeaderTop'
 import Footer from './Footer/Footer'
 import Payment from './Payment/Payment'
import HelmetTitle from './Helmet/HelmetTitle'
 
const Layout = () => {
  return (
    <>
    <HelmetTitle title={"Sobur E-commerce Home Page"}/>
    <HeaderTop/>
    <main>
      <Router/>
    </main> 
    <Payment/>
    <Footer/>
    </>
  )
}

export default Layout