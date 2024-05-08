import React from 'react';
import {  AiOutlineSearch } from 'react-icons/ai';

export default function Search() {
  return (
    <div className='flex justify-center  w-[100%]'>
      <div className='searchDiv p-3 min-w-[500px] '>
        <form >
          <div className='firstDiv flex justify-between items-center  bg-white p-5 shadow-lg shadow-blue'>
            <div className='flex gap-3 justify-between items-center'>
              <AiOutlineSearch className='text-[30px] icon' />
              <input type="text" className='bg-transparent text-red-500 font-bold focus:outline-none w-full' placeholder= 'Search Job Here....' />
            </div>

            <button className='bg-blue-500 p-1 text-xl px-8 rounded-[10px] text-white cursor-pointer'>
            Search</button>

          </div>
        </form>
      </div>
    </div>
  );
}
