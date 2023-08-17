import React, { useState } from 'react'
import './MidleHeader.scss'
import { VscHeart, VscSync } from 'react-icons/vsc';
import { AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaWindowClose } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'

const MidleHeader = () => {


  const [active, SetAactive] = useState("sidebar")


  const show = () => {
    SetAactive("showSite")
  }
  const hide = () => {
    SetAactive("hide")
  }

  const [sticky, SetSticky] = useState(false)

  const shownav = () => {
    if (window.scrollY > 100) {
      SetSticky(true)
    }
    else {
      SetSticky(false)
    }
  }

  window.addEventListener("scroll", shownav)

  return (
    <>
      <div className={sticky ? "navaigation py-3  w-100 showNav" : "navaigation pb-lg-0 pb-2 pt-lg-3 pt-xxl-3 pt-2"}>
        <div className="container-xxl container-fluid position-relative  ">
          <div className="row d-flex align-items-center ">
            <div className="col-lg-3   col-sm-4">
              <div className="logo heading">
                <h1>Sobur|<span className='text-danger'>Shop</span></h1>

              </div>

            </div>
            <div className="col-lg-5 col-lg-4 col-sm-12 order-2">

              <div className="input-group ">
                <input type="text" className="form-control" placeholder="  Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <span className="input-group-text my-btn" id="basic-addon2">
                    <span className=''> <BsSearch /></span> search</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-lg-4 col-sm-4 ms-md-auto     ms-sm-auto rect right order-1 order-lg-2    ">
              <div className="love">
                <span className=''><VscSync /> <a  href='/'>0</a></span>
                <h2  >compare</h2>
              </div>
              <div className="love">
                <span className=''><VscHeart /> <a  href='/'>1</a></span>
                <h2>whislist</h2>
              </div>
              <div className="love">
                <span className=''><AiOutlineShoppingCart /><a  href='/'>0</a></span>
                <h2 className=' '>$59.00</h2>
              </div>
              <div className="menu d-lg-none d-md-block d-sm-block  ">
                <span onClick={show}><GiHamburgerMenu /></span>
              </div>

            </div>

          </div>

        </div>


        {/* side bar */}
        <div className={active} id='side'>

          <div className="close">
            <span onClick={hide}><FaWindowClose /></span>
          </div>
          <div className="nav-logo heading">
            <h1> sobur | <span>shop</span></h1>
          </div>
          <ul className='mb-3'>
            <li>
              <a  href='/'>Weekly Trend </a>
            </li>
            <li>
              <a  href='/'>men </a>
            </li>
            <li>
              <a  href='/'>women</a>
            </li>
            <li>
              <a  href='/'>shoes </a>
            </li>
            <li>
              <a  href='/'>bag </a>
            </li>
            <li>
              <a  href='/'>home & garden </a>
            </li>
            <li>
              <a  href='/'>jewelary & watch </a>
            </li>
            <li>
              <a  href='/'>kids & mom </a>
            </li>

          </ul>


          <div className="policy   ">
            {/* <div className=" ">
              <span><BsCarFrontFill /></span>
              <span className=' ms-3'>Fre Delivery</span>
            </div>

            <div className=" mt-2 mb-2">
              <span><GiWorld /></span>
              <span className=' ms-2'> Returns Policy</span>
            </div> */}

            <div className="pric">
              <span>Freeshiping over $59.00</span>
            </div>
            <div className="login">
              <h5> <span className='login'><AiOutlineLogin /></span>    <a  href='/' className='text-decoration-none
     text-dark'> Login</a></h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MidleHeader

