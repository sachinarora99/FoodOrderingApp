import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets';


const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign Up");
  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() =>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState === "Login" ? <></> :<input type="text" placeholder="Enter your name" required />} 
            <input type="email" placeholder="Enter your email" required />
            <input type="password" placeholder="Enter your password" required />
        </div>
        <button>{currState === "Sign Up" ? "create account" : "Login"}</button>
        <div className="login-popup-condition">
             <input type="checkbox"  required/>
             <p>By creating an account, you agree to the terms and conditions.</p>
        </div>
        {currState==="Login"?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}

      </form>
    </div>
  )
}

export default LoginPopup
