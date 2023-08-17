import React, { useState } from 'react'
import { BsStar, BsTwitter, BsFacebook, BsGoogle, BsPinterest, BsInstagram, BsYoutube } from 'react-icons/bs'
import { VscHeart } from 'react-icons/vsc'
// import { BiPlus, BiMinus, } from 'react-icons/bi'
// import { AiFillStar } from 'react-icons/ai'

// import { NavLink } from 'react-router-dom'
import './Products.scss'


const Products = () => {
    const [tab, SetTab] = useState("desc")



    const handleToogle = (toogleItem) => {
        SetTab(toogleItem)
    
      }



    return (
        <>
           <section className="products mt-3 flex-column m-auto p-0 p-lg-2 p-md-1">
          <div className="container-xxl   "  >
            <div className="product_head_line ">

              <div className="title ">
                <h4>Details</h4>
              </div>
              
            </div>

            <div className="row product_main_wrraper">
              <div className="col-lg-6 col-md-12 mb-2">
                <div className="row px-0 h-100 filter_item">

                  <div className="col-12 ">
                    <div className="imges_zoom h-100"  >
                 <img className='img-fluid' src="https://th.bing.com/th/id/R.7b54e87f9720a96a581a911855cc885b?rik=h210O9oTBBXW4A&riu=http%3a%2f%2fwww.ukas.co.uk%2fwp-content%2fuploads%2f2015%2f06%2fProducts.jpg&ehk=YP3dWBn6j7rptdUjf7ULNf9JRLftWhccCEISE3V1uS0%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* second colum */}
              <div className="col-lg-6 col-md-12 Products__details">

                <div className="products_head ">
                  <h5 className="pr">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, exercitationem.</h5>

                  <p className="price pr mb-0">$56</p>

                  <h2 className='pr'>Point : <span>3.556</span></h2>
                </div>


                <div className="cout_product  ">
                  <div className="incrment_btn d-flex align-productss-center justify-content-between">
                    <span className="mt-0 "> + </span>
                    <span className='mb-0'>8</span>
                    <span className="m-0 mines"> - </span>
                  </div>

                  <button className="my-btn pt-2  pb-1 pb-lg-2 pb-md-2 pb-xxl-2  px-3 px-md-3 px-lg-4 text-capitalize">add to cart</button>
                </div>


                <div className="wis_and_compare mt-4 d-flex gap-4">
                  <div className="whis_list ">
                    <h4 className='sub-heading'><a href="/"><VscHeart className='fs-3 text-black me-1' /></a>WhisList</h4>
                  </div>

                </div>


                <div className="description pt-2 my-2">

                  <p className='pr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic adipisci distinctio quisquam reiciendis accusamus nam natus eligendi rem blanditiis in?</p>
                </div>


                {/* ioon
                                                     products */}


                <div className="ourFlowers d-flex gap-3 align-items-center">
                  <div>
                    <span className='fw-bold follow'> follow Us: </span>

                  </div>
                  <div className="icon d-flex gap-2">
                    <span><BsTwitter className='bstwitter' /></span>
                    <span><BsFacebook className='bsfacebok' /></span>
                    <span ><BsGoogle className='bsgoogle' /></span>
                    <span ><BsPinterest className='bspinterest' /></span>

                  </div>
                </div>
              </div>
            </div>


            <div className="description__container p-0 p-lg-2 p-md-2 p-xxl-2 w-100 mt-3">



              <div className="filter_product_link      ">
                <div className="row">
                  <div className="col-12">
                    <div className="fillter_products d-flex flex-wrap   align-productss-start   justify-content-between justify-content-lg-start gap-lg-5 gap-md-4  fs-4  py-1">
                      <span className='text-decoration-none ' onClick={() => handleToogle("desc")}>DESCRIPTION </span>

                      <span className=' text-decoration-none' onClick={() => handleToogle("review")} >REVIEWS (1) </span>

                      <span className=' text-decoration-none order-md-0 order-lg-0 order-3 order-lg-0 ' onClick={() => handleToogle("share")}>SHARE(2)</span>




                    </div>
                  </div>
                </div>
              </div>

              <div className="row filter_products_product px-0 p-lg-2 p-md-2 p-xxl-2 " >
                <div className="col-12">


                  {
                    tab === "desc" && <div className="desc">
                      <p className='pr'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit maiores, adipisci quam expedita dolorum cum! Dolor voluptate et architecto dolore? Molestias a ullam nostrum autem sapiente impedit optio ipsam deserunt.</p>

                      <p className="mt-3 mb-2 sub ">It features deep integration with WooCommerce core plus several of the most popular extensions:</p>

                      <ul className='pr'>
                        <li >Visual Composer</li>
                        <li>Slider Revolution</li>
                        <li> YITH WooCompare</li>
                        <li>YITH WooCommerce Wishlist</li>
                      </ul>

                      <div className="">
                        <h5 className='sub-heading fw-bold sub'>Trial & Dummy Data
                        </h5>
                      </div>

                      <p className='my-2 pr'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut pariatur in hic nisi, corrupti cupiditate excepturi ab commodi quas explicabo!</p>
                    </div>
                  }
                  {/* review section----------------------------------------------//////////////// */}

                  {
                    tab === "review" && <div className="review">
                      <p className='my-2 sub'>There are no reviews yet.</p>
                      <p className="my-3 pr">Be the first to review “Run Spelt Backwards Is Nur Shirt iness Casual Wool Trench Coats”
                        Your email address will not be published. Required fields are marked *</p>


                      {/*  star rating  */}
                      <div className="rating">
                        <h3 className='text-capitalize '>your rating</h3>
                        <div className="star_rating mb-3 d-flex flex-wrap gap-3 w-100 align-productss-center ">
                          <ul className="rating_1 d-flex align-content-center justify-content-between gap-1 m-0">
                            <li><BsStar /></li>

                          </ul>
                          <ul className="rating_2 d-flex align-content-center justify-content-between gap-1 m-0" >
                            <li><BsStar /></li>
                            <li><BsStar /></li>

                          </ul>
                          <ul className="rating_3 d-flex align-content-center justify-content-between gap-1 m-0">
                            <li><BsStar /></li>
                            <li><BsStar /></li>
                            <li><BsStar /></li>

                          </ul>
                          <ul className="rating_4 d-flex align-content-center justify-content-between gap-1 m-0">
                            <li><BsStar /></li>
                            <li><BsStar /></li>
                            <li><BsStar /></li>

                          </ul>
                          <ul className="rating_5 d-flex align-content-center justify-content-between gap-1 m-0">
                            <li><BsStar /></li>
                            <li><BsStar /></li>
                            <li><BsStar /></li>
                            <li><BsStar /></li>
                            <li><BsStar /></li>

                          </ul>
                        </div>

                      </div>







                      <div className="review_box">
                        <div className="group">
                          <label for="exampleFormControlTextarea1"> Description</label>
                          <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" placeholder='Review box' rows="3"></textarea>
                        </div>

                        <button className="my-btn-black px-4 my-2 d-inline-block">SUBMIT</button>
                      </div>
                    </div>
                  }
                  {/* share option-------------------------------------- */}



                  {
                    tab === "share" && <div className="share_review">
                      <ul className='d-flex align-items-center gap-3 py-2 px-0 m-0'>
                        <li><span><BsFacebook className='share-icon' /></span></li>
                        <li><span><BsTwitter className='share-icon' /></span></li>
                        <li><span><BsInstagram className='share-icon' /></span></li>
                        <li><span><BsPinterest className='share-icon' /></span></li>
                        <li><span><BsYoutube className='share-icon' /></span></li>
                      </ul>
                    </div>


                  }








                </div>
              </div>


              {/* public or client review -------------------------------------*/}





              {/* publick review end -------------------------------- */}
            </div>


        
          {/* contsiner xx-l end  ----------------------------*/}
          {/* <div className="public_review w-100">
            <h4 className="sub-heading mb-2">Ratings & Reviews of Tresemme Shampoo  </h4>
            <div className="row"> */}
              {/* left total rating  */}
              {/* <div className="col-1g-5 col-md-5 col-12">
                <div className="total_product_rating">
                  <div className="tolal_review">
                    <h2 className='amount'>4.8 <span className='fw-2'>/5</span></h2>
                    <span><BsStarFill className='text-danger' /></span>
                    <span><BsStarFill className='text-danger' /></span>
                    <span><BsStarFill className='text-danger' /></span>
                    <span><BsStarFill className='text-danger' /></span>
                    <span><BsStarFill className='text-danger' /></span>

                    <p>20 rating</p>
                  </div>

                </div>
              </div> */}

              {/* right review ----------------------------------------*/}
              {/* <div className="col-1g-7 col-xxl-6 col-md-7 col-12   pt-3 pt-lg-0 pt-md-0 pt-xx-0 ">
                <div className="rating_count_progress  ">
                  <div className="row w-100 align-items-center">


                    <div className="five col-xxl-7 col-5">
                      <span><AiFillStar /></span>
                      <span><AiFillStar /></span>
                      <span><AiFillStar /></span>
                      <span><AiFillStar /></span>
                      <span><AiFillStar /></span>

                    </div>
                    <div className="col-7 col-xxl-8">
                      <div className="progress_bar">

                        <div></div>
                      </div>
                    </div>

                    <div className="five col-xxl-7 col-5">
                      <span><AiFillStar /></span>
                      <span><AiFillStar /></span>
                      <span><AiFillStar /></span>
                      <span><AiFillStar /></span>

                    </div>
                    <div className="col-7 col-xxl-8">
                      <div className="progress_bar">

                        <div></div>
                      </div>
                    </div>

                    <div className="five col-xxl-7 col-5">
                      <span><AiFillStar /></span>
                      <span><AiFillStar /></span>
                      <span><AiFillStar /></span>
          

                    </div>
                    <div className="col-7 col-xxl-8">
                      <div className="progress_bar">

                        <div></div>
                      </div>
                    </div>

                    <div className="five col-xxl-7 col-5">
                      <span><AiFillStar /></span>
                      <span><AiFillStar /></span>
                      <span><AiFillStar /></span>
 

                    </div>
                    <div className="col-7 col-xxl-8">
                      <div className="progress_bar">

                        <div></div>
                      </div>
                    </div>

                    <div className="five col-xxl-7 col-5">
                      <span><AiFillStar /></span>
      

                    </div>
                    <div className="col-7 col-xxl-8">
                      <div className="progress_bar">

                        <div></div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>



            </div> */}


{/* 
            <div className="review_item  py-3">
              <h3 className='sub-heading mb-3 pb-2 w-100 d-block'>Product Review</h3>

              <div className="client_review mb-3">

                <div className="row  g-2">
                  <div className="col-lg-1  col-2">
                    <div className="profile_client">
                      <img src="https://th.bing.com/th/id/R.7b54e87f9720a96a581a911855cc885b?rik=h210O9oTBBXW4A&riu=http%3a%2f%2fwww.ukas.co.uk%2fwp-content%2fuploads%2f2015%2f06%2fProducts.jpg&ehk=YP3dWBn6j7rptdUjf7ULNf9JRLftWhccCEISE3V1uS0%3d&risl=&pid=ImgRaw&r=0" alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-lg-11 col-10 px-0">
                    <div className="client_review_desc">
                      <div className="desc">
                        <h4 className="sub-heading fw-bold">Abdus Sobur</h4>
                        <p className='normal-font'>consectetur adipisicing elit. Fuga libero iste natus delectus iusto laborum adipisci temporibus eius similique et!</p>
                      </div>
                      <div className="rating d-flex flex-wrap justify-content-between align-items-center">
                        <div className="rating_item d-flex align-items center gap-2">
                          <span><BsStarFill className='text-danger' /></span>
                          <span><BsStarFill className='text-danger' /></span>
                          <span><BsStarFill className='text-danger' /></span>
                          <span><BsStar /></span>
                          <span><BsStar /></span>
                        </div>
                        <div className="date_com">
                          <p className="mb-0 normal-font">pulished 4 weeaks ago</p>
                        </div>
                      </div>

                      <div className="like_review d-flex mt- gap-3">
                        <p><BiLike /> helpfull</p>
                        <p><BiDislike /> Not Helpfull</p>
                      </div>


                    </div>
                  </div>



                </div>
              </div>



            </div> */}
          </div>


        </section>
        </>
    )
}

export default Products
