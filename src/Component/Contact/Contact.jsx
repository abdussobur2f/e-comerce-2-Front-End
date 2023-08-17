import React from 'react'
import '../../styles/Contact.scss'
import HelmetTitle from '../../Layout/Helmet/HelmetTitle'
const Contact = () => {
  return (
    <>
    <HelmetTitle title={"E-commerce Contact Page "}/>
    
      <footer className="footer">
        <div className="container-xxl">
          <div className="main-heading ">
            <h1 className='d-block w-100  text-center'>Call Us Or Visit Place</h1>

          </div>
          <div className="pr">
            <p className='text-center pb-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, quidem.</p>
          </div>


          <div className="row address py-5">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="">
                <h3 className='sub'>Address</h3>

                <p>87 Faitola Road, Fasitola,</p>
                <p>Gobindagonj rajshahi bangladesh</p>
              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-12">
              <div className="">
                <h3 className='sub'>Email</h3>
                <p>mdabdusobur105@gmail.com
                </p>
                <p className=''>mdabdusobur105@gmail.com_support.com</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="">
                <h3 className='sub'>Phone</h3>

                <p>01645726503</p>
                <p>01760434239</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="">
                <h3 className='sub'>Open</h3>

                <p>Monday – Sunday: 8am – 18pm
                </p>
                <p> Forum For Over 1 Hour</p>
              </div>
            </div>
          </div>




          <div className="container-xxl ">
            <form action="">

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14447.83256103976!2d89.37596783002238!3d25.137106019654528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1686405026541!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-lg-6 conatcFrmo_informtion col-md-6 col-sm-12">
                  <div className="main-heading">
                    <h1>get in touch</h1>
                  </div>
                  <div className="row py-3">
                    <div className="form-group col-lg-6 col-md-6 mb-4 mb-xxl-0">
                      <label for="inputEmail4">Name</label>
                      <input type="email" className="form-control" id="inputEmail4" placeholder="Name" />
                    </div>
                    <div className="from-group col-lg-6 col-md-6 ">
                      <label for="inputPassword4">Email</label>
                      <input type="password" className="form-control" id="inputPassword4" placeholder="Email" />
                    </div>
                  </div>
                  <div className="group">
                    <label className='' for="inputAddress">Subject</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Subject" />
                  </div>

                  <div class="group">
                    <label for="exampleFormControlTextarea1"> Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                  </div>

               

                  <button className="my-btn">
                    <a href="/" className='text-decoration-none text-white'>send massage</a>
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Contact
