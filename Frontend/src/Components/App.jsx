import { useState,useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { CoordActions } from '../Store/userCoordsSlice';
import { Link } from 'react-router-dom';
import BackgroundImage from '../assets/Images/background.png'
import Login from './Login-Register/Login';


function  App() {
  const [coords,setCoords]=useState({lat:"",long:""});
  const dispatch=useDispatch();
  useEffect(() => {
    async function getUserCoords(){
      const successCallback = (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, long: longitude });
        return { lat: latitude, long: longitude }; // Return coordinates
      };
  
      const errorCallback = (error) => {
        console.error('Error getting geolocation:', error);
      };
  
      if (navigator.geolocation) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          
          const { lat, long } =successCallback(position);
          dispatch(CoordActions.setUserCoords({ lat, long }));
        } catch (error) {
          errorCallback(error);
        }
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };
  
    getUserCoords();
  }, []);

  return (
    <>
    <div className='background bg-[#FBBC05] w-screen h-screen bg-cover bg-center fixed -z-50'>
      <img className='w-full h-full' src={BackgroundImage} alt="" />
    </div>
    
    <div className='app-wrapper w-screen h-screen flex justify-center items-center'>
      <Login />
    </div>

    </>
  )
}
export default App;