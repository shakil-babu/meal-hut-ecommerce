import React from 'react'
import './Meal.css';
import {HiEye} from 'react-icons/hi';
import { Link } from 'react-router-dom';
const Meal = ({meal}) => {
    return (
        <>
            <section className="single-meal-area">
                <img src={meal.img} alt=""/>
                <h5>{meal.title}</h5>
                <p>{meal.shor_desc}</p>
                <h6>$ {meal.price}</h6>

                <Link to={`/meals/${meal.id}`}><h5 className='for-priview'><HiEye className='icon'/></h5></Link>
            </section>   
        </>
    )
}

export default Meal
