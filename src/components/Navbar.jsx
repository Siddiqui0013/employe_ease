import React from 'react'

export default function Navbar() {
  return (
    <div>
      <header >
        <div className="nav bg-white flex flex-1 justify-between ">
        <div className="logo cursor-pointer h-28 w-28">
<img src="/logo.png" alt="EmployeEase" />
        </div>
        <div className="menu">
<ul><li>Menu</li>
<li>About </li>
<li>Contact us</li></ul>
        </div>
        </div>
      
      </header>
    </div>
  )
}
