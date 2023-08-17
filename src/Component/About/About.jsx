import React from 'react'
import '../../styles/About.scss'
 import HelmetTitle from '../../Layout/Helmet/HelmetTitle'
const About = () => {
  return (
    <>
 <HelmetTitle title={"Sobur E-commerce About Page"}/>
      <section className="about">
        <div className="container-xxl  ">
          <div className="main-heading">
            <h1>about us</h1>
          </div>



          <div className="row py-5 ">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <h3 className="sub-heading fs-6 text-uppercase ">our history</h3>
              <h2 className="main-heading">Creative and renovate fashion trends</h2>
              <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quos tempora, esse mollitia accusantium incidunt adipisci voluptas, amet, fuga dolores corporis voluptatem voluptatibus at aperiam. Aliquam ipsam ut, adipisci tempora voluptate reprehenderit iure corporis obcaecati necessitatibus maiores alias quis dolores corrupti sit unde sapiente nemo beatae nihil, cumque officiis sunt.  </p>

              <div className="row">
                <div className="col-4">
                  <div className="years">
                    <span className='fs-1'>12</span>
                    <p className='text-capitalize'>years experince</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="years">
                    <span className='fs-1'>20k</span>
                    <p className='text-capitalize'>Happy Customers
                      100%
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="years">
                    <span className='fs-1'>100%</span>
                    <p className='text-capitalize'>Clients Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src="https://media.istockphoto.com/id/622768076/photo/women-in-the-shopping-mall.jpg?s=1024x1024&w=is&k=20&c=_KxQsJclj_Jm4Nuv-33dtE1DffRMFu68BGa66gI5t1g=" alt="" className="img-fluid h-100 w-100" />
            </div>

          </div>




          <div className="row py-5">
            <div className="col-lg-6 col-md-6 col-sm-12 order-1">
              <h3 className="sub-heading fs-6 text-uppercase ">Our vision</h3>
              <h2 className="main-heading">We are marketpress</h2>
              <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere nam, vero hic, consectetur, odit magnam eaque sapiente quae perspiciatis nostrum accusantium numquam illo officia dolores minima. Blanditiis placeat harum  </p>

            

              <div className="row">
                <div className="col-12">
                  <ul className=' d-flex flex-column gap-2 fs-6'>
                    <li>Credibly innovate granular internal</li>
                    <li>Grantedly underconstructions reloaded</li>
                    <li>Interactively procrastinate high-payoff</li>
                    <li>Completely synergize resource taxing relationships</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src="https://media.istockphoto.com/id/1269533112/photo/shopping-friends-are-walking-in-the-mall.jpg?s=1024x1024&w=is&k=20&c=a1kBaKEy3c84lkJ2g1RhoDKy5SJtJ1FUWh_8wFqi_Go=" alt="" className="img-fluid h-100 w-100" />
            </div>

          </div>





          {/* team */}

          <h3 className="sub-heading text-uppercase fs-6 pb-0 m-0 py-4 py-xxl-5">angels</h3>
          <div className="main-heading">
            <h1>Meet with our Team</h1>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="card-img-top img-fluid " />
              </div>
              <div className="card-body">
                <div className="card-text text-center py-4">
                  <h3 className='sub-heading text-uppercase fs-6'>
                      founder
                  </h3>
                  <span className='fs-5 fw-lighter-bold text-capitalize'>tonn williamson</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card">
                <img src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="card-img-top img-fluid " />
              </div>
              <div className="card-body">
                <div className="card-text text-center py-4">
                  <h3 className='sub-heading text-uppercase fs-6'>
                      founder
                  </h3>
                  <span className='fs-5 fw-lighter-bold text-capitalize'>tonn williamson</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card">
                <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="card-img-top img-fluid " />
              </div>
              <div className="card-body">
                <div className="card-text text-center py-4">
                  <h3 className='sub-heading text-uppercase fs-6'>
                      founder
                  </h3>
                  <span className='fs-5 fw-lighter-bold text-capitalize'>tonn williamson</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card">
                <img src="https://images.pexels.com/photos/3091097/pexels-photo-3091097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="card-img-top img-fluid " />
              </div>
              <div className="card-body">
                <div className="card-text text-center py-4">
                  <h3 className='sub-heading text-uppercase fs-6'>
                      founder
                  </h3>
                  <span className='fs-5 fw-lighter-bold text-capitalize'>tonn williamson</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </>
  )
}

export default About
