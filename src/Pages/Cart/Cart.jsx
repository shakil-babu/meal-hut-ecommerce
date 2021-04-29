import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProductInfoContext } from '../../App';
import './Cart.css';
const Cart = () => {
    const [productInfo, setProductInfo] = useContext(ProductInfoContext);
    let totalPrice = productInfo.reduce((total, cur) => total + cur.product.price * cur.quantity , 0);
    let shipping = totalPrice > 100 ? 15 : totalPrice > 500 ? 10 : 20 ; 
    const tax = 5 ;
    const grandTotal = (totalPrice + shipping + tax ).toFixed(2);


    // for delete
    const deleteHandler = (id) => {
        const filterData = productInfo.filter(item => item.product.id !== id);
        setProductInfo(filterData)
    }
    return (
        <>
            <section className="cart-main-area">
                <div className="container">
                    {
                        productInfo.length > 0 ?(
                            <div className="cart-all-info-flex">
                        <div className="cart-document-object">
                            {
                                productInfo.map((item) => {
                                    return (
                                        <div className="cart-details-info-here">
                                            <div className="cart-img-area">
                                                <img src={item.product.img} alt=""/>
                                            </div>
                                            <div className="title-price-quantity">
                                                <h5>{item.product.title}</h5>
                                                <p>Price: ${item.product.price}</p>
                                                <p>Quantity: {item.quantity}</p>
                                            </div>

                                            <button onClick={() => deleteHandler(item.product.id)} className='delete-btn'>Delete</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="cart-total-info">
                        <h3>Order Summery</h3>
                        <div className="line1"></div>
                        <h5>{productInfo.length > 1 ? 'Items':'Item'} ordered: {productInfo.length}</h5>
                        <p>Product price: ${totalPrice.toFixed(2)} </p>
                        <p>Shipping cost : ${shipping} </p>
                        <p>Tax + VAT : ${tax} </p>
                        <hr/>
                        <h4>Order Total: ${grandTotal} </h4>

                        <Link style={{textDecoration:'none', color:'#fff'}} to='/cart/delivery-details'><button className="place-order">Place Order</button></Link>
                        </div>
                    </div>
                        ):(
                            <div className="no-products">
                                <h1>You have 0 Meal </h1>
                                <h2>Cart is emty!</h2>
                                <Link className='emty' to='/meals'>Fill the cart!</Link>
                            </div>
                        )
                    }
                </div>
            </section>   
        </>
    )
}

export default Cart
