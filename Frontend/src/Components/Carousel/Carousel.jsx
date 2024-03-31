import React, { useState, useEffect } from 'react';
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

import axios from 'axios'

const Carousel = ({ interval = 1000 }) => {

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
        <GrCaretPrevious onClick={previous} className='scale-150 m-2'/>
        <div className='w-auto h-auto flex flex-col max-h-96 overflow-y-hidden'>

          {data.map(el => {
            return(
              <>
                <div className='border w-60 min-h-80 justify-center items-center m-6 rounded-xl flex flex-col'> 
                    <p> {[el.id].text} </p>
                </div>
              </>
            )
          })}

          {/* <div className='border w-60 h-96 justify-center items-center m-2 rounded-xl flex flex-col'> 
            <p> {data[index].text} </p>
          </div> */}
        </div>
        <GrCaretNext onClick={next} className='scale-150 m-2'/>
      </div>
    
  );
}

export default Carousel;