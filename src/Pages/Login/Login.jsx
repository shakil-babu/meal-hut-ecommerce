import React from 'react'
import logo from '../../images/logo.png';
import {FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <section className="sign-up-main-area">
                <div className="container">
                   <div className="form-area-signup">
                        <img src={logo} alt=""/>
                        <form >
                            <input type="email" placeholder='Email' /> <br/>
                            <input type="password" placeholder='Password' /> <br/>
                            <div className="flex">
                                <p>Don't have an account?</p>
                                <p><Link style={{textDecoration:'none', color:'#22bf88'}} to ='/signup'>Signup</Link></p>
                            </div>
                            <button type='submit'>Sign up</button>
                        </form>

                        <div className="or-flex-area">
                            <div className="plainline"></div> <span>OR</span> 
                            <div className="plainline"></div>
                        </div>

                        <button className='google-btn'><FcGoogle className='icon'/>Sign in with google</button>
                   </div>
                </div>
            </section>      
        </>
    )
}

export default Login
