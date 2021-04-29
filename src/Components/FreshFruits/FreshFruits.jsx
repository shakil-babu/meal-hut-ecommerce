import React from 'react'
import { foodsFruits } from '../../utilities/foodInfo'
import Meal from '../Meals/SingleMeal/Meal'

const FreshFruits = () => {
    return (
        <>
        <section className='allmeals-area'>
                <div className="container">
                    <div className="choose-us-title-area">
                        <h1>Fresh Fruits</h1>
                        <div className="line1"></div>
                       
                    </div>

                    <div style={{marginTop:'50px'}} className="meals-grid-layout">
                        {
                            foodsFruits.map((item) => <Meal  key={item.id} meal={item}/>)
                        }
                    </div>
                </div>
            </section>    
        </>
    )
}

export default FreshFruits
