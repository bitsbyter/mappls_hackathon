import { useState,useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { CoordActions } from '../Store/userCoordsSlice';
import { Link } from 'react-router-dom';
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

  console.log(coords);


  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center flex-col'>
        <p className='text-3xl m-4'>App Logo</p>
        <Link className="SignIn border rounded-lg bg-slate-100 text-black m-4 w-16 h-8 text-center" to="/login">Log In to Explore</Link>
      </div>
    </>
  )
}
export default App;