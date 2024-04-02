import React, { useState, useEffect } from 'react';
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

import BackgroundImage from '../../assets/Images/background.png'
import logo from '../../assets/Images/logo.png'
import qutub from '../../assets/Images/QutubMinar2.jpg'

import axios from 'axios'
import { useSelector } from 'react-redux';

const Carousel = () => {
   const carouselData=useSelector((store)=>store.carouselData);
   console.log(carouselData)
  const [data , setData] = useState(
    [
      {
        id : 0,
        text : 'hello'
      },
      {
        id : 1,
        text : 'there'
      },
      {
        id : 2,
        text : 'welcome'
      },
      {
        id : 3,
        text : 'bye'
      }
    ]
  )

  const [index , setIndex] = useState({
    prev : 0,
    curr : 1,
    nxt : 2
  })

  // useEffect(()=>{
  //   axios.get('api')
  //   .then(response => {
  //     setData(response.data)
  //   })
  // } , [])

  const next = () => {
    if (index.nxt == data.length - 1) 
    {
      setIndex({prev : data.length-2 , curr : data.length-1 , nxt:0})
    } else if (index.curr == data.length - 1)
    {
      setIndex({prev : data.length-1 , curr : 0 , nxt:1})
    } else if (index.prev == data.length - 1)
    {
      setIndex({prev : 0 , curr : 1 , nxt:2})
    } else {
      setIndex({
      prev: index.prev + 1,
      curr: index.curr + 1,
      nxt: index.nxt + 1
  })}
  }
  const previous = () => {
    if (index.prev == 0) 
    {
      setIndex({prev : data.length-1 , curr : 0 , nxt : 1})
    } else if (index.curr == 0)
    {
      setIndex({prev : data.length-2 , curr : data.length - 1 , nxt:0})
    } else if (index.nxt == 0)
    {
      setIndex({prev : data.length -3 , curr : data.length -2 , nxt: data.length - 1})
    } else {
      setIndex({
      prev: index.prev - 1,
      curr: index.curr - 1,
      nxt: index.nxt - 1
  })}
  }

  return (
    <>
    <div className='background bg-[#FBBC05] w-screen h-screen bg-cover bg-center fixed -z-50'>
      <img className='w-full h-full' src={BackgroundImage} alt="" />
    </div>

      <div className='flex justify-center items-center w-screen h-screen'>

        <div className=' w-11/12 hidden lg:flex min-h-96 justify-center items-center relative'>

          <div onClick={previous} className='z-0 absolute lg:right-2/4 w-2/5 h-80 justify-center items-center m-2 rounded-xl flex bg-black opacity-60 shadow-sm shadow-[#FBBC05]'>
          <div className='carousel-image w-3/5 h-4/5 rounded-lg m-4 flex justify-center items-center'> <img className='h-full rounded-3xl' src={qutub} alt="" /></div>
              <div className='w-2/5 h-4/5 rounded-lg flex flex-col justify-center items-center'>
                <div className='carousel-text flex flex-col justify-center items-center'>
                  <span className='h-8 w-full lg:text-xl xl:text-2xl text-[#FBBC05]'>{`Qutub Minar`}</span>
                  <span className='w-full h-6 lg:text-[10px] text-xs'>{`Chattarpur, New Delhi`}</span>
                  <span className='w-full h-auto lg:text-[10px] text-xs text-white/55 '>Lorem id w b ejbn nfonf onfoq noiwfoiqnofinqof iifnoiq no oqn qoif nqoifn qo nqoif3qn </span>
                </div>
                <button className='carousel-btn rounded-lg w-20 h-8 bg-[#FBBC05] text-black mt-6 font-bold'>Explore</button>
              </div>
          </div>

          <div className='z-10 scale-125 w-2/5 h-80 justify-center items-center m-2 rounded-xl flex bg-black shadow-sm shadow-[#FBBC05]'>
              <div className='carousel-image w-3/5 h-4/5 rounded-lg m-4 flex justify-center items-center'> <img className='h-full rounded-3xl' src={qutub} alt="" /></div>
              <div className='w-2/5 h-4/5 rounded-lg flex flex-col justify-center items-center'>
                <div className='carousel-text flex flex-col justify-center items-center'>
                  <span className='h-8 w-full lg:text-xl xl:text-2xl text-[#FBBC05]'>{`Qutub Minar`}</span>
                  <span className='w-full h-6 lg:text-[10px] text-xs'>{`Chattarpur, New Delhi`}</span>
                  <span className='w-full h-auto lg:text-[10px] text-xs text-white/55 '>Lorem ipsum dolor sit amet consectetur adipisicing elita dad w b ejbn nfonf onfoq noiwfoiqnofinqof iifnoiq no oqn qoif nqoifn qo nqoif3qn </span>
                </div>
                <button className='carousel-btn rounded-lg w-20 h-8 bg-[#FBBC05] text-black mt-6 font-bold'>Explore</button>
              </div>
          </div>

          <div onClick={next} className='z-0 absolute lg:left-2/4 w-2/5 h-80 justify-center items-center m-2 rounded-xl flex bg-black opacity-60 shadow-sm shadow-[#FBBC05]'>
          <div className='carousel-image w-3/5 h-4/5 rounded-lg m-4 flex justify-center items-center'> <img className='h-full rounded-3xl' src={qutub} alt="" /></div>
            <div className='w-2/5 h-4/5 rounded-lg flex flex-col justify-center items-center'>
                <div className='carousel-text flex flex-col justify-center items-center'>
                  <span className='h-8 w-full lg:text-xl xl:text-2xl text-[#FBBC05]'>{`Qutub Minar`}</span>
                  <span className='w-full h-6 lg:text-[10px] text-xs'>{`Chattarpur, New Delhi`}</span>
                  <span className='w-full h-auto lg:text-[10px] text-xs text-white/55 '>Lorem ipsum dolor sit amet consectetur adipisicing elita dad w b ejbn nfonf onfoq noiwfoiqnofinqof iifnoiq no oqn qoif nqoifn qo nqoif3qn </span>
                </div>
                <button className='carousel-btn rounded-lg w-20 h-8 bg-[#FBBC05] text-black mt-6 font-bold'>Explore</button>
              </div>
          </div>

        </div>

        <div className='flex items-center w-auto h-auto lg:hidden'>
          <GrCaretPrevious onClick={previous} className='scale-150 m-2'/>
            <div className='carousel-image w-3/5 h-4/5 rounded-lg m-4 flex justify-center items-center'> <img className='h-full rounded-3xl' src={qutub} alt="" /></div>
              <div className='w-2/5 h-4/5 rounded-lg flex flex-col justify-center items-center'>
                <div className='carousel-text flex flex-col justify-center items-center'>
                  <span className='h-8 w-full lg:text-xl xl:text-2xl text-[#FBBC05]'>{`Qutub Minar`}</span>
                  <span className='w-full h-6 lg:text-[10px] text-xs'>{`Chattarpur, New Delhi`}</span>
                  <span className='w-full h-auto lg:text-[10px] text-xs text-white/55 '>Lorem ipsum dolor sit amet consectetur adipisicing elita dad w b ejbn nfonf onfoq noiwfoiqnofinqof iifnoiq no oqn qoif nqoifn qo nqoif3qn </span>
                </div>
                <button className='carousel-btn rounded-lg w-20 h-8 bg-[#FBBC05] text-black mt-6 font-bold'>Explore</button>
              </div>
            <GrCaretNext onClick={next} className='scale-150 m-2'/>
        </div>
      </div>
    </>
    
  );
}

export default Carousel;