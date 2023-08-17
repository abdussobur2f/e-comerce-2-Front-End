import React from 'react'
import './Payment.scss'
 
const Payment = () => {
  return (
    <>
    <section className="payment_section">
      <div className="wrapper_payment">
      <div className="container-xxl">
            <div className="row g-3">
                <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="payment_item">
                      <img src="img/quanlity.png" alt="" />
                      <h3>high-quality goods</h3>
                      <p className='mb-0'>Enjoy top quality items for less</p>
                    </div>
                </div>
                <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="payment_item">
                      <img src="img/live-chat.png" alt="" />
                      <h3>high-quality goods</h3>
                      <p className='mb-0'>Enjoy top quality items for less</p>
                    </div>
                </div>
                <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="payment_item">
                      <img src="img/shipping.png" alt="" />
                      <h3>high-quality goods</h3>
                      <p className='mb-0'>Enjoy top quality items for less</p>
                    </div>
                </div>
                <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="payment_item">
                      <img src="img/secure-payment.png" alt="" />
                      <h3>high-quality goods</h3>
                      <p className='mb-0'>Enjoy top quality items for less</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
        
    </section>
    
    </>
  )
}

export default Payment