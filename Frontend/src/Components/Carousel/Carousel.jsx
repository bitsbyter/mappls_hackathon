import React, { useState, useEffect } from 'react';
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

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
      }
    ]
  )

  const [index , setIndex] = useState(0)

  // useEffect(()=>{
  //   axios.get('api')
  //   .then(response => {
  //     setData(response.data)
  //   })
  // } , [])

  const next = () => {
    if (index == data.length-1) {
      setIndex(0)
    } else setIndex(index + 1)
  }
  const previous = () => {
    if (index == 0) {
      setIndex(data.length - 1)
    } else setIndex(index-1)
  }

  return (
    
      <div className='flex justify-center items-center w-auto h-auto'>

        <div className='w-auto h-auto hidden lg:flex max-h-96 overflow-y-hidden'>
          {data.map(el => {
            return(
              <>
                <div key={el.id} className='border w-60 min-h-80 justify-center items-center m-6 rounded-xl flex flex-col'> 
                  <p> {el.text} </p>
                </div>
              </>
            )
          })}
          <div></div>
        </div>
        <div className='flex items-center w-auto h-auto lg:hidden'>
          <GrCaretPrevious onClick={previous} className='scale-150 m-2'/>
              <div className='border w-60 h-96 justify-center items-center m-2 rounded-xl flex flex-col'> 
                <p> {data[index].text} </p>
              </div>
            <GrCaretNext onClick={next} className='scale-150 m-2'/>
        </div>
      </div>
    
  );
}

export default Carousel;