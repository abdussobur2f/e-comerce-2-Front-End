import React, { Component } from 'react'
import Slider from "react-slick";
import './Hero.scss'
// export default class Hero extends Component {
//   render() {

//     
//     return (
//         <div>
//         <h2> Single Item</h2>
       
//       </div>
//     )
//   }
// }

const Hero = () => {
  const settings = {
        dots: true,
        fade:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      };
  return (
    <div className=" hero">
 
       <Slider {...settings}>
          <div>
            <img src="img/slider.jpg" alt="" />
          </div>
          <div>
       <img src="img/slier2.jpg" alt="" />
          </div>
  
 
        </Slider>
   
    </div>
  )
}

export default Hero
