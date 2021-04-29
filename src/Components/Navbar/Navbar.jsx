import React, { useContext, useState } from 'react'
import logo from '../../images/logo.png';
import {FiShoppingCart} from 'react-icons/fi';
import {AiOutlineAlignRight} from 'react-icons/ai';
import {GiCrossedSabres} from 'react-icons/gi';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { ProductInfoContext } from '../../App';
const Navbar = () => {
    const [isbar, setIsbar] = useState(true);

    const toggleBar = () => {
        setIsbar(!isbar);
    }

    const activeDesign = {
        color:'#22bf88',
        borderBottom:'2px solid #22bf88'
    }

    const [productInfo, setProductInfo] = useContext(ProductInfoContext);
    return (
        <>
            <nav className="nav-main-area">
                <div className="container">
                <div className="nav-flex">
                    <Link to='/'><img src={logo} alt=""/></Link>

                    <div className="nav-items Nav-Items">
                        <NavLink activeStyle={activeDesign} exact className='nav-link' to='/'>Home</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link' to='/meals'>Meals</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link' to='/login'>Login</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link' to='/signup'>Sign Up</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link cart-icon-area' to='/cart'>
                            <FiShoppingCart  className='cart-icon' />
                            <h6 className="cart-added-number">{productInfo.length}</h6>
                            </NavLink>
                    </div>

                    <div className="nav-bar-and-cross">
                        {
                            isbar ? <li><AiOutlineAlignRight onClick={toggleBar} className='nav-item-icon'/></li> : <li><GiCrossedSabres  onClick={toggleBar}className='nav-item-icon'/></li>
                        }
                        
                    </div>
                </div>

                    {!isbar && <div className="nav-items mobile-nav">
                    <NavLink activeStyle={activeDesign} exact className='nav-link' to='/'>Home</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link' to='/meals'>Meals</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link' to='/login'>Login</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link' to='/signup'>Sign Up</NavLink>
                        <NavLink activeStyle={activeDesign} className='nav-link cart-icon-area' to='/cart'>
                            <FiShoppingCart  className='cart-icon' />
                            <h6 className="cart-added-number">{productInfo.length}</h6>
                            </NavLink>
                    </div>}
                </div>
            </nav>   
        </>
    )
}

export default Navbar
