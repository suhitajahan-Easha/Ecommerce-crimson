import React, { useState } from 'react'

import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
   const [state,setState]=useState("Login");
  return (
    <div className='LoginSignUp'>
       <div className="LoginSignUp-container">
        <h1>{state}</h1>
        <div className="LoginSignUp-fields">
           {state==="Sign Up"?<input name='username' type="text" placeholder='Your Name' />:<></>}
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        {state==="Sign Up"?<p className='LoginSignUp-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>:
        <p className='LoginSignUp-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>}
        <div className="LoginSignUp-agree">
          <input type="checkbox"/>
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>

       </div>

      </div>
  )
}

export default LoginSignUp