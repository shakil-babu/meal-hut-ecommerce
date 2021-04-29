import React from 'react'
import './Header.css';
import {RiSearch2Line} from 'react-icons/ri';
const Header = () => {
    return (
        <section className="header-main-area">
            <div className="container">
                <div className="header-all-info">
                    <p>happy hour special</p>
                    <h1>We Serve </h1>
                    <h2>Sensational Fresh Food</h2>

                    <div className="search-box">
                        <input type="text" placeholder='Search food items'/>
                        <button className='search-btn'><RiSearch2Line className='search'/></button>
                    </div>
                </div>
            </div>
        </section>   
    )
}

export default Header
