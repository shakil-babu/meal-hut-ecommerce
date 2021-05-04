import React, { useState } from 'react'
import './ConfirmPage.css';
import {FaCheck} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ConfirmPage = ({packet, productInfo, details, loggedInUser}) => {
    let totalPrice = productInfo.reduce((total, cur) => total + cur.product.price * cur.quantity , 0);
    let shipping = totalPrice > 100 ? 15 : totalPrice > 500 ? 10 : 20 ; 
    const tax = 5 ;
    const tp = totalPrice + shipping + tax;
    const grandTotal = (packet ? tp + 5 : tp).toFixed(2);

    const [isConfirm, setConfirm] = useState(false)
    const confirmHandler = () => {
        setConfirm(true)
    }
    return (
        <>
            <section className="confirm-page-area">
                <div className="container">
                    <div className="confirm-page-info">
                        <div className="delivery-title">
                            <div className="d-line"></div>
                            <h5 className='confrim-title'>Confirm your Order</h5>
                            <div className="d-line"></div>
                        </div>

                        <div className="confirm-document-object">
                            <h5>From <b>Bogura XYZ PLaza Meal Hut</b> </h5>
                            <h6>Arriving in 30-40 minute</h6>
                            <p>Your Information:</p>
                            <div className="confirm-info-box">
                                <div className="info-flex"><h4>Name: </h4> <h4>{loggedInUser.name}</h4></div>
                                <div className="info-flex"><h4>Email: </h4> <h4>{loggedInUser.email}</h4></div>
                                <div className="info-flex"><h4>Phone No: </h4> <h4>{details.phone}</h4></div>
                                <div className="info-flex"><h4>Road No: </h4> <h4>{details.road}</h4></div>
                                <div className="info-flex"> <h4>House No: </h4> <h4>{details.house}</h4></div>
                                
                            </div>
                            <div className="confirm-product-flex">
                            {
                                productInfo.map((item) => {
                                    return (
                                        <div className="confirm-details-info-here">
                                            <div className="confirm-img-area">
                                                <img src={item.product.img} alt=""/>
                                            </div>
                                            <div className="confirm-title-price-quantity">
                                                <h5>{item.product.title}</h5>
                                                <p>Price: ${item.product.price}</p>
                                                <p>Quantity: {item.quantity}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>

                        <h5 className='order-info-title'>Order Info:</h5>
                        <div className="confrim-cart-total-info">
                            <h5>{productInfo.length > 1 ? 'Items':'Item'} ordered: {productInfo.length}</h5>
                            <p>Product price: ${totalPrice.toFixed(2)} </p>
                            <p>Shipping cost : ${shipping} </p>
                            <p>Tax + VAT : ${tax} </p>
                            {packet && <p>Special Packet: $5</p>}
                            <hr/>
                            <h4>Order Total: <del>${grandTotal}</del>  <mark>${(Math.floor(grandTotal))}</mark> </h4>
                            </div>

                            {isConfirm ? <button style={{backgroundColor:'gray'}}  className='add-btn'> <FaCheck className='icon' /> Order Confirmed</button>:<button onClick={confirmHandler} className='confrim-order-btn'>Confirm Order</button> }


                            {
                                isConfirm && (
                                    <div className="thank-you">
                                        <h4>Thank you</h4>
                                        <h6>We got your order </h6>
                                        <h6>Check your email.</h6>
                                        <Link to ='/' > <button className="confrim-order-btn">Go to Home</button></Link> 
                                    </div>
                                )
                            }
                            
                        </div>

                       
                    </div>
                </div>
            </section>   
        </>
    )
}

export default ConfirmPage
