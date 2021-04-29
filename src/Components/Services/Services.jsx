import React from 'react'
import './Services.css';
import s1 from '../../images/Image/delivery.svg';
import s2 from '../../images/Image/payment.svg';
import s3 from '../../images/Image/support.svg';
const Services = () => {
    return (
        <>
            <section className="services-main-area">
                <div className="container">

                    <div className="services-grid-layout">
                        <div className="services-box">
                            <div className="img-box">
                                <img src={s1} alt="img"/>
                            </div>
                            <h4>Free Home Delivery</h4>
                            <p>Provide free home delivery for all product over $100</p>
                        </div>
                        <div className="services-box">
                            <div className="img-box">
                                <img src={s2} alt="img"/>
                            </div>
                            <h4>100% Payment Secure</h4>
                            <p>We ensure quality all times and secure payment with PEV</p>
                        </div>
                        <div className="services-box">
                            <div className="img-box">
                                <img src={s3} alt="img"/>
                            </div>
                            <h4>Online Support</h4>
                            <p>To satisfy our customer we try to give support online</p>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default Services
