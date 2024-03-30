import React from 'react'
import { Link } from 'react-router-dom'

const Options = () => {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <Link className='w-auto text-center rounded-lg m-2 h-8 border' to="/Geoguesser">Geoguesser</Link>
      <Link className='w-auto text-center rounded-lg m-2 h-8 border' to="/Nearme">Nearme</Link>
    </div>
  )
}

export default Options