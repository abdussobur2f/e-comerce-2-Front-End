import './NewAri.scss';
import Colection from '../Collletions/Colection';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import axios from 'axios'
import { useEffect, useState } from 'react';
// // import { useState } from 'react';


const NewAri = () => {

  const [imgGllary, SetImgGllary] = useState([])
  const fetchapi = () => {
    const url = axios.get('https://api.unsplash.com/search/photos/?photos?page=2&query=products&client_id=x5veEQV3_PogTvllMuRzMvaNf35fsN14nTSWCKcQ2Zk')



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
  return (
    <>

      <section className="newAri m-auto ">
        <div className="container-xxl ">

          <div className="main-heading ">
            <h1>  <img src="img/icon02.png" alt="" /> <span>new arrivals</span>   </h1>
          </div>




          <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            pagination={{
              clickable: true,
            }}

            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: false,

              },
              480: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}



            
         

          >


         


            {
          imgGllary.map((elm) => {
            return (
             
                <SwiperSlide>
                  <img src={elm.urls.regular}alt="" className="img-fluid w-100" />
                    <p className='text-capitalize'>{elm.alt_description}</p> 
                </SwiperSlide>
            )

          })
        }





            






          </Swiper>


        </div>

        
        <Colection />
      </section>

    </>
  )
}

export default NewAri