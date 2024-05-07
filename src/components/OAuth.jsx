import { getAuth, signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import React from 'react'
import { toast } from 'react-toastify'
import { db } from '../firebase'

export default function OAuth() {

  async function onBtnClick() {
    try {
      const auth = getAuth()
  const provider = new GoogleAuthProvider
  const result = await signInWithPopup(auth,provider)
  const user = result.user

  const docRef = doc(db, "users", user.uid)
  const docSnap = await getDoc(docRef)

  if(!docSnap.exists()){
    await setDoc(docRef, {
      name : user.displayName,
      email : user.email,
      timestamp : serverTimestamp()
    })
  }



  console.log(user)
    } catch (error) {
      // toast.error("Error")
      console.log(error)
    }

  }


  return (
    <div><button type='button' onClick={onBtnClick} className="btn flex justify-around items-center bg-blue-500"><img width="24" height="24" src="https://img.icons8.com/ios/50/google-logo--v1.png" alt="google-logo--v1"/><p>Sign-in with Google</p></button></div>
  )
}
