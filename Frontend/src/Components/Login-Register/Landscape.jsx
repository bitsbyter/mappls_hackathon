import React from 'react'

import { CiMobile3 } from "react-icons/ci";

export const Landscape = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-black'>
      <p className='w-auto h-auto monseratt m-8 text-[#FBBC05]'>Please Switch to Landscape Mode</p>
      <CiMobile3 className='w-16 h-16 animate-spin-slow' style={{
        width : '8rem',
        height : '8rem',
      }}/>
    </div>
  )
}
