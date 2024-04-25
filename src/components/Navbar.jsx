import React from 'react';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center border-solid border-b-2">
      <div className="logo cursor-pointer h-28 w-28">
        <img src="logo.png" alt="employe ease" />
      </div>
      <div className="menu">
        <ul className="flex">
          <li className="mr-4 bg-blue-400 p-1 cursor-pointer rounded-md">Menu</li>
          <li className="mr-4 bg-blue-400 p-1 cursor-pointer rounded-md">About</li>
          <li className="mr-4 bg-blue-400 p-1 cursor-pointer rounded-md">Contact us</li>
        </ul>
      </div>
    </header>
  );
}
