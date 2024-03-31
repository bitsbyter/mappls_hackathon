import React, { useState } from 'react'
import Radius from '../Carousel/Radius'
import Carousel from '../Carousel/Carousel'
import { useSelector } from 'react-redux'
import axios from "axios"
const Nearme = () => {
  const userCoords=useSelector((store)=>store.userCoords);
  const getData= async ()=>{
    const bearerToken="013cb2e2-826c-4f58-9586-de51d8efc584";
    const lat=userCoords.lat;
    const lng=userCoords.long
   const baseUrl="https://atlas.mappls.com/api/places/nearby/json"
   try{
    const response=await axios.get(`${baseUrl}`,{
        params:{
            keywords:"cafe",
            refLocation:`${lat},${lng}`,
            radius:5000
        },
        headers:{
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        }
    })
    console.log(response.data);
   }catch(error){
    console.log(error)
   }
}
  const [isCarousel , setIsCarousel] = useState(false)
//Onkar make an navbar typeof thing for user to search for the category of things they want to search
  function loadCarousel () {
    getData();
    !isCarousel ? setIsCarousel(true) : setIsCarousel(false)
  }
   
  return (

    <> 
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      <span className='m-4'>{`Select your radius ->`}</span>
      <Radius />
      {!isCarousel ? <button onClick={loadCarousel} className='w-14 h-8 border rounded-md m-2'>Search</button> : <button onClick={loadCarousel} className='w-14 h-8 border rounded-md m-2'>Back</button>}
      {isCarousel ? <Carousel /> : <h1 className='m-4'>Nothing to display yet</h1>}
     
    </div>
    </>
    
  )
}

export default Nearme