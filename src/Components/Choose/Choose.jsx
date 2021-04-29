import React from 'react';
import './Choose.css';
import one from '../../images/Image/one.png';
import two from '../../images/Image/two.png';
import three from '../../images/Image/three.png';
import {RiEBike2Fill, RiHome3Line} from 'react-icons/ri';
const Choose = () => {
    return (
        <>
            <section className="chosse-us-main-area">
                <div className="container">
                    <div className="choose-us-title-area">
                        <h1>Why You Choose Us</h1>
                        <div className="line1"></div>
                        <p>Barton walted twenty always repair in within we do. An dellghteed offernding curiosity my is dashwoods at. Boy Properroys increasing surrounded.</p>
                    </div>


                    <div className="choose-us-info-grid-layout">
                        <div className="main-info-area">
                            <img src={one} alt=""/>

                            <div className="deaitls-box">
                                <img src="" alt=""/>
                                <div className="box">
                                    <h1>Fast Delivery</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint possimus eius temporibus deleniti iure, dolore fuga atque inventore est cumque expedita corporis tempore.</p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="main-info-area">
                            <img src={two} alt=""/>

                            <div className="deaitls-box">
                                <img src="" alt=""/>
                                <div className="box">
                                    <h1>Good Auto Responder</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint possimus eius temporibus deleniti iure, dolore fuga atque inventore est cumque expedita corporis tempore.</p>
                                    
                                </div>
                            </div>
                        </div>


                        <div className="main-info-area">
                            <img src={three} alt=""/>

                            <div className="deaitls-box">
                                <img src="" alt=""/>
                                <div className="box">
                                    <h1>Home Delivery</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint possimus eius temporibus deleniti iure, dolore fuga atque inventore est cumque expedita corporis tempore.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default Choose
