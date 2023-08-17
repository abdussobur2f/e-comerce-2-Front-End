import React from 'react'
import './HotDelas.scss'

import { BsEye } from 'react-icons/bs'
import { BsStarFill } from 'react-icons/bs'
import { DiGitCompare } from 'react-icons/di'
import { GiSelfLove } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import axios from 'axios'
const HotDeals = () => {
       
  const [imgGllary, SetImgGllary] = useState([])
  const fetchapi = () => {
    const url = axios.get('https://api.unsplash.com/search/photos/?photos?page=20&query=product&client_id=x5veEQV3_PogTvllMuRzMvaNf35fsN14nTSWCKcQ2Zk')



      .then((response) => {
         
        SetImgGllary(response.data.results)
      })
      .catch((err)=>{
        console.log(err)
      })


  }


  useEffect(() => {
    fetchapi()
  }, []);

  // 01885226069 jakirul number

  return (
    <>
      <section className='hot-deals'>
        <div className="container-xxl">
          <div className="main-heading ">
            <h1 className='d-flex align-items-center justify-content-center'><img src="img/icon04.png" alt="" /> <span>what's hot</span></h1>
          </div>


          {/* /* product strat */}

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 px-2      ">
              <div className="newProducsItem px-3 bg-white h-100 ">

                <div className="row  new-item">
                  <div className="newProductHeading py-3">
                    <h3 className='sub'>new products</h3>
                  </div>
          
                  {
                    imgGllary.slice(0,2).map((elm)=>{
                      return(
                        <div className="col-6">
                       <div className="card product ">
                                    <img src={elm.urls.small_s3} alt="" className="card-mg-top img-fluid w-100" />
                                    <div className="card-body">
                                        <div className="card-text">
                                            <div className="star">
                                                <span><BsStarFill /></span>
                                                <span><BsStarFill /></span>
                                                <span><BsStarFill /></span>
                                                <span><BsStarFill /></span>
                                                <span><BsStarFill /></span>
    
                                            </div>
                                            <p>{elm.alt_description.slice(0,18)}..</p>
                                            <strong>$39.00 <span className="mx-2">$47.00</span></strong>
                                        </div>
                                        <div className="car_btn">
                                            <a className='text-decoration-none' href="">add to cart</a>
                                        </div>
                                    </div>
    
                                    {/* <div className="hover_item">
                                        <div className="icon_product">
                                            <div className="hover-content ">
                                                <a className='view'>view</a>
                                                <span><BsEye /></span>

                                                </div>
                                            <div className="hover-content ">
                                                <a className='whis'>whislist</a>
                                                <span><GiSelfLove /></span>

                                                </div>
                                            <div className="hover-content ">
                                                <a className='buy'>buy</a>
                                                <span><AiOutlineShoppingCart /></span>

                                                </div>
    
    
                                        </div>
    
                                    </div> */}
                                    </div>
                      </div>
                      )
                    })
                  }
                </div>

              </div>

            </div>


            <div className="col-lg-4 col-md-6 col-sm-12       position-relative  px-2   mb-3 newProductCategory">
              <div className=" px-3 bg-white h-100 ">
              <div className="newProductHeading py-3">
                    <h3 className='sub'>hot products</h3>
                  </div>
                 
                <div className="row   ">
                 
                  
                  {
                    imgGllary.slice(3,9).map((stil)=>{
                      return(
                       
                   
                     <div className="col-lg-4 col-md-4 col-sm-6  px-0  hot_products     ">
                    <div className="category  bg-info">
                      <img className='img-fluid ' src={stil.urls.small} alt="" />
                    </div>
                  </div>
             
                      )
                    })
                  }

  
               

                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 col-sm-12 mb-3 px-2 overflow-hidden position-relative newProducsItem overflow-hidden">

              <div className="copun_center px-3 bg-white h-100  ">

                <div className="newProductHeading py-3">
                  <h3 className='sub'>new products</h3>
                </div>

                <div className="row">


                  {
                    imgGllary.slice(3,5).map((elm)=>{
                      return(
                        <div className="col-12 px-4  ">

                        <div className="row box-shadow-4  bg-light  py-3   ">
                          <div className="col-4 img_category">
                              <img src={elm.urls.small_s3} alt="" className="img-fluid h-100  " />
                          </div>
                          <div className="col-8">
                            <div className="icon-copun">
                              <span><BsStarFill /></span>
                              <span><BsStarFill /></span>
                              <span><BsStarFill /></span>
                              <span><BsStarFill /></span>
                              <span><BsStarFill /></span>
                            </div>
                            <p className='text-toCapitalize()'>{elm.alt_description}</p>
                            <strong className='d-block mb-2'>$200.00</strong>
    
    
                            <div className="copun-last-icon    ">
                              <button className='bg-transparent text-capitalize  '>add to card</button>
    
                              {/* <div className="icon-i">
                                <span><DiGitCompare /></span>
                                <span><GiSelfLove /></span>
                                <span><AiOutlineShoppingCart /></span>
                              </div> */}
    
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    })
                  }
                 
                  {/* <div className="col-12 px-4   ">


                    <div className="row z-index-5 bg-light  py-3  ">

                      <div className="col-4 img_category ">
                        <img src="img/jaket-4.avif" alt="" className="img-fluid  " />
                      </div>
                      <div className="col-8 ">
                        <div className="icon-copun">
                          <span><BsStarFill /></span>
                          <span><BsStarFill /></span>
                          <span><BsStarFill /></span>
                          <span><BsStarFill /></span>
                          <span><BsStarFill /></span>
                        </div>
                        <p className=''>Lorem ipsum dolor sit am , veritatis!</p>
                        <strong className='d-block mb-2'>$200.00</strong>

                        <div className="copun-last-icon    ">
                          <button className='bg-transparent text-capitalize  '>add to card</button>

                          <div className="icon-i">
                            <span><DiGitCompare /></span>
                            <span><GiSelfLove /></span>
                            <span><AiOutlineShoppingCart /></span>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

 */}

                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

    </>
  )
}

export default HotDeals