import React from 'react'
import './Footer.scss'
import { BsFacebook, BsGoogle, BsSearch, BsPinterest ,BsTwitter } from 'react-icons/bs'





const Footer = () => {
    return (
        <>
            <footer className='py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-6 ">
                            <ul className="footer_item">

                                <li className='text-uppercase'>company info</li>
                                <li><a href="/">about us</a></li>
                                <li><a href="/">contact us</a></li>
                                <li><a href="/">blog</a></li>
                                <li><a href="/">Business With Us</a></li>
                                <li><a href="/">Find a Store</a></li>
                            </ul>
                        </div>






                        <div className="col-lg-2 col-md-6 col-6">
                            <ul className="footer_item">
                                <li className='text-uppercase'>LET US HELP YOU</li>
                                <li><a href="/">Orders</a></li>
                                <li><a href="/">Downloads</a></li>
                                <li><a href="/">Addresses</a></li>
                                <li><a href="/">Account details</a></li>
                                <li><a href="/">Lost password</a></li>
                            </ul>
                        </div>






                        <div className="col-lg-2 col-md-6 col-6 ">
                            <ul className="footer_item">
                                <li className='text-uppercase'> QUICK LINKS</li>
                                <li><a href="/">Special Offers</a></li>
                                <li><a href="/">Gift Cards</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Teams of Use</a></li>
                                <li><a href="/">Portfolio</a></li>
                            </ul>
                        </div>






                        <div className="col-lg-2 col-md-6 col-6  ">
                            <ul className="footer_item">
                                <li className='text-uppercase'>    USEFUL LINKS</li>
                                <li><a href="/">Women</a></li>
                                <li><a href="/">Men</a></li>
                                <li><a href="/">Newest Items</a></li>
                                <li><a href="/">Accessories</a></li>
                                <li><a href="/">Shoes</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 pb-4">
                            <h3>SIGN UP FOR NEWSLETTER</h3>
                            <p>Subscribe to the weekly newsletter for all the latest updates
                                & get a 10% off bill offers.</p>
                            <div className="input-group ">
                                <input type="text" className="form-control" placeholder="  Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append  ">
                                    <span className="input-group-text my-btn" id="basic-addon2">
                                        <span className=''> <BsSearch /></span> search</span>
                                </div>
                            </div>

                            <div className="ourFlowers">
                            <span className=''>or follow us : </span>
                                <span><BsTwitter  className='bstwitter'/></span>
                                <span><BsFacebook  className='bsfacebok'/></span>
                                <span ><BsGoogle className='bsgoogle'/></span>
                                <span ><BsPinterest className='bspinterest' /></span>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="privecy py-2">
                    <div className="container-xxl">
                        <p>© Copyright 2023 sobur - All Rights Reserved </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer