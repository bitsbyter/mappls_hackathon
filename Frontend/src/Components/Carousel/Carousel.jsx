import React , {useState , useEffect} from 'react'
import axios from 'axios'

const Carousel = () => {

  const [data, setData] = useState(
    [
      {
        id : 0,
        text : "interesting"
      } , 
      {
        id : 1,
        text : "omoshirei dana"
      },
      {
        id : 2,
        text : 'sugoi jane'
      }
    ]
  );

  // useEffect(() => {
  //   axios.get('https://api.example.com/data')
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data: ', error);
  //     });
  // }, []);

  return (
    <div className='carousel_wrapper w-screen h-screen flex justify-center item-center overflow-hidden'>
      {data.map(el => {
        return(
          <>
            <div className='min-w-48 h-32 flex flex-col border justify-center items-center m-6'>
              <p className='m-4'>{el.id}</p>
              <p className='m-4'>{el.text}</p>
            </div>        
          </>
        )
      })}
    </div>
  )
}

export default Carousel