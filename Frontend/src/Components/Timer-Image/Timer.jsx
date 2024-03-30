import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ minutes = 0, seconds = 0, isRunning }) => {
  const [time, setTime] = useState({ minutes, seconds });

  useEffect(() => {
    let timer = null;
    if (isRunning) {
      timer = setInterval(() => {
        if (time.minutes === 0 && time.seconds === 0) {
          clearInterval(timer);
        } else if (time.seconds === 0) {
          setTime({ minutes: time.minutes - 1, seconds: 59 });
        } else {
          setTime({ ...time, seconds: time.seconds - 1 });
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  return (
    <div>
      <div>
        {time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
      </div>
    </div>
  );
};

export default CountdownTimer;
