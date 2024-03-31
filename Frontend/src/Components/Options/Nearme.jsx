import React, { useState } from 'react'
import Radius from '../Carousel/Radius'
import { Link } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'

const Nearme = () => {

  const [isCarousel , setIsCarousel] = useState(false)

  function loadCarousel () {
    !isCarousel ? setIsCarousel(true) : setIsCarousel(false)
  }

  return (

    <> 
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      <span className='m-4'>{`Select your radius ->`}</span>
      <Radius />
      {!isCarousel ? <button onClick={loadCarousel} className='w-14 h-8 border rounded-md m-2'>Search</button> : <button onClick={loadCarousel} className='w-14 h-8 border rounded-md m-2'>Back</button>}
      {isCarousel ? <Carousel /> : <h1 className='m-4'>Nothing to display yet</h1>}
    </div>
    </>
    
  )
}

export default Nearme