import React from 'react'

const Options = () => {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <a className='w-auto text-center rounded-lg m-2 h-8 border' href="/Geoguesser">Geoguesser</a>
      <a className='w-auto text-center rounded-lg m-2 h-8 border' href="/Nearme">Nearme</a>
      <a className='w-auto text-center rounded-lg m-2 h-8 border' href="/Contribute">Contribute</a>
    </div>
  )
}

export default Options