import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosEyeOff,IoMdEye } from "react-icons/io";
import OAuth from '../components/OAuth';

export default function Signup() {

  const [FormData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  })
  
  const {name,email,password} = FormData
  
  function onChange (e){
    setFormData((prevData)=>({
      ...prevData,
      [e.target.id] : e.target.value,
    }))
  }
  
    const [showPass, setshowPass] = useState(true)
  
  

  const nav=useNavigate()
  return (

    <div className="body">

    <div className="container sm:w-20">
    <div className="signup">
      <form action="">

<h1>Sign-up</h1>

<div className="text">
          <input type="text" id='name' value={name} onChange={onChange} placeholder="Enter your name"/>
        </div>

<div className="text">
          <input type="email" id='email' value={email} onChange={onChange} placeholder="Enter your email"/>
        </div>

        <div className="key relative">
          <input type={showPass ? "text" : "password"} value={password} onChange={onChange} id='password' placeholder="Enter Password" />
          {showPass ? (<IoIosEyeOff className='absolute right-5 top-5 cursor-pointer' 
          onClick={()=> setshowPass((prev)=>
              !prev 
            )
          }/>) :
           (<IoMdEye className='absolute right-5 top-5 cursor-pointer' onClick={()=>
            setshowPass((prev)=>
              !prev
            )
          }/>) }
        </div>

        <div className="button">
          <button  type="submit" className="btn bg-blue-500">Sign Up</button>
          <div className="flex  items-center my-2 px-2 before:border-t before:mx-1 before:flex-1 before:border-gray-300
          after:border-t after:flex-1 after:border-gray-300 after:mx-1"><p className="text-center mb-2">OR</p></div>
        </div>

        <OAuth/>

<div className="toDecrypt">
  <p>Already have an account ?</p>
  <button onClick={()=>(nav("/Signin"))} className="decryptBtn bg-blue-500">Sign-in</button>
</div>
</form>
</div> 
    </div>
    </div>
  )
}
