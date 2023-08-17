import React, { useState, useEffect } from 'react'
import { BsStarFill } from 'react-icons/bs'
// import { BsEye } from 'react-icons/bs'
// import { GiSelfLove } from 'react-icons/gi'
// import { AiOutlineShoppingCart } from 'react-icons/ai'
import axios from 'axios'
import './Flas.scss'
import { NavLink } from 'react-router-dom'
const FlasDeals = () => {


    const [imgGllary, SetImgGllary] = useState([])
    const fetchapi = () => {

          axios.get('https://api.unsplash.com/search/photos/?photos?page=2&query=tshirt&client_id=x5veEQV3_PogTvllMuRzMvaNf35fsN14nTSWCKcQ2Zk')



            .then((response) => {

                SetImgGllary(response.data.results)
            })
            .catch((err) => {
                console.log(err)
            })


    }


    useEffect(() => {
        fetchapi()
    }, []);

    return (
        <>
            <section className="flasd pt-0 pb-5">
                <div className=" container-xxl ">
                    <div className="main-heading">
                        <h1><img src="img/icon03.png" alt="" />
                            <span>Flash Deals</span></h1>
                    </div>




                    {/* card deals item */}
                    <div className="row ">



                        <div className="col-lg-3 col-xxl-2 col-md-4col-sm-12 rowColumm mb-3">



                            <div className="timeCOunt">
                                <div className="cicle">
                                    <div className="circlItem">
                                        <h4>down to</h4>
                                        <span>$0.99</span>
                                    </div>
                                </div>

                                <div className="timeItem">
                                    <h3>time left</h3>
                                    <div className="item-box d-flex flex-wrap">
                                        <div className="item-list">
                                            <h3>227</h3>
                                            <p>days</p>
                                        </div>
                                        <div className="item-list">
                                            <h3>13</h3>
                                            <p>hours</p>
                                        </div>
                                        <div className="item-list">
                                            <h3>18</h3>
                                            <p>mins</p>
                                        </div>
                                        <div className="item-list">

                                            <h3>28</h3>
                                            <p>sec</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            imgGllary.slice(0, 5).map((cur) => {
                                return (

                                    <div className="col-lg-3 col-xxl-2 
                                     col-md-4 col-sm-6   rowColumm mb-3">
                                        <NavLink className="text-decoration-none" to="/Products">
                                            <div className="card product ">
                                                <img src={cur.urls.small_s3} alt="" className="card-mg-top img-fluid w-100" />
                                                <div className="card-body">
                                                    <div className="card-text">
                                                        <div className="star">
                                                            <span><BsStarFill /></span>
                                                            <span><BsStarFill /></span>
                                                            <span><BsStarFill /></span>
                                                            <span><BsStarFill /></span>
                                                            <span><BsStarFill /></span>

                                                        </div>
                                                        <p>{cur.alt_description.slice(0,30)}..</p>
                                                        <strong>$39.00 <span className="mx-2">$47.00</span></strong>
                                                    </div>
                                                    <div className="car_btn">
                                                        <a className='text-decoration-none' href="/">add to cart</a>
                                                    </div>
                                                </div>
{/* 
                                                <div className="hover_item">
                                                    <div className="icon_product">
                                                        <div className="hover-content ">
                                                            <a  href='/' className='view'>view</a>
                                                            <span><BsEye /></span>

                                                        </div>
                                                        <div className="hover-content ">
                                                            <a href='/' className='whis'>whislist</a>
                                                            <span><GiSelfLove /></span>

                                                        </div>
                                                        <div className="hover-content ">
                                                            <a href='/' className='buy'>buy</a>
                                                            <span><AiOutlineShoppingCart /></span>

                                                        </div>


                                                    </div>

                                                </div> */}
                                            </div>
                                            </NavLink>
                                    </div>
                                 
                    )
                            })
                           }





                </div>




            </div>





        </section >
        </>
    )
}

export default FlasDeals