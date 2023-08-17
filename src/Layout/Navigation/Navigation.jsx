import React, { useState } from 'react'
import './Navigation.scss'

import { IoIosArrowDown } from 'react-icons/io'

const Navigation = () => {
    
 
 
  const [sticky, SetSticky] = useState(false)

  const shownav = ()=>{
    if(window.scrollY > 100){
      SetSticky(true)
    }
    else{
      SetSticky(false)
    }
  }
  
  window.addEventListener("scroll",shownav)

    return (
        <>
            <nav className={sticky ? "activeShow" : "position-relative "}>
                <div className="container-xxl">
                    <div className="row  nav-list align-items-center justify-content-center">
                        <div className="col-lg-9  ">
                            <ul>
                                <li className='weekly__trend nav__item'>
                                    <a href="/">Weekly Trend   <span><IoIosArrowDown /></span></a>


                                    <div className="hover-wrraper position-absolute   ">
                               <div className="container-xxl">
                               <div className="row">
                                            <div className="col-lg-5 col-md-6 col-sm-12 nav__item_hover">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <ul className='p-0 m-0'>
                                                            <li>  <h4 className='heading'>New Arrivals</h4></li>
                                                            <li><a href="/">Men New</a></li>
                                                            <li><a href="/">Women New</a></li>
                                                            <li><a href="/">Baby New</a></li>
                                                            <li><a href="/">Shoes Ne</a></li>
                                                            <li><a href="/">Accessories & Beauty</a></li>
                                                            <li><a href="/">Jewelry & Watch</a></li>
                                                            <li><a href="/">Kid & Mom New</a></li>
                                                            <li><a href="/">New Bags From $3.99</a></li>
                                                            <li><a href="/">New Shoes 75% Of</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <ul>
                                                            <li> <h4 className='heading'> ewelry & Watch</h4> </li>
                                                            <li><a href="/">Couple Watches</a></li>
                                                            <li><a href="/">Pocket Watches</a></li>
                                                            <li><a href="/">Smart Watches</a></li>
                                                        </ul>

                                                        <ul>
                                                            <li><h4 className='heading'>Bottoms</h4></li>



                                                            <li><a href="/">  Pants & Capris</a></li>
                                                            <li><a href="/">Sneakers & Athletic</a></li>
                                                            <li><a href="/"> Baby Sets</a></li>
                                                            <li><a href="/">Jumpsults & Rompers</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <ul>
                                                            <li><h4 className='heading'>  Women’s Jewelry</h4></li>
                                                            <li><a href="/">Necklaces</a></li>
                                                            <li><a href="/">Bracelets</a></li>
                                                            <li><a href="/">Earrings</a></li>
                                                            <li><a href="/">Rings</a></li>
                                                            <li><a href="/">Jewelry</a></li>
                                                            <li><a href="/">Cute Bracelets</a></li>
                                                            <li><a href="/">Xiomi Mi Band</a></li>
                                                            <li><a href="/">New Arrival For $9.99</a></li>
                                                            <li><a href="/">Keychain & Decoration</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>











                                            <div className="col-lg-7 col-md-6 col-sm-12">
                                                <div className="row">
                                                    <div className="col-lg-7 futers__category">
                                                        <div className="row  ">
                                                            <h4 className="heading">Feature By Category</h4>
                                                            <div className="col-lg-4 col-md-6 col-sm-12 futers__category-1">
                                                                <div class="card"  >
                                                                    <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/16627028/pexels-photo-16627028/free-photo-of-a-cup-of-coffee-on-a-table-in-a-spring-garden-coffee-with-a-milk-jug-and-a-branch-of-a-flowering-tree-spring-mood-spring-still-life-composition.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
                                                                    " alt="Card  cap" />
                                                                    <div className="card-body">
                                                                        <p className="card-text">Some quile   .</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                                <div class="card"  >
                                                                    <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600
                                                                    " alt="Card  cap" />
                                                                    <div className="card-body">
                                                                        <p className="card-text">Some quick    .</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                                <div class="card"  >
                                                                    <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600
                                                                    " alt="Card  cap" />
                                                                    <div className="card-body ">
                                                                        <p className="card-text">Some quick   .</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                                <div class="card"  >
                                                                    <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600
                                                                    " alt="Card  cap" />
                                                                    <div className="card-body">
                                                                        <p className="card-text">Some quick   .</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                       
                                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                                <div class="card"  >
                                                                    <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/295053/pexels-photo-295053.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load
                                                                    " alt="Card imae cap" />
                                                                    <div className="card-body">
                                                                        <p className="card-text">Some quick   .</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                       
                                                            <div className="col-lg-4 col-md-6 col-sm-12">
                                                                <div class="card"  >
                                                                    <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/4383928/pexels-photo-4383928.jpeg?auto=compress&cs=tinysrgb&w=600
                                                                    " alt="Card  cap" />
                                                                    <div className="card-body">
                                                                        <p className="card-text">Some quick   .</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                       




                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                
                                                              <div className="future_second mt-4">
                                                              <img className=" img-fluid" src="https://images.pexels.com/photos/7290698/pexels-photo-7290698.jpeg?auto=compress&cs=tinysrgb&w=600
                                                                    " alt="  cap" />
                                                                  
                                                                        <p className="text-center">Some quick   .</p>
                                                              </div>
                                                             
                                               
 
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                               </div>

                                    </div>

                                </li>
                                <li className='nav__item'>
                                    <a href="/">men </a>
                                </li>
                                <li  className='nav__item'>
                                    <a href="/">women</a>
                                </li >
                                <li  className='nav__item'>
                                    <a href="/">shoes </a>
                                </li>
                                <li  className='nav__item'>
                                    <a href="/">bag </a>
                                </li>
                                <li  className='nav__item'>
                                    <a href="/">home & garden </a>
                                </li>

                                <li  className='nav__item'>
                                    <a href="/">jewelary & watch </a>
                                </li>

                                <li  className='nav__item'>
                                    <a href="/">
                                        Kids & Mom</a>
                                </li>


                            </ul>
                        </div>
                        <div className="col-lg-3 ms-auto fs-6 price ">
                            <span>Freeshiping over $59.00</span>
                        </div>
                    </div>


                </div>


            </nav>
        </>
    )
}

export default Navigation
