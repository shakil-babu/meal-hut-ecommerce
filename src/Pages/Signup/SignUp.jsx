import React, { useContext, useState } from 'react'
import logo from '../../images/logo.png';
import './SignUp.css';
import {FcGoogle} from 'react-icons/fc';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import {createUserWithEmailAndPassword, initializeLoginFramework, signInWithGoogle } from '../Login/firebase.manager.js';
const SignUp = () => {
    const [erros, setErros] = useState({name:"", email:"",password:""})
    const [emailError, setEmailError] = useState(false);
//userInfo
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

//firebse initialize
  initializeLoginFramework();

// from context
const [loggedInUser, setLoggedInUser] = useContext(userContext);
const history = useHistory();
const location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };


  // sign in with google
  const googleSignIn = () => {
    signInWithGoogle().then((res) => {
      setUserInfo(res);
      setLoggedInUser(res);
      history.replace(from);
    });

  };

   // blurHandler
   const blurHandler = (e) => {
       if(e.target.name === 'name'){
        setUserInfo({...userInfo, name:e.target.value })
       }
       if(e.target.name === 'email'){
        var emailValidate = /\S+@\S+\.\S+/.test(e.target.value);
        if(emailValidate){
            setUserInfo({...userInfo, email:e.target.value})
            setEmailError(false);
        }else{
            setErros({...erros, email:'Email is not Valid!'})
            setEmailError(true)
        } 
           
       }
       if(e.target.name === 'password'){
           setUserInfo({...userInfo, password:e.target.value})
       }
  }

  console.log(userInfo)

    // submitHandler
    const submitHandler = (e) => {
        e.preventDefault();
          createUserWithEmailAndPassword(userInfo.name, userInfo.email, userInfo.password)
          .then(res => {
            setUserInfo(res);
          setLoggedInUser(res);
          history.replace(from);
          })
        }
    
    return (
        <>
            <section className="sign-up-main-area">
                <div className="container">
                   <div className="form-area-signup">
                        <img src={logo} alt=""/>
                        <form >
                            <input type="text" placeholder='Name' /> <br/>
                            <input type="email" placeholder='Email' /> <br/>
                            <input type="password" placeholder='Password' /> <br/>
                            <div className="flex">
                                <p>Already have an account?</p>
                                <p><Link style={{textDecoration:'none', color:'#22bf88'}} to ='/login'>Login</Link></p>
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

export default SignUp
