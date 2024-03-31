import React, { useState , useEffect } from 'react'
import CountdownTimer from '../Timer-Image/Timer.jsx'
import taj from '../../../src/assets/Images/TajMahal1.jpg'

const Geoguesser = () => {

  const [isRunning , setisRunning] = useState(false)
  function startGame () {
    !isRunning ? setisRunning(true) : setisRunning(false)
  }
  return (
    <>
    <div className='w-screen h-screen flex items-center flex-col'>
      <div className='border w-full h-24 flex justify-center items-center'>   
        <CountdownTimer minutes={3} seconds={0} isRunning={isRunning}/>
        {!isRunning ? <button onClick={startGame} className='border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center'>Start</button> : <button onClick={startGame} className='border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center'>Stop</button>}
      </div>
      <img className='w-full h-96' src={taj} alt="" />
    </div>
    </>
  )
}

export default Geoguesser