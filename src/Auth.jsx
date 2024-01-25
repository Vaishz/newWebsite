import React from 'react'
import Button from './components/Button/Button'



const Auth = () => {
  return (
    <>
    <div className="oc w-4/6 h-3/4 bg-pink-200 flex flex-col justify-center items-center top-1/2 left-1/2">
      <div className="c1">
      <h2 className='font-bold text-4xl'>Login</h2>
      <h5>Don't have an acc yet</h5>
      <h6>Sign Up</h6>
      </div>

      <div className="cred">
        <h4>Email Address</h4>
        <input type='email'></input>
        <h4>Password</h4>
        <input type='text'></input>
        <h6>Forgot Password</h6>
      </div>

      <Button title = 'Login'/>

      <div className="social">
        <button> Google</button>
        <button>Facebook</button>
      </div>

    </div>
    </>
  )
}

export default Auth