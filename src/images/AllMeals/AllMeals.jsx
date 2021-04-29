import React from 'react'
import Meal from '../../Components/Meals/SingleMeal/Meal';
import { allMeals } from '../../utilities/foodInfo';
import './AllMeals.css';
const AllMeals = () => {
    return (
        <>
            <section className='allmeals-area'>
                <div className="container">
                    <div className="choose-us-title-area">
                        <h1>Our Meals</h1>
                        <div className="line1"></div>
                       
                    </div>

                    <div style={{marginTop:'50px'}} className="meals-grid-layout">
                        {
                            allMeals.map((item) => <Meal  key={item.id} meal={item}/>)
                        }
                    </div>
                </div>
            </section>   
        </>
    )
}

export default AllMeals
