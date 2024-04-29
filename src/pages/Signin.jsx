import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signin() {

  const nav = useNavigate()
  return (

    <div className="body">
    <div className="container">
      <div className="signin">

        <h1>Sign-in</h1>
        
        <div className="text">
          <input type="text" placeholder="Enter your email" />
        </div>

        <div className="key">
          <input type="number" placeholder="Enter Password" />
        </div>

        <div className="button">
          <button className="btn bg-blue-500">Sign in</button>
          <p className="text-center mb-2">OR</p>
  <button className="btn flex justify-around items-center bg-blue-500"><img width="24" height="24" src="https://img.icons8.com/ios/50/google-logo--v1.png" alt="google-logo--v1"/><p>Sign-in with Google</p></button>
        </div>

        <div className="toDecrypt">
          <p>Dont have an account ?</p>
          <button className="decryptBtn bg-blue-500" onClick={()=>(nav("/Signup"))}>Sign-up</button>
        </div>
        <div className="forPass text-red-500 font-semibold">Forget Password ? </div>
      
      </div>
    </div>
    </div>

  )
}
