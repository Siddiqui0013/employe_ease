import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  const nav=useNavigate()
  return (

    <div className="body">

    <div className="container">
    <div className="signup">

<h1>Sign-up</h1>

<div className="text">
  <input type="email" placeholder="Enter your email" />
</div>

<div className="key">
  <input type="text" placeholder="Enter Password" />
</div>

<div className="button">
  <button className="btn bg-blue-500">Sign-up</button>
  <p className="text-center mb-2">OR</p>
  <button className="btn flex justify-around items-center bg-blue-500"><img width="24" height="24" src="https://img.icons8.com/ios/50/google-logo--v1.png" alt="google-logo--v1"/><p>Sign-up with Google</p></button>
</div>

<div className="toDecrypt">
  <p>Already have an account ?</p>
  <button onClick={()=>(nav("/Signin"))} className="decryptBtn bg-blue-500">Sign-in</button>
</div>
</div> 
    </div>
    </div>
  )
}
