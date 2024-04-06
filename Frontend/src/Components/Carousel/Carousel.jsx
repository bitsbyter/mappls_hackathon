import React, { useState, useEffect } from 'react';
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

import BackgroundImage from '../../assets/Images/background.png'
import logo from '../../assets/Images/logo.png'
import qutub from '../../assets/Images/QutubMinar2.jpg'
import home from '../../assets/Images/home.png'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useSelector } from 'react-redux';

import CarouselData from '../../../CarouselData'

const Carousel = () => {
   const carouselData=useSelector((store)=>store.carouselData);  //Onkar yeh raha tera data saara carousel ke liye 10 items hai pls isko carousel mei feed karke carousel bana de
   console.log(CarouselData);

  const [data , setData] = useState(
    CarouselData
  )

  const [index , setIndex] = useState({
    prev : 0,
    curr : 1,
    nxt : 2
  })

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

    <Link to={'../options'} className='absolute top-0 left-0 w-8 h-8 m-4'><img src={home} alt="" /></Link>

      <div className='flex justify-center items-center w-screen h-screen'>

        <div className=' w-11/12 hidden lg:flex min-h-96 justify-center items-center relative'>

        <GrCaretPrevious onClick={previous} className='h-14 w-14 m-2 absolute left-0'/>

          <div onClick={previous} className='z-0 absolute lg:right-2/4 w-2/5 h-80 justify-center items-center m-2 rounded-3xl flex bg-black opacity-60 shadow-sm shadow-[#FBBC05]'>
          <div className='carousel-image w-3/5 h-4/5 rounded-lg m-4 flex justify-center items-center'>
            {/* <img className='h-full rounded-3xl' src={qutub} alt="" /> */}
          </div>
              <div className='w-2/5 h-4/5 rounded-lg flex flex-col justify-center items-center'>
                <div className='carousel-text flex flex-col justify-center items-center'>
                  <span className='h-8 w-full lg:text-xl xl:text-2xl text-[#FBBC05]'>
                    {/* {data[index.prev].orderIndex} */}
                    {/* {`Qutub Minar`} */}
                    </span>
                  <span className='w-full h-6 lg:text-[10px] text-xs'>
                  {data[index.prev].placeName}
                    {/* {`Chattarpur, New Delhi`} */}
                    </span>
                  <span className='w-full h-auto lg:text-[10px] text-xs text-white/55 '>
                    {/* {data[index.prev].placeAddress} */}
                    {/* Lorem id w b ejbn nfonf onfoq noiwfoiqnofinqof iifnoiq no oqn qoif nqoifn qo nqoif3qn  */}
                    </span>
                </div>
                <button className='carousel-btn rounded-lg w-20 h-8 bg-[#FBBC05] text-black mt-6 font-bold monseratt'>Explore</button>
              </div>
          </div>

          <div className='z-10 scale-125 w-2/5 h-80 justify-center items-center m-2 rounded-3xl flex bg-black shadow-sm shadow-[#FBBC05]'>
              <div className='carousel-image w-3/5 h-4/5 rounded-lg m-4 flex justify-center items-center'> 
              {/* <img className='h-full rounded-3xl' src={qutub} alt="" /> */}
              </div>
              <div className='w-2/5 h-4/5 rounded-lg flex flex-col justify-center items-center'>
                <div className='carousel-text flex flex-col justify-center items-center'>
                  <span className='h-auto w-full md:text-lg lg:text-xl xl:text-2xl text-[#FBBC05] monseratt font-bold'>
                    {data[index.curr].placeName}
                    {/* {`Qutub Minar`} */}
                  </span>
                  <span className='w-full h-6 lg:text-[10px] text-xs  pb-8'>
                    {/* {data[index.curr].orderIndex} */}
                    {/* {`Chattarpur, New Delhi`} */}
                  </span>
                  <span className='w-full h-auto lg:text-[10px] text-xs text-white/55 pb-12'>
                    {data[index.curr].placeAddress}
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elita dad w b ejbn nfonf onfoq noiwfoiqnofinqof iifnoiq no oqn qoif nqoifn nqoif3qn  */}
                  </span>
                </div>
                <button className='carousel-btn rounded-lg w-20 h-8 bg-[#FBBC05] text-black mt-10 font-bold monseratt'>Explore</button>
              </div>
          </div>

          <div onClick={next} className='z-0 absolute lg:left-2/4 w-2/5 h-80 justify-center items-center m-2 rounded-3xl flex bg-black opacity-60 shadow-sm shadow-[#FBBC05]'>
          <div className='carousel-image w-3/5 h-4/5 rounded-lg m-4 flex justify-center items-center'> 
          {/* <img className='h-full rounded-3xl' src={qutub} alt="" /> */}
          </div>
            <div className='w-2/5 h-4/5 rounded-lg flex flex-col justify-center items-center'>
                <div className='carousel-text flex flex-col justify-center items-center'>
                  <span className='h-8 w-full lg:text-xl xl:text-2xl text-[#FBBC05]'>
                    {data[index.nxt].placeName}
                    {/* {`Qutub Minar`} */}
                    </span>
                  <span className='w-full h-6 lg:text-[10px] text-xs'>
                    {/* {data[index.nxt].orderIndex} */}
                    {/* {`Chattarpur, New Delhi`} */}
                    </span>
                  <span className='w-full h-auto lg:text-[10px] text-xs text-white/55 '>
                    {/* {data[index.nxt].placeAddress} */}
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elita dad w b ejbn nfonf onfoq noiwfoiqnofinqof iifnoiq no oqn qoif nqoifn qo nqoif3qn  */}
                    </span>
                </div>
                <button className='carousel-btn rounded-lg w-20 h-8 bg-[#FBBC05] text-black mt-6 font-bold mon monseratt'>Explore</button>
              </div>
          </div>

          <GrCaretNext onClick={next} className='h-14 w-14 m-2 absolute right-0'/>

        </div>

        <div className ='w-screen h-screen flex justify-center lg:hidden items-center '>
            <GrCaretPrevious onClick={previous} className='h-14 w-14 m-2'/>
          <div className=' sm:flex items-center w-7/12 h-2/3 bg-black rounded-3xl shadow-md shadow-[#FBBC05]'>
              <div className='carousel-image h-2/5 sm:w-3/5 sm:h-4/5 rounded-lg m-4 flex justify-center items-center'> 
              {/* <img className='h-full rounded-3xl' src={qutub} alt="" /> */}
              </div>
                <div className='sm:w-2/5 sm:h-4/5 rounded-lg flex flex-col justify-center items-center'>
                  <div className='carousel-text flex flex-col'>
                    <span className='monseratt h-14 w-full text-xl sm:text-2xl xl:text-2xl text-[#FBBC05] flex justify-center sm:justify-start sm:p-2 items-center font-bold pr-2'>
                    {data[index.curr].placeName}  
                      {/* {`Qutub Minar`} */}
                    </span>
                    <span className='monseratt w-full h-auto text-xs sm:p-2 flex justify-center sm:justify-start'>
                      {/* {`Chattarpur, New Delhi`} */}
                    </span>
                    <span className='monseratt w-full h-auto text-xs text-white/55 sm:p-4 flex text-center sm:text-start'>
                    {data[index.curr].placeAddress}
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elita daerd w b ejbn nfonf onfoq noiwfoiqnofinqof iifnoiq no oqn qoif nqoifn qo nqoif3qn */}
                     </span>
                  </div>
                  <button className='sm:self-start monseratt carousel-btn rounded-lg w-24 sm:w-7/12 sm:h-12 h-10 bg-[#FBBC05] text-black text-md sm:text-lg lg:text-xl mt-4 sm:mt-10 font-bold sm:mb-4 sm:m-2 flex self-center justify-center items-center'>Explore</button>
                </div>
          </div>
              <GrCaretNext onClick={next} className='h-14 w-14 m-2'/>
        </div>
      </div>
    </>
    
  );
}

export default Carousel;