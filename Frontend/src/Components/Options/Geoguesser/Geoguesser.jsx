import React, { useState} from 'react'
import CountdownTimer from '../../Timer-Image/Timer.jsx'

import { Link } from 'react-router-dom'

import BackgroundImage from '../../../assets/Images/background.png'
import StreetViewMap from '../../GoogleStreetView/StreetView.jsx' 
import logo from '../../../assets/Images/logo.png'

const Geoguesser = () => {
  const [isRunning , setisRunning] = useState(false)
  function startGame () {
    !isRunning ? setisRunning(true) : setisRunning(false)
  }

  return (
    <>
    <div className='w-screen h-screen flex items-center flex-col'>

    <div className='background bg-[#FBBC05] w-screen h-screen bg-cover bg-center fixed -z-50'>
      <img className='w-full h-full' src={BackgroundImage} alt="" />
    </div>

    <div className='w-screen h-screen flex justify-between items-center bg-transparent/40'>

      <div className='map-box w-4/5 h-5/6 rounded-2xl m-2 bg-black flex justify-between relative'>
      <StreetViewMap/>
      </div>

      <div className='timer-box w-1/5 h-5/6 flex flex-col rounded-2xl justify-center items-center bg-black'> 

        <div className='w-full h-1/3 flex flex-col justify-center items-center'>

          <img className='w-32 h-6 m-2' src={logo} alt="" />
          <CountdownTimer minutes={3} seconds={0} isRunning={isRunning}/>
          {!isRunning ? <button onClick={startGame} className='border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center'>Start</button> : <button onClick={startGame} className='border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center'>Stop</button>}

        </div>

        <div className='w-full h-1/2 flex flex-col'>
          <div className='w-full h-16 flex flex-col p-4'>
            <span className='text-[#FBBC05] text-lg'>Map :</span>
            <p className='text-lg'>Cities of India</p>
          </div>
          <div className='w-full h-16 flex flex-col p-4'>
            <span className='text-[#FBBC05] text-lg'>Round :</span>
            <p className='text-lg'>Level 1/10</p>
          </div>
        </div>

        <div className='w-full h-1/3 flex items-end justify-center'>
          <Link className='border w-32 h-12 rounded-3xl mb-4 bg-[#FBBC05] text-black text-xl' to="/ScoreCard" >Submit</Link>
        </div>

      </div>
      </div>
      </div>
    </>
  )
}

export default Geoguesser