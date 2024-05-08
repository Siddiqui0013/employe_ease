
import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { sendPasswordResetEmail,getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';


export default function ForgotPass() {
const [email, setEmail] = useState("")

function onChange (e){
  setEmail(e.target.value)
}
  const nav = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send reset email");
    }
  };


  return (

    <div className="body">
    <div className="container">
      <div className="signin">
        <form onSubmit={onSubmit}>

        <h1>Forgot Password</h1>
        
        <div className="text">
          <input type="email" id='email' value={email} onChange={onChange} placeholder="Enter your email"/>
        </div>

        <div className="button">
          <button  type="submit" className="btn bg-blue-500">Send Reset email</button>
          </div>

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
