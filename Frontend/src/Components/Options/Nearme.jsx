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
import home from '../../assets/Images/home.png'
import { choiceActions } from '../../Store/UserChoiceSlice'
import { routingActions } from '../../Store/RoutingPlace'


function LocationType() {
  const dispatch=useDispatch();
  const [locationType , setLocationType] = useState('');

  const handleChange = (e) => {
    setLocationType(e.target.value);
    console.log(e.target.value)
    dispatch(choiceActions.setChoice(e.target.value));
  };

  return (
    <div className="dropdown">
      <select className='bg-[#FBBC05] rounded-md text-black montserat font-bold w-auto' value={locationType} onChange={handleChange} >
        <option className=' monseratt text-center' value="all-locations">All Locations</option>
        <option className='bg-[#FBBC05] text-black monseratt text-center' value="landscapes">Landcapes</option>
        <option className='bg-[#FBBC05] text-black monseratt text-center' value="cafe">Cafe</option>
        <option className='bg-[#FBBC05] text-black monseratt text-center' value="famous-locations">Famous Locations</option>
      </select>
    </div>
  );
}


const Nearme = () => {
  const dispatch=useDispatch();
  const choice=useSelector((store)=>store.nearByChoice);
  const userCoords = useSelector((store) => store.userCoords);
    const radius=useSelector((store)=>store.userRadius)
    
        const getCarouselData = () => {
            axios.get("https://mappls-hackathon-backend.vercel.app/",{                       
                params:{
                    lat:userCoords.lat,
                    lng:userCoords.long,
                    type:choice,
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

    <Link to={'../options'} className='absolute top-0 left-0 w-8 h-8 m-4'><img src={home} alt="" /></Link>

    <div className='w-screen h-screen flex justify-center items-center'>

      <div className='select-radius h-auto w-auto flex'>

        <div className='w-screen h-screen flex justify-center items-center flex-col'>

          <div className='w-2/3 lg:w-2/3 h-2/5 rounded-xl flex flex-col justify-between items-center bg-black/70 monseratt'>
            <img className='w-48 h-8 sm:h-12 sm:w-64 m-6' src={logo} alt="" />
            <span className='monseratt text-xs sm:text-lg'>{`Explore the loactions near you`}</span>
            <span className='monseratt text-xs sm:text-lg'>{`Please select your radius`}</span>
            <Radius />

            <LocationType />
            <Link to="/carousel" onClick={loadCarousel} className='w-24 h-7 mb-2 bg-[#FBBC05] text-black rounded-md m-2 flex justify-center items-center monseratt font-bold'>Explore</Link>
          </div>
        
        </div>

      </div>

        {/* <Loader /> */}

    </div>

    </>
    
    )
  }
  
  export default Nearme