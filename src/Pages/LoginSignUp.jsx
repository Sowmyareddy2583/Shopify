import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>SIGN UP</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account <span>Login Here</span></p>
         <div className="agree">
          <input type="checkbox"  name='' id=''/>
          <p>By continuing ,I agree to the terms and conditions</p>
         </div>

      </div>
    </div>
  )
}

export default LoginSignUp