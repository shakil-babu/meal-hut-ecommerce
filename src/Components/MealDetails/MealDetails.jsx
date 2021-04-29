import React, { useContext, useState } from 'react'
import {FaCheck} from 'react-icons/fa';
import { useParams } from 'react-router';
import './MealDetails.css';
import {BiLeftArrowCircle} from 'react-icons/bi';
import {FiShoppingCart} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import { allMeals } from '../../utilities/foodInfo';
import { ProductInfoContext } from '../../App';
const MealDetails = () => {
    const {id} = useParams();
    const findMeal = allMeals.find((meal) => meal.id === id);
    const [Img, setImg] = useState('');
    const [isImg, setIsImg] = useState(true);
    const imgHandler = (link) => {
        setIsImg(false);
        const image = findMeal.images;
        const findImg = image.find(item => item === link);
        setImg(findImg);
    }

    const [cartItem, setCartItem] = useState(1);


    // product details
    const [productInfo, setProductInfo] = useContext(ProductInfoContext)

    const data = {
        product: findMeal,
        quantity:cartItem 
    }
    
    const [success, setSuccess] = useState(false);
    const addCartHandler = () => {
        setProductInfo([...productInfo, data]);
        setSuccess(true);
    }

    

    return (
        <>
            <section className="meal-details-main-area">
                <div className="container">
                    <Link style={{textDecoration:'none', width:'150px'}} to='/meals'><button className='back-btn'><BiLeftArrowCircle className='icon'/>Back</button></Link>
                    
                    <div className="meal-info-grid-layout">
                        <div className="meal-details-info">
                            <h1>{findMeal.title}</h1>
                            <p>{findMeal.desc}</p>

                            <div className="flex-price">
                                <h1>$ {findMeal.price}</h1>

                                <div className="quantity-flex">
                                    <button onClick={() => setCartItem(cartItem -1)} >-</button>
                                    <p>{cartItem}</p>
                                    <button onClick={() => setCartItem(cartItem +1)}>+</button>
                                   
                                </div>
                            </div> 
                           {
                               success ? (
                                <button style={{backgroundColor:'gray'}}  className='add-btn'> <FaCheck className='icon' /> Added</button>
                               ):(
                                <button onClick={addCartHandler} className='add-btn'> <FiShoppingCart className='icon' /> Add</button>
                               )
                           }
                            

                            <div className="img-flex">
                            {
                                findMeal.images.map(item => {
                                    return (
                                        <img onClick={() => imgHandler(item)} src={item} alt=""/>
                                    )
                                })
                            }
                            </div>
                        </div>

                        <div className="meal-img">
                            {
                                isImg?<img src={findMeal.img} alt=""/> : <img src={Img} alt=""/> 
                            }   
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default MealDetails
