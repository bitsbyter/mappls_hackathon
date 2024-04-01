import React, { useState, useRef, useEffect } from 'react';
import { radiusActions } from '../../Store/userRadiusSlice';
import { useDispatch } from 'react-redux';
const Radius = () => {
  const [progress, setProgress] = useState(0);
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

   const handleClick=()=>{
    const radius=(Math.floor(progress))*500;
    dispatch(radiusActions.setRadius(radius))
   }

  return (
    <>
    <div ref={progressBarRef} className="w-96 h-3 bg-gray-200 rounded overflow-hidden">
      <div className="h-full bg-[#FBBC05]" style={{ width: `${progress}%` }} />
    </div>
    <span>{`${Math.floor(progress*0.5)} kms`}</span>
    <button onClick={handleClick}>Set Radius</button>
    </>
  );
};

export default Radius;
