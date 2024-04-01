import React, { useState } from 'react'
import Radius from '../Carousel/Radius'
import Carousel from '../Carousel/Carousel'
import Loader from '../Loader'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import {Link} from 'react-router-dom'
import { CarouselDataActions } from '../../Store/CarouselDataSlice'
import BackgroundImage from '../../assets/Images/background.png'
import logo from '../../assets/Images/logo.png'
import { useEffect } from 'react'


const Nearme = () => {
  const dispatch=useDispatch();
  const userCoords = useSelector((store) => store.userCoords);
    const radius=useSelector((store)=>store.userRadius)
    
        const getCarouselData = () => {
            axios.get("http://localhost:3000",{
                params:{
                    lat:userCoords.lat,
                    lng:userCoords.long,
                    radius:radius
                }
            })
            .then((response)=>{
              
              const carouselData=(response.data.suggestedLocations);
                dispatch(CarouselDataActions.setCarouselData(carouselData))
            })
            .catch((error)=>{
               console.log(error)
            })
        }
  
  const [isCarousel , setIsCarousel] = useState(false)
  function loadCarousel () {
    getCarouselData();
    !isCarousel ? setIsCarousel(true) : setIsCarousel(false)
  }
  
  //Onkar make an navbar typeof thing for user to search for the category of things they want to search
  return (
    
    <> 
    <div className='background bg-[#FBBC05] w-screen h-screen bg-cover bg-center fixed -z-50'>
      <img className='w-full h-full' src={BackgroundImage} alt="" />
    </div>


    <div className='w-screen h-screen flex justify-center items-center'>

      <div className='select-radius h-auto w-auto flex'>

        <div className='w-screen h-screen flex justify-center items-center flex-col'>

          <div className='w-2/3 h-2/5 rounded-xl flex flex-col justify-between items-center bg-black/70  '>
            <img className='h-12 w-96 m-2' src={logo} alt="" />
            <span className=' text-lg'>{`Explore the loactions near you`}</span>
            <span className=' text-lg'>{`Please select your radius`}</span>
            <Radius />
            <Link to="/carousel" onClick={loadCarousel} className='w-24 h-7 mb-2 bg-[#FBBC05] text-black rounded-md m-2 flex justify-center items-center'>Explore</Link>
          </div>
        
        </div>

      </div>

        {/* <Loader /> */}

    </div>

    </>
    
    )
  }
  
  export default Nearme