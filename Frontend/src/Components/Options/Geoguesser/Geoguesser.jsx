import React, { useState , useEffect } from 'react'
import CountdownTimer from '../../Timer-Image/Timer.jsx'
import QuestionImage from './QuestionImage.jsx'
import Map from '../../Map.jsx'

import { Link } from 'react-router-dom'
const Geoguesser = () => {
  
  const [isRunning , setisRunning] = useState(false)
  function startGame () {
    !isRunning ? setisRunning(true) : setisRunning(false)
  }

  return (
    <>
    <LogoutComponent/>
    <div className='w-screen h-screen flex items-center flex-col'>

      <div className='border w-full h-24 flex justify-center items-center'>   
        <CountdownTimer minutes={3} seconds={0} isRunning={isRunning}/>
        {!isRunning ? <button onClick={startGame} className='border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center'>Start</button> : <button onClick={startGame} className='border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center'>Stop</button>}
      </div>
      <div className='flex flex-row items-center justify-evenly w-screen col-span-4 my-4'> 
      <QuestionImage/>
      <Map/>
      </div>
      <div className=' text-4xl my-10 border-4 border-slate-50 p-5 rounded-2xls'>
      <Link to="/ScoreCard">Submit</Link>
      </div>
      
    </div>
    </>
  )
}

export default Geoguesser