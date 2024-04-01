import React, { useState, useEffect } from 'react';
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

import BackgroundImage from '../../assets/Images/background.png'
import logo from '../../assets/Images/logo.png'

import axios from 'axios'

const Carousel = () => {

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
        <div className='w-auto h-auto hidden lg:flex min-h-96 justify-center items-center'>

          <div onClick={previous} className='z-0 first-line: left-1/4 absolute border w-60 h-96 justify-center items-center m-2 rounded-xl flex flex-col'> {data[index.prev].text} </div>
          <div className='z-10 absolute border w-60 h-96 justify-center items-center m-2 rounded-xl flex flex-col'> {data[index.curr].text} </div>
          <div onClick={next} className='z-0 first-line: right-1/4 absolute border w-60 h-96 justify-center items-center m-2 rounded-xl flex flex-col'> {data[index.nxt].text} </div>

        </div>




        <div className='flex items-center w-auto h-auto lg:hidden'>
          <GrCaretPrevious onClick={previous} className='scale-150 m-2'/>
              <div className='border w-60 h-96 justify-center items-center m-2 rounded-xl flex flex-col'> 
                <p> {data[index.prev].text} </p>
              </div>
            <GrCaretNext onClick={next} className='scale-150 m-2'/>
        </div>
      </div>
    </>
    
  );
}

export default Carousel;