import React from 'react'
import Radius from '../Carousel/Radius'

const Nearme = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      <span className='m-4'>{`Select your radius ->`}</span>
      <Radius />

      <a href="/Carousel" className='w-20 h-8 border m-4 text-center rounded-lg'>Search</a>
    </div>
  )
}

export default Nearme