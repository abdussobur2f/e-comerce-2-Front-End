
import './Recommend.scss'
import '../FlasDeals/Flas.scss'
import { BsStarFill } from 'react-icons/bs'
import { BsEye } from 'react-icons/bs'
import { GiSelfLove } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Recommend = () => {




    const [imgGllary, SetImgGllary] = useState([])
    const fetchapi = () => {
        axios.get('https://api.unsplash.com/search/photos/?photos?page=20&query=products-20mobile&client_id=x5veEQV3_PogTvllMuRzMvaNf35fsN14nTSWCKcQ2Zk')



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
            <section className="recommend">
                <div className="container-xxl">
                    <div className="main-heading ">
                        <h1 className='d-flex align-items-center justify-content-center'><img src="img/icon04.png" alt="" /> <span>Recommend for you</span></h1>
                    </div>





                    <div className="row ">

                        {
                            imgGllary.map((value) => {
                                return (
                                    <div className="col-lg-2 
                                       col-md-4 col-sm-6   rowColumm mb-3">
                                        <NavLink className="text-decoration-none" to="/Products">
                                            <div className="card product ">
                                                <img src={value.urls.small_s3} alt="" className="card-mg-top img-fluid w-100" />
                                                <div className="card-body">
                                                    <div className="card-text">
                                                        <div className="star">
                                                            <span><BsStarFill /></span>
                                                            <span><BsStarFill /></span>
                                                            <span><BsStarFill /></span>
                                                            <span><BsStarFill /></span>
                                                            <span><BsStarFill /></span>

                                                        </div>
                                                        <p>{value.alt_description.slice(0, 19)}..</p>
                                                        <strong>$39.00 <span className="mx-2">$47.00</span></strong>
                                                    </div>
                                                    <div className="car_btn">
                                                        <a  className='text-decoration-none' href="/">add to cart</a >
                                                    </div>
                                                </div>

                                                {/* <div className="hover_item">
                                                    <div className="icon_product">
                                                        <div className="hover-content ">
                                                            <a href="/" className='view'>view</a >
                                                            <span><BsEye /></span>

                                                        </div>
                                                        <div className="hover-content ">
                                                            <a href="/" className='whis'>whislist</a >
                                                            <span><GiSelfLove /></span>

                                                        </div>
                                                        <div className="hover-content ">
                                                            <a href="/" className='buy'>buy</a >
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

                        {
                            imgGllary.slice(0,2).map((value) => {
                                return (
                                    <div className="col-lg-2 
                                       col-md-4 col-sm-6   rowColumm mb-3">
                                        <NavLink className="text-decoration-none" to="/Products">
                                            <div className="card product ">
                                                <img src={value.urls.small_s3} alt="" className="card-mg-top img-fluid w-100" />
                                                <div className="card-body">
                                                    <div className="card-text">
                                                        <div className="star">
                                                            <span><BsStarFill /></span>
                                                            <span><BsStarFill /></span>
                                                            <span><BsStarFill /></span>
                                                            <span><BsStarFill /></span>
                                                            <span><BsStarFill /></span>

                                                        </div>
                                                        <p>{value.alt_description.slice(0, 19)}..</p>
                                                        <strong>$39.00 <span className="mx-2">$47.00</span></strong>
                                                    </div>
                                                    <div className="car_btn">
                                                        <a  className='text-decoration-none' href="/">add to cart</a >
                                                    </div>
                                                </div>

                                                <div className="hover_item">
                                                    <div className="icon_product">
                                                        <div className="hover-content ">
                                                            <a href='/'  className='view'>view</a >
                                                            <span><BsEye /></span>

                                                        </div>
                                                        <div className="hover-content ">
                                                            <a href='/'  className='whis'>whislist</a >
                                                            <span><GiSelfLove /></span>

                                                        </div>
                                                        <div className="hover-content ">
                                                            <a  href='/' className='buy'>buy</a >
                                                            <span><AiOutlineShoppingCart /></span>

                                                        </div>


                                                    </div>

                                                </div>

                                            </div>
                                        </NavLink>
                                    </div>

                                )
                            })
                        }





                    </div>

                    <div className=" w-100 d-block m-auto text-center mt-3">
                        <button className="text-center my-btn  ">shop now</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Recommend