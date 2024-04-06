import React, { useState,useEffect } from 'react';
import CountdownTimer from '../../Timer-Image/Timer.jsx';
import Map from '../../Map.jsx';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundImage from '../../../assets/Images/background.png';
import StreetViewMap from '../../GoogleStreetView/StreetView.jsx';
import logo from '../../../assets/Images/logo.png';
import ScoreCard from './ScoreCard.jsx';
import home from '../../../assets/Images/home.png'

function Answermap() {
  return (
    <>
      <div className='answer-map w-3/4 h-3/4 rounded-2xl absolute z-10 flex flex-col justify-center items-center bg-black pb-4 mt-2'>

          <div className='w-full h-12 flex justify-center items-center'>
            <p className='text-[#FBBC05] monseratt font-semibold text-lg'>Place your Marker</p>
            
          </div>
          <div className='h-5/6 w-full pl-4 pr-4'>
            <Map />
          </div>
      </div>
    </>
  );
}

const Geoguesser = () => {
  const navigate=useNavigate();
  const [isRunning, setisRunning] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [showScoreCard, setShowScoreCard] = useState(false);

  function toggleMap() {
    !showMap ? setShowMap(true) : setShowMap(false);
  }

  const [round , setRound] = useState(1)

  function handleShowScoreCard() {
    setisRunning(false)
    setShowScoreCard(true);
    setRound(round + 1)
  }
  
  return (
    <>
      <div className='w-screen h-screen flex items-center flex-col relative'>
        
        <Link to={'../options'} className='absolute top-0 left-0 w-8 h-8 m-4'><img src={home} alt="" /></Link>

        <div className='background bg-[#FBBC05] w-screen h-screen bg-cover bg-center fixed -z-50'>
          <img className='w-full h-full' src={BackgroundImage} alt="" />
        </div>

        <div className='w-screen h-screen flex justify-between items-center bg-transparent/40'>

      <div className='map-box w-4/5 h-5/6 rounded-2xl m-2 bg-black flex justify-center relative'>
        {showMap ? <Answermap /> : null}
        {/* {!isRunning ?   <StreetViewMap /> : null} */}
        <StreetViewMap />
        {showScoreCard ? <ScoreCard /> : null}
        {/* <ScoreCard /> */}
        
      </div>

          <div className='timer-box w-1/5 h-5/6 flex flex-col rounded-2xl justify-center items-center bg-black'>

            <div className='w-full h-1/3 flex flex-col justify-center items-center'>

          <img className='w-44 h-10 m-2' src={logo} alt="" />
          <CountdownTimer minutes={3} seconds={0} isRunning={isRunning}/>
          {/*{!isRunning ? <button onClick={startGame} className='rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center font-bold shadow-md shadow-white'>Start</button> : null}*/}
        </div>

            <div className='w-full h-1/2 flex flex-col'>
              <div className='w-full h-auto flex flex-col p-4'>
                <span className='text-[#FBBC05] text-lg monseratt'>Map :</span>
                <p className='text-lg monseratt'>Cities of India</p>
              </div>
              <div className='w-full h-auto flex flex-col p-4'>
                <span className='text-[#FBBC05] text-lg monseratt'>Round :</span>
                <p className='text-lg monseratt'>{`${round} / 10`}</p>
              </div>
            </div>

            <div className='w-full h-1/3 flex flex-col items-center justify-center'>
              {!showMap ? <button onClick={toggleMap} className='w-2/3 lg:w-48 xl:w-60 h-auto rounded-3xl text-md mb-4 bg-[#FBBC05] text-black shadow-md shadow-[#FBBC05] monseratt p-2 font-bold'>Show Map</button> : <button onClick={toggleMap} className='w-32 lg:w-48 xl:w-60 h-auto rounded-3xl text-md mb-4 bg-[#FBBC05] text-black shadow-md shadow-[#FBBC05] monseratt font-bold p-2'>Hide Map</button>}
              <button onClick={handleShowScoreCard} className='w-2/3 lg:w-48 lg:text-2xl xl:w-60 xl:text-3xl h-12 rounded-3xl mb-4 bg-[#FBBC05] text-black text-xl font-bold shadow-md shadow-[#FBBC05] monseratt'>Submit</button>
            </div>

          </div>
        </div>
      </div>
      
    </>
  );
}

export default Geoguesser;
