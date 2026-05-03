import React from 'react'

import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='LoginSignUp'>
       <div className="LoginSignUp-container">
        <h1>Sign Up</h1>
        <div className="LoginSignUp-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className='LoginSignUp-login'>Already have an account? <span>Login Here</span></p>
        <div className="LoginSignUp-agree">
          <input type="checkbox"/>
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>

       </div>

      </div>
  )
}

export default LoginSignUp