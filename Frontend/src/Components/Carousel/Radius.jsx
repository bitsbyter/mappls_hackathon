import React, { useState, useRef, useEffect } from 'react';
import { radiusActions } from '../../Store/userRadiusSlice';
import { useDispatch } from 'react-redux';

const Radius = () => {
  const [progress, setProgress] = useState(20);
  const progressBarRef = useRef(null);
  const dispatch=useDispatch();
  useEffect(() => {
    const progressBar = progressBarRef.current;

    const handleMouseMove = (event) => {
      const rect = progressBar.getBoundingClientRect();
      const deltaX = event.clientX - rect.left;
      const width = rect.width;
      const newProgress = Math.min(100, Math.max(0, (deltaX / width) * 100));
      setProgress(newProgress);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    progressBar.addEventListener('mousedown', (event) => {
      event.preventDefault();
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);


  
  useEffect(()=>{
    const radius=(Math.floor(progress))*2000;
    console.log(radius)
    dispatch(radiusActions.setRadius(radius))
   } , [progress])

  return (
    <>
    <div ref={progressBarRef} className="w-40 sm:w-80 h-3 bg-gray-200 rounded-md overflow-hidden">
      <div className="h-full bg-[#FBBC05]" style={{ width: `${progress}%`}} />
    </div>
    <button className='bg-[#FBBC05] p-2 rounded-md text-black  monseratt font-bold'>Set Radius</button>
    <span className='monseratt'>{`${Math.floor(progress*2)} kms`}</span>
    {/* <button onClick={handleClick}>Set Radius</button> */}
    </>
  );
};

export default Radius;
