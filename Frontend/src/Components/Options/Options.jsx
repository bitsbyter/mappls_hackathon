import React from 'react'
import { Link } from 'react-router-dom'
import { QuestionAction } from '../../Store/AskedPlaceSlice.js'
import { useDispatch } from 'react-redux'
import BackgroundImage from '../../assets/Images/background.png'
import logo from '../../assets/Images/logo.png'
import Locations from '../../Locations'
import geoguess from '../../assets/Images/geo-guess.png'
import locator from '../../assets/Images/locator.png'
import { useState,useEffect } from 'react'
import axios from "axios"

// const textSearch=async(location)=>{
//       try{
//        const response=await axios.get("http://localhost:3000/textSearch",{
//         params:{
//           randomLocation:location
//         }
//        })
//        console.log(response.data)
//        return response.data;
//       }catch(error){
//     console.log(error)
//   }
  
// }

const Options = () => {
  const [questionObject,setQuestionObject]=useState(null);
  const dispatch=useDispatch();
  useEffect(() => {
    const setQuestion = async () => {
        try {
            const size = Locations.length;
            const number = Math.floor(Math.random() * size);
            // const randomLocation = Locations[number];
            const questionLocation=Locations[number];
            // const questionLocation=await textSearch(randomLocation.location);  <- This works using the textsearch api
            console.log(questionLocation)
            setQuestionObject(questionLocation);
             dispatch(QuestionAction.setQuestionedPlace(questionLocation))
        } catch (error) {
            console.log(error);
        }
    };

    if (!questionObject) {
        setQuestion();
    }
}, [questionObject, dispatch]);



  return (
    <>  
    <div className='background bg-[#FBBC05] w-screen h-screen bg-cover bg-center fixed -z-50'>
      <img className='w-full h-full ' src={BackgroundImage} alt="" />
    </div>

    <div className='w-screen h-screen flex flex-col bg-transparent/45'>

      <div className='logo-container flex flex-col justify-center items-center w-full h-1/4'>
        <img className='w-64 sm:w-96 m-4' src={logo} alt="" />
        <p id='satisfy-regular' className='m-2 text-xl tracking-widest leading-8 text-[#FBBC05] monseratt'>{`"Explore the world one click at a time."`}</p>
      </div>

      <div className='mt-1/2 w-full h-3/4 flex flex-col sm:flex-row justify-center items-center'> 
         <span className='options-button flex justify-center items-center rounded-md m-2 w-60 h-16 xl:w-72 xl:h-20 bg-black'>
          <img className='h-8 w-8 m-2 xl:h-12 xl:w-12' src={geoguess} alt="" />
          <Link className='m-2 text-2xl xl:text-3xl monseratt' to={'/geoguesser'}>Guess The Location</Link>
         </span>
         <span className='options-button flex justify-center items-center rounded-md m-2 w-60 h-16 xl:w-72 xl:h-20 bg-black'>
          <img className='h-8 w-8 m-2 xl:h-12 xl:w-12' src={locator} alt="" />
          <Link className='m-2 text-2xl xl:text-3xl monseratt' to="/nearme">NearMe</Link>
         </span>
      </div>
      
    </div>
    </>
  )
}

export default Options