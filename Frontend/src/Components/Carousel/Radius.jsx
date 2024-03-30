import React, { useState, useRef, useEffect } from 'react';

const Radius = () => {
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef(null);

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

  return (
    <>
    <div ref={progressBarRef} className="w-64 h-4 bg-gray-200 rounded overflow-hidden">
      <div className="h-full bg-blue-500" style={{ width: `${progress}%` }} />
    </div>
    <span>{`${Math.floor(progress*2)} kms`}</span>
    </>
  );
};

export default Radius;
