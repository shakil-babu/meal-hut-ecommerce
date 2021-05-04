import React, { useContext, useState } from 'react'
import logo from '../../images/logo.png';
import {FcGoogle} from 'react-icons/fc';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, signInWithEmailAndPassword, signInWithGoogle } from './firebase.manager';
import { userContext } from '../../App';
const Login = () => {
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
    if(e.target.name === 'email'){
        setUserInfo({...userInfo, email:e.target.value})
    }
    if(e.target.name === 'password'){
        setUserInfo({...userInfo, password:e.target.value})
    }
}

const submitHandler = (e) => {
e.preventDefault();
signInWithEmailAndPassword(userInfo.email, userInfo.password)
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
                        <form onSubmit={submitHandler}>
                            <input onChange={blurHandler} name='email' type="email" placeholder='Email' /> <br/>
                            <input onChange={blurHandler} name='password' type="password" placeholder='Password' /> <br/>
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

                        <button onClick={googleSignIn} className='google-btn'><FcGoogle className='icon'/>Sign in with google</button>
                   </div>
                </div>
            </section>      
        </>
    )
}

export default Login
