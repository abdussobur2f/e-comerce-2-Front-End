import React, { useEffect, useState } from 'react'
import './Colection.scss'
import { BsArrowRight } from 'react-icons/bs'
import axios from 'axios'

const Colection = () => {


  const [imgGllary, SetImgGllary] = useState([])
  const fetchapi = () => {
    const url = axios.get('https://api.unsplash.com/search/photos/?photos?page=2&query=product&client_id=x5veEQV3_PogTvllMuRzMvaNf35fsN14nTSWCKcQ2Zk')



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
      <section className='collection'>
        <div className="container-xxl">
          <div className="row  ">
            <div className="col-lg-6 col-md-12 bigColection   col-sm-12 ">
              <img className='img-fluid w-100 h-100' src="img/banner1.49520de6a43c6cb132b9.jpg" alt="" />
              <div className="borderBack  ">
                <h2 className=''>new arrivals</h2>
                <p>streetwear</p>
                <p>collection ss-20</p>

                <a href="" className=''>Explore This Collection <span className='ms-2'><BsArrowRight /></span> </a>
              </div>
            </div>




            <div className="col-lg-6 col-md-12   col-sm-12">



              <div className="row  h-100   ">
      {
        imgGllary.slice(0,4).map((elm)=>{
          return(
            <div className="col-lg-6 col-md-6 col-sm-12 small_collection">
            <div className="collectionImg">
              <img className='img-fluid' src={elm.urls.small} alt="" />

            </div>

            <div className="back_content">
              <p className='.lh-lg'>
                {elm.alt_description.slice(0,30)}
               </p>

              <a href="" className=''>Explore Now  <span className='ms-2'><BsArrowRight /></span> </a>
            </div>
          </div>
          )
        })
      }


         

              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Colection