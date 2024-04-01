import React from 'react';
import logo from '../assets/Images/logo.png' 

const CustomLoader = () => {
  return (

  <div className='w-72 h-60 rounded-xl flex flex-col justify-evenly items-center bg-black/70'>
    <img className='h-12 w-52 m-4' src={logo} alt="" />
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 border-solid"></div>
      </div>
    <p className='text-center text-lg m-2'>{"Once a year, go some place you've never been before."}</p>
  </div>
  );
};

export default CustomLoader;  