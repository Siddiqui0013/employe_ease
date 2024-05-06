// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV34FnSsiYZPprFZtEjgRcDKzPZHoqTrw",
  authDomain: "employeease.firebaseapp.com",
  projectId: "employeease",
  storageBucket: "employeease.appspot.com",
  messagingSenderId: "91048491767",
  appId: "1:91048491767:web:3b536fad4619e0ae8531f2"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()