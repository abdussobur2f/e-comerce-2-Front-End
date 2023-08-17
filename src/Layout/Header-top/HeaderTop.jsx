
import './HeaderTop.scss'

import { NavLink } from "react-router-dom";

import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineLogin } from 'react-icons/ai'
import MidleHeader from '../MidleHeader/MidleHeader'
import Navigation from '../Navigation/Navigation'
import react, { useState } from 'react';

// import { click } from '@testing-library/user-event/dist/click';

const HeaderTop = () => {


  const [showTop, SetShowTop] = useState(false)

  const ShowTop = () => {
    if (window.scrollTo > 10) {
      SetShowTop(true)
    }
    else {
      SetShowTop(false)
    }
  }
  window.addEventListener("scroll", ShowTop)
  return (
    <>
      <header className={ShowTop ? "showTop" : ""}>
        <div className="header-top" >
          <div className="container-xxl">
            <div className="row d-flex align-items-center">

              <div className="col-lg-8 col-md-8 col-sm-12 nav_item_top  d-flex align-items-start justify-content-beetween   d-lg-block   navTop">
                <ul className='d-flex align-items-center  justify-content-start m-0 p-0 text-capitalize'>
                  <li>
                    <NavLink to="/shop">shop</NavLink>

                  </li>
                  <li>
                    <NavLink to="/about">about</NavLink>

                  </li>
                  <li>
                    <NavLink to="/blog">blog</NavLink>

                  </li>
                  <li>
                    <NavLink to="/contact">contact</NavLink>

                  </li>



                </ul>



              </div>

              <div className="col-lg-4 col-md-4 col-sm-12   ">
                <ul className="site_from d-flex align-items-center gap-3 m-0 p-0   ">

                  <li>


                    <a href="/">  <img className='   ' src="img/Flag-United-States-of-America.webp" alt="" /> en  <span><IoIosArrowDown /> </span></a>
                    <ul>
                      <li><a href="/">english</a></li>
                      <li><a href="/">bangla</a></li>
                    </ul>

                  </li>


                  <li>
                    <a href="/">usd <span><IoIosArrowDown /></span></a>
                    <ul>
                      <li><a href="/">usd</a></li>
                      <li><a href="/">eur</a></li>
                    </ul>

                  </li>
                  <li> <span className='login'><AiOutlineLogin /></span>    <a href="/" className=''> Login</a></li>
                </ul>



              </div>
            </div>
          </div>
        </div>




        <MidleHeader />

        <Navigation />

      </header>
    </>
  )
}

export default HeaderTop
