import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile";  
import ForgotPass from "./pages/ForgotPass";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar"
import Categories from "./pages/Categories"
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="Profile" element={<Profile/>}></Route>
        <Route path="ForgotPass" element={<ForgotPass/>}></Route>
        <Route path="Signin" element={<Signin/>}></Route>
        <Route path="Signup" element={<Signup/>}></Route>
        <Route path="Categories" element={<Categories/>}></Route>
      </Routes>
    </Router>
     {/* <p className="text-3xl font-bold underline">React App</p> */}
    </>
  );
}

export default App;
