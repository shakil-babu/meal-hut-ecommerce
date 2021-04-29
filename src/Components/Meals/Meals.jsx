import React, { useState } from 'react'
import { foodsForBreakfast, foodsForDinner, foodsForLunch } from '../../utilities/foodInfo';
import './Meals.css';
import Meal from './SingleMeal/Meal';
const Meals = () => {
    const [meals, setMeals] = useState({breakfast:false, lunch:true, dinner:false});

    const breakfastHandler = () => {
        setMeals({breakfast:true, lunch:false, dinner:false})
    }

    const lunchHandler = () => {
        setMeals({breakfast:false, lunch:true, dinner:false})
    }

    const dinnerHandler = () => {
        setMeals({breakfast:false, lunch:false, dinner:true})
    }



    return (
        <>
            <div className="meals-main-area">
                <div className="container">
                    <div className="meals-title">
                        <h1>Best Meals For You</h1>
                        <div className="line"></div>
                        <div className="line1"></div>
                    </div>

                <div className="meals-bar">
                    <li className={meals.breakfast && 'active'} onClick={breakfastHandler}>Breakfast</li>
                    <li className={meals.lunch && 'active'} onClick={lunchHandler} >Lunch</li>
                    <li className={meals.dinner && 'active'} onClick={dinnerHandler} >Dinner</li>
                </div>

                    {
                        meals.breakfast ? (
                            <div className="meals-grid-layout">
                                {
                                    foodsForBreakfast.map((item) => <Meal key={item.id} meal={item} />)
                                }
                            </div>
                        ): meals.dinner ? (
                            <div className="meals-grid-layout">
                                {
                                    foodsForLunch.map((item) => <Meal key={item.id} meal={item} />)
                                }
                            </div>
                        ):(
                            <div className="meals-grid-layout">
                                {
                                    foodsForDinner.map(item => <Meal key={item.id} meal={item} />)
                                }
                            </div>
                        )
                    }
                </div>
            </div>   
        </>
    )
}

export default Meals
