import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosEyeOff,IoMdEye } from "react-icons/io";
import { createUserWithEmailAndPassword, getAuth , updateProfile} from 'firebase/auth';
import OAuth from '../components/OAuth';
import { db } from '../firebase';
import { serverTimestamp,doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';


export default function Signup() {

  const [FormData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  })
  
  const {name,email,password} = FormData

  const nav=useNavigate()

  function onChange (e){
    setFormData((prevData)=>({
      ...prevData,
      [e.target.id] : e.target.value,
    }))
  }
  
    const [showPass, setshowPass] = useState(true)
  
    async function onSubmit(e){
      e.preventDefault()

      try {
        const auth = getAuth()
        const userDetails = await createUserWithEmailAndPassword(auth, email, password)
        updateProfile(auth.currentUser, {
          displayName: name
        })
        const user = userDetails.user
        // console.log(user)
        const FormDataCopy = {...FormData}
        delete FormDataCopy.password;
        FormDataCopy.timestamp = serverTimestamp()


//const usersCollectionRef = collection(db, 'users');
// const userDocRef = doc(usersCollectionRef, user.uid);
// await setDoc(userDocRef, FormDataCopy);

        await setDoc(doc(db, "users", user.uid), FormDataCopy)
        toast.success("Successfully Signed up")
        nav("/")
      } catch (error) {
        console.log(error)
        toast.error("No!")
      }

    }
  

  
  return (

    <div className="body">

    <div className="container sm:w-20">
    <div className="signup">
      <form onSubmit={onSubmit} action="">

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