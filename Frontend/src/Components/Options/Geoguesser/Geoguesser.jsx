import React, { useState } from 'react';
import CountdownTimer from '../../Timer-Image/Timer.jsx';
import Map from '../../Map.jsx';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../../assets/Images/background.png';
import StreetViewMap from '../../GoogleStreetView/StreetView.jsx';
import logo from '../../../assets/Images/logo.png';
import ScoreCard from './ScoreCard.jsx';

function Answermap() {
  return (
    <>
      <div className='answer-map w-auto h-auto border rounded-2xl absolute left-1/4 z-10  bg-black'>
          <div className='w-full h-12 flex justify-center items-center relative'>
            <p className='text-[#FBBC05]'>Place your Marker</p>
            {/* <button className='absolute w-6 h-6 right-0 text-[#FBBC05]'>X</button> */}
          </div>
          <div className='w-96 h-96 ml-4 mr-4 mb-4'>
          <Map />
        </div>
      </div>
    </>
  );
}

const Geoguesser = () => {
  const [isRunning, setisRunning] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showScoreCard, setShowScoreCard] = useState(false);

  function startGame() {
    !isRunning ? setisRunning(true) : setisRunning(false);
  }

  function toggleMap() {
    !showMap ? setShowMap(true) : setShowMap(false);
  }

  function handleShowScoreCard() {
    setShowScoreCard(true);
  }

  return (
    <>
      <div className='w-screen h-screen flex items-center flex-col'>

        <div className='background bg-[#FBBC05] w-screen h-screen bg-cover bg-center fixed -z-50'>
          <img className='w-full h-full' src={BackgroundImage} alt="" />
        </div>

        <div className='w-screen h-screen flex justify-between items-center bg-transparent/40'>

      <div className='map-box w-4/5 h-5/6 rounded-2xl m-2 bg-black flex justify-between relative'>
        {showMap ? <Answermap /> : null}
        {!isRunning ?   <p>hwllo</p> : null}
        {/* <StreetViewMap /> */}
        {/* score card ko bhi location select karne ke baad hi render karna h */}
        {/* <ScoreCard /> */}
      </div>

          <div className='timer-box w-1/5 h-5/6 flex flex-col rounded-2xl justify-center items-center bg-black'>

            <div className='w-full h-1/3 flex flex-col justify-center items-center'>

          <img className='w-44 h-10 m-2' src={logo} alt="" />
          <CountdownTimer minutes={3} seconds={0} isRunning={isRunning}/>
          {!isRunning ? <button onClick={startGame} className='border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center font-bold shadow-md shadow-white'>Start</button> : null}        
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

            <div className='w-full h-1/3 flex flex-col items-center justify-center'>
              {!showMap ? <button onClick={toggleMap} className='border w-20 h-8 rounded-3xl text-sm mb-4 bg-[#FBBC05] text-black'>Show Map</button> : <button onClick={toggleMap} className='border w-20 h-8 rounded-3xl text-sm mb-4 bg-[#FBBC05] text-black'>Hide Map</button>}
              <button onClick={handleShowScoreCard} className='border w-32 h-12 rounded-3xl mb-4 bg-[#FBBC05] text-black text-xl font-bold'>Submit</button>
            </div>

          </div>
        </div>
      </div>
      {showScoreCard && <ScoreCard />}
    </>
  );
}

export default Geoguesser;
