import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import OAuth from '../components/OAuth';

export default function ForgotPass() {
const [email, setEmail] = useState("")

function onChange (e){{
  setEmail(e.target.value)
  }
}
  const nav = useNavigate()
  return (

    <div className="body">
    <div className="container">
      <div className="signin">
        <form action="">

        <h1>Forgot Password</h1>
        
        <div className="text">
          <input type="email" id='email' value={email} onChange={onChange} placeholder="Enter your email"/>
        </div>

        <div className="button">
          <button  type="submit" className="btn bg-blue-500">Send Reset email</button>
          </div>
          
        <OAuth/>

        <div className="toDecrypt">
          <p>Dont have an account ?</p>
          <button className="decryptBtn bg-blue-500" onClick={()=>(nav("/Signup"))}>Sign-up</button>
        </div>
        <div className="forPass text-red-500 font-semibold"><Link to="/Signin">Sign-in Instead ? </Link> </div>
        </form>
      </div>
    </div>
    </div>


  )

}
