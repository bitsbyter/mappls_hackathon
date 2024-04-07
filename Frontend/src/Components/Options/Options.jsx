import React from 'react'
import { IoHandLeft, IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { QuestionAction } from '../../Store/AskedPlaceSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import BackgroundImage from '../../assets/Images/background.png'
import logo from '../../assets/Images/logo.png'
import Locations from '../../Locations'
import geoguess from '../../assets/Images/geo-guess.png'
import locator from '../../assets/Images/locator.png'
import { useState,useEffect } from 'react'
import axios from "axios"
import { CiSearch } from "react-icons/ci";
import { RiMenu4Fill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { GrCaretNext } from "react-icons/gr";
import { PiUserCircle } from "react-icons/pi";
import { userCategoryActions } from '../../Store/CurrentUserPointsPrefSlice.js'


const textSearch=async(location)=>{
      try{
       const response=await axios.get("https://mappls-hackathon-backend.vercel.app/textSearch",{
        params:{
          randomLocation:location
        }
       })
       console.log(response.data)
       return response.data;
      }catch(error){
    console.log(error)
  }
  
}

  const getUserPreferences=async(email)=>{
       try{
          const response=await axios.get("https://mappls-hackathon-backend.vercel.app/userData",{
            params:{
              email:email
            }
          })
          
          const favouriteCategory=response.data.Category;
          const filteredCategories = Object.keys(favouriteCategory).filter(category => favouriteCategory[category] > 500);
          return filteredCategories;
       }catch(error){
          console.log(error)
       }
    }
const Options = () => {
  const [questionObject,setQuestionObject]=useState(null);
  const dispatch=useDispatch();
  const activeUser=useSelector((store)=>store.activeUser)
  console.log(activeUser)
  useEffect(() => {
    const setQuestion = async () => {
        try {
            const size = Locations.length;
            const number = Math.floor(Math.random() * size);
            const randomLocation = Locations[number];
            // const questionLocation=Locations[number];
            const questionLocation=await textSearch(randomLocation.location);  //<- This works using the textsearch api
             const filterCategory=await getUserPreferences(activeUser.email);
             dispatch(userCategoryActions.setUserCategoryData(filterCategory))
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

const [isProfile , setIsProfile] = useState('hidden')

const showProfile = () => {
  isProfile == 'hidden' ? setIsProfile('flex') : setIsProfile('hidden')
}

const closeProfile = () => {
  isProfile == 'flex' ? setIsProfile('hidden') : setIsProfile('flex')
}
  const handleSearchClick=()=>{
    console.log("I was CLicked")
  }

  return (
    <>  
    <div className='background bg-[#FBBC05] w-screen h-screen bg-cover bg-center fixed -z-50'>
      <img className='w-full h-full ' src={BackgroundImage} alt="" />
    </div>

    <div className='fixed w-full h-24 flex justify-end'>
      <CiSearch className='h-12 w-12 m-2'/>
      <RiMenu4Fill onClick={showProfile} className='h-12 w-12 m-2'/>
    </div>
    <div className='absolute z-10 right-20 top-20'>
    {/* <IoSearchSharp  onClick={handleSearchClick}/> */}
    
      </div>
    <div className='w-screen h-screen flex flex-col bg-transparent/45'>

      <div className='logo-container flex flex-col justify-center items-center w-full h-1/4'>
        <img className='w-64 sm:w-96 m-4' src={logo} alt="" />
        
        <p id='satisfy-regular' className='m-2 text-xl tracking-widest leading-8 text-[#FBBC05] monseratt'>{`"Explore the world one click at a time."`}</p>
      </div>
      
      <div className='mt-1/2 w-full h-3/4 flex flex-col sm:flex-row justify-center items-center'> 
         <span className='options-button flex justify-center items-center rounded-md m-2 w-auto h-16 xl:w-96 xl:h-20 bg-black'>
          <img className='h-8 w-8 m-2 xl:h-12 xl:w-12' src={geoguess} alt="" />
          <Link className='m-2 text-2xl xl:text-3xl monseratt' to={'/geoguesser'}>Guess The Location</Link>
         </span>
         <span className='options-button flex justify-center items-center rounded-md m-2 w-60 h-16 xl:w-72 xl:h-20 bg-black'>
          <img className='h-8 w-8 m-2 xl:h-12 xl:w-12' src={locator} alt="" />
          <Link className='m-2 text-2xl xl:text-3xl monseratt' to="/nearme">NearMe</Link>
         </span>
      </div>
      
    </div>

    {/* hamburger */}

    <div className={`slide_in rounded-2xl h-screen w-1/4 bg-black absolute right-0 top-0 flex-col items-center ${isProfile}`}>

      <div className='w-4/5 border-b-2 border-[#FBBC05] h-48 flex'>

        <div className=' w-1/3 flex justify-center items-center'>
          <PiUserCircle className='w-24 h-24'/>   
        </div>
        <div className='w-2/3 flex justify-center items-center flex-col relative'>
          <p className='text-[#FBBC05] monseratt text-2xl'>Hi , {activeUser.name}</p>
          

          <button onClick={closeProfile} className='absolute top-0 right-0
           text-xl tracking-widest text-[#FBBC05]'>X</button>
        </div>
        
      </div>

      <div className='w-4/5 border-b-2 flex justify-around items-center border-[#FBBC05] h-28'>
        <p className='text-2xl monseratt text-[#FBBC05]'>
        Profile 
        </p>
        <GrCaretNext />
        </div>
      <div className='w-4/5 border-b-2 flex justify-around items-center border-[#FBBC05] h-28'>
      <p className='text-2xl monseratt text-[#FBBC05]'>
        Settings
        </p>
        <GrCaretNext />
      </div>
      <div className='w-4/5 border-b-2 flex justify-around items-center border-[#FBBC05] h-28'>
      <p className='text-2xl monseratt text-[#FBBC05]'>
        Leaderboard 
        </p>
        <GrCaretNext />
      </div>
    </div>
    </>
  )
}

export default Options