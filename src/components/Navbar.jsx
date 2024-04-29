
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation().pathname;
  const nav = useNavigate();

  // const pathMatch = route => route === location;
  const pathMatch = (...routes) => routes.some(route => route === location);

  const isActive = pathMatch("/signin", "/signup");


  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex m-auto justify-between px-4 mx-auto items-center">
        <div>
          <img onClick={() => nav("/")} className="logo cursor-pointer h-16" src="logo.png" alt="employe ease" />
        </div>
        
        <div className="menu">
          <ul className="flex space-x-10">

          <li onClick={() => nav("/")} className={`hidden  md:block cursor-pointer border-b-4 py-6 font-semibold border-b-transparent ${pathMatch("/") ? "text-black border-b-blue-500" : "text-blue-500"}`}>Home</li>


            <li onClick={() => nav("/categories")} className={`cursor-pointer border-b-4 py-6 font-semibold border-b-transparent ${pathMatch("/categories") ? "text-black border-b-blue-500" : "text-blue-500"}`}>Categories</li>
            
            <li onClick={() => nav("/signin")} className={`cursor-pointer border-b-4 py-6 font-semibold border-b-transparent ${isActive ? "text-black border-b-blue-500" : "text-blue-500"}`}>Sign in</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
