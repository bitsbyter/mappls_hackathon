import React from 'react'
import { Link } from 'react-router-dom'
import Map from '../Map'

import BackgroundImage from '../../assets/Images/background.png'
import logo from '../../assets/Images/logo.png'

import geoguess from '../../assets/Images/geo-guess.png'
import locator from '../../assets/Images/locator.png'

const Options = () => {
  return (
    <>  
    <div className='background bg-[#FBBC05] w-screen h-screen bg-cover bg-center fixed -z-50'>
      <img className='w-full h-full' src={BackgroundImage} alt="" />
    </div>

    <div className='w-screen h-screen flex flex-col bg-transparent/45'>

      <div className='logo-container flex flex-col justify-center items-center w-full h-1/4'>
        <img className='w-96 m-2' src={logo} alt="" />
        <p className='italic m-2 text-lg'>{`"Explore the world one click at a time."`}</p>
      </div>

      <div className='mt-1/2 w-full h-3/4 flex justify-center items-center'> 
         <span className='options-button flex justify-center items-center rounded-md m-2 w-44 h-12 bg-black'>
          <img className='h-6 w-6 m-2' src={geoguess} alt="" />
          <Link className='m-2' to={'/geoguesser'}>Geoguesser</Link>
         </span>
         <span className='options-button flex justify-center items-center rounded-md m-2 w-44 h-12 bg-black'>
          <img className='h-6 w-6 m-2' src={locator} alt="" />
          <Link className='m-2' to={'/nearme'}>Near-me</Link>
         </span>
      </div>
      
    </div>
    </>
  )
}

export default Options